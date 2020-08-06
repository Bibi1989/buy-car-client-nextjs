import styled from "styled-components";
import { useRouter } from "next/router";
import AllCars from "../components/AllCars/AllCars";
import Sidebar from "../components/Sidebar/Sidebar";
import { useState } from "react";

interface CarInterface {
  _id: string;
  name: string;
  model: string;
  description: string;
  price: string;
  distance: string;
  fuel_type: string;
  photo_url: string;
  color: string;
  year: string;
  location: string;
  createdAt: string;
}

interface SelectProps {
  make: string;
  model: string;
  location: string;
  min: number;
  max: number;
}

function IndexPage({
  cars,
  makes,
  models,
  makeFilters,
  makeModel,
  prices,
  count,
}: {
  cars?: CarInterface[];
  makes?: any[];
  prices?: any[];
  models?: any[];
  makeFilters?: any[];
  makeModel?: any[];
  count: number;
}) {
  const [select, setSelect] = useState<SelectProps>({
    make: "",
    model: "",
    location: "",
    min: 0,
    max: 0,
  });

  console.log({ prices });

  let queryCars =
    makeModel.length > 0
      ? makeModel
      : makeFilters.length > 0
      ? makeFilters
      : prices.length > 0
      ? prices
      : cars;

  const { push, query }: any = useRouter();
  // console.log({ cars, makes, models, makeFilters, makeModel, prices });

  console.log(typeof Number(query.page));

  const prev = () => {
    let num = Number(query.page) - 1;
    if (num <= 0) {
      num = count;
    }
    push(`/?page=${num}`);
  };
  const next = () => {
    let num = Number(query.page) + 1;
    if (num > count) {
      num = 1;
    }
    push(`/?page=${num}`);
  };

  return (
    <div>
      <Container>
        <Grid>
          <div className='sidebar'>
            <Sidebar
              setSelect={setSelect}
              select={select}
              makes={makes}
              models={models}
              queryCars={queryCars}
            />
          </div>
          <div>
            {queryCars.map((car: CarInterface) => (
              <AllCars key={car._id} car={car} />
            ))}
            <ul className='paginate'>
              <li className='arrow_left' onClick={prev}>
                <span>&#8592;</span>
              </li>
              {Array(count)
                .fill(null)
                .map((v, i: number) => (
                  <li
                    className={Number(query.page) === i + 1 && "active"}
                    onClick={() => push(`/?page=${i + 1}`)}
                  >
                    {i + 1}
                  </li>
                ))}
              <li className='arrow_right' onClick={next}>
                <span>&#8594;</span>
              </li>
            </ul>
          </div>
        </Grid>
      </Container>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  let make = ctx.query.make ? ctx.query.make : null;
  let mod = ctx.query.model ? ctx.query.model : null;
  let min = ctx.query.min ? ctx.query.min : null;
  let max = ctx.query.max ? ctx.query.max : null;

  let page = Number(ctx.query.page) || 1;
  let limit = Number(ctx.query.limit) || 3;
  let offset = (page - 1) * limit;

  const count_url = `http://localhost:5000/api/v1/count`;
  const url = `http://localhost:5000/api/v1/cars?page=${page}&limit=${limit}`;
  const make_url = `http://localhost:5000/api/v1/makes`;
  const price_url = `http://localhost:5000/api/v1/prices?min=${min}&max=${max}`;
  const base_on_make_url = `http://localhost:5000/api/v1/cars/make/${make}`;
  const model_url = `http://localhost:5000/api/v1/models/${make}`;
  const make_model_url = `http://localhost:5000/api/v1/cars/model/make?make=${make}&model=${mod}`;
  const [
    res,
    filter,
    model,
    base_make,
    makmod,
    price,
    length,
  ] = await Promise.all([
    fetch(url),
    fetch(make_url),
    fetch(model_url),
    fetch(base_on_make_url),
    fetch(make_model_url),
    fetch(price_url),
    fetch(count_url),
  ]);
  const cars = await res.json();
  const makes = await filter.json();
  const prices = await price.json();
  const models = await model.json();
  const baseMake = await base_make.json();
  const makeModel = await makmod.json();
  let count = await length.json();

  return {
    props: {
      cars: cars.data,
      makes: makes.data,
      models: models.data,
      makeFilters: baseMake.data,
      makeModel: makeModel.data,
      prices: prices.data,
      count: Math.ceil(count.data / limit),
    },
  };
}

export default IndexPage;

const Container = styled.div`
  padding: 0% 10px;
`;

const Grid = styled.div`
  width: calc(100% - 2em);
  padding: 10px;
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 2em;

  .paginate {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em 0;

    li {
      /* padding: 0 1em; */
      width: 20px;
      height: 20px;
      background: #ddd;
      margin-right: 1em;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.5s ease-in-out;

      &.active {
        background: teal;
        color: white;
        width: 25px;
        height: 25px;
      }
    }

    .arrow_right,
    .arrow_left {
      width: 30px;
      height: 30px;
      background: teal;
      color: white;
    }
  }

  .sidebar {
    position: -webkit-sticky;
    position: sticky !important;
    top: 20vh;
  }

  .count {
    padding: 1em 0;
    text-align: end;
  }
`;
