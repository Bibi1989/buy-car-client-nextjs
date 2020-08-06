import styled from "styled-components";
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
}: {
  cars?: CarInterface[];
  makes?: any[];
  prices?: any[];
  models?: any[];
  makeFilters?: any[];
  makeModel?: any[];
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

  // console.log({ cars, makes, models, makeFilters, makeModel, prices });

  // console.log(cars);

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
            />
          </div>
          <div>
            <p className='count'>{queryCars.length} Cars Found!!!</p>
            {queryCars.map((car: CarInterface) => (
              <AllCars key={car._id} car={car} />
            ))}
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
  const url = "http://localhost:5000/api/v1/cars";
  const make_url = `http://localhost:5000/api/v1/makes`;
  const price_url = `http://localhost:5000/api/v1/prices?min=${min}&max=${max}`;
  const base_on_make_url = `http://localhost:5000/api/v1/cars/make/${make}`;
  const model_url = `http://localhost:5000/api/v1/models/${make}`;
  const make_model_url = `http://localhost:5000/api/v1/cars/model/make?make=${make}&model=${mod}`;
  const [res, filter, model, base_make, makmod, price] = await Promise.all([
    fetch(url),
    fetch(make_url),
    fetch(model_url),
    fetch(base_on_make_url),
    fetch(make_model_url),
    fetch(price_url),
  ]);
  const cars = await res.json();
  const makes = await filter.json();
  const prices = await price.json();
  const models = await model.json();
  const baseMake = await base_make.json();
  const makeModel = await makmod.json();

  return {
    props: {
      cars: cars.data,
      makes: makes.data,
      models: models.data,
      makeFilters: baseMake.data,
      makeModel: makeModel.data,
      prices: prices.data,
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
