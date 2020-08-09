import styled from "styled-components";
import { useRouter } from "next/router";
import AllCars from "../components/AllCars/AllCars";
import Sidebar from "../components/Sidebar/Sidebar";
import { useState } from "react";
import { Row, Col, Divider, Empty, Affix } from "antd";

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
  total,
  all,
}: {
  cars?: CarInterface[];
  makes?: any[];
  prices?: any[];
  models?: any[];
  makeFilters?: any[];
  all?: any[];
  makeModel?: any[];
  count: number;
  total: number;
}) {
  const [select, setSelect] = useState<SelectProps>({
    make: "",
    model: "",
    location: "",
    min: 0,
    max: 0,
  });

  const { push, query }: any = useRouter();

  const allCars = () => {
    let queryCars =
      all.length > 0
        ? all
        : makeModel.length > 0
        ? makeModel
        : makeFilters.length > 0
        ? makeFilters
        : prices.length > 0
        ? prices
        : cars;

    return queryCars;
  };

  let a: any = new Set(models.map((m) => m));

  const prev = () => {
    let num = Number(query.page) ? Number(query.page) - 1 : 0;
    if (num <= 0) {
      num = count;
    }
    push(`/?page=${num}`);
  };
  const next = () => {
    let num = Number(query.page) ? Number(query.page) + 1 : 2;
    if (num > count) {
      num = 1;
    }
    push(`/?page=${num}`);
  };

  let nTotal =
    makeModel.length > 0
      ? makeModel.length
      : makeFilters.length > 0
      ? makeFilters.length
      : prices.length > 0
      ? prices.length
      : total;

  return (
    <Row style={{ width: "100%", paddingLeft: "1em" }}>
      <Col className='gutter-row' xxl={6} xl={6} lg={8} md={8} sm={8} xs={24}>
        <Affix offsetTop={10}>
          <Divider orientation='center'>Filter Cars</Divider>
          <Sidebar
            setSelect={setSelect}
            select={select}
            makes={makes}
            models={models}
            nTotal={nTotal}
            total={total}
          />
        </Affix>
      </Col>
      <Col offset={1} xxl={17} xl={17} lg={15} md={15} sm={15} xs={24}>
        <Divider orientation='left'>Cars</Divider>
        <div>
          {allCars().length <= 0 && <Empty />}
          {allCars().map((car: CarInterface) => (
            <AllCars key={car._id} car={car} />
          ))}
          {allCars().length > 0 && (
            <Ul className='paginate'>
              <li className='arrow_left' onClick={prev}>
                <span>&#8592;</span>
              </li>
              {Array(count)
                .fill(null)
                .map((v, i: number) => (
                  <li
                    key={i}
                    className={
                      Number(query.page) === i + 1 ? "active" : undefined
                    }
                    onClick={() => push(`/?page=${i + 1}`)}
                  >
                    {i + 1}
                  </li>
                ))}
              <li className='arrow_right' onClick={next}>
                <span>&#8594;</span>
              </li>
            </Ul>
          )}
        </div>
      </Col>
    </Row>
  );
}

export async function getServerSideProps(ctx) {
  let make = ctx.query.make ? ctx.query.make : null;
  let mod = ctx.query.model ? ctx.query.model : null;
  let min = ctx.query.min ? ctx.query.min : null;
  let max = ctx.query.max ? ctx.query.max : null;

  let page = Number(ctx.query.page) || 1;
  let limit = Number(ctx.query.limit) || 4;

  const count_url = `https://buyyourcar-api.herokuapp.com/api/v1/count`;
  const url = `https://buyyourcar-api.herokuapp.com/api/v1/cars?page=${page}&limit=${limit}`;
  const make_url = `https://buyyourcar-api.herokuapp.com/api/v1/makes`;
  const price_url = `https://buyyourcar-api.herokuapp.com/api/v1/prices?min=${min}&max=${max}`;
  const all_url = `https://buyyourcar-api.herokuapp.com/api/v1/prices?min=${min}&max=${max}&make=${make}&model=${mod}`;
  const base_on_make_url = `https://buyyourcar-api.herokuapp.com/api/v1/cars/make/${make}`;
  const model_url = `https://buyyourcar-api.herokuapp.com/api/v1/models/${make}`;
  const make_model_url = `https://buyyourcar-api.herokuapp.com/api/v1/cars/model/make?make=${make}&model=${mod}`;
  const [
    res,
    filter,
    model,
    base_make,
    makmod,
    price,
    length,
    all,
  ] = await Promise.all([
    fetch(url),
    fetch(make_url),
    fetch(model_url),
    fetch(base_on_make_url),
    fetch(make_model_url),
    fetch(price_url),
    fetch(count_url),
    fetch(all_url),
  ]);
  const cars = await res.json();
  const makes = await filter.json();
  const prices = await price.json();
  const models = await model.json();
  const baseMake = await base_make.json();
  const makeModel = await makmod.json();
  let count = await length.json();
  let all_query = await all.json();

  return {
    props: {
      cars: cars.data,
      makes: makes.data,
      models: models.data,
      makeFilters: baseMake.data,
      makeModel: makeModel.data,
      prices: prices.data,
      count: Math.ceil(count.data / limit),
      total: count.data,
      all: all_query.data,
    },
  };
}

export default IndexPage;

const Container = styled.div`
  padding: 0% 10px;
`;

const Ul = styled.ul`
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
