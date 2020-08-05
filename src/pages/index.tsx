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
  min_price: number;
  max_price: number;
}

const Container = styled.div`
  padding: 0% 10px;
`;

const Grid = styled.div`
  width: calc(100% - 2em);
  padding: 10px;
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 2em;
`;

function IndexPage({
  cars,
  makes,
  models,
  makeFilters,
  makeModel,
}: {
  cars: CarInterface[];
  makes: any[];
  models: any[];
  makeFilters: any[];
  makeModel: any[];
}) {
  const [select, setSelect] = useState<SelectProps>({
    make: "bmw",
    model: "",
    location: "",
    min_price: 0,
    max_price: 0,
  });

  let queryCars =
    makeModel.length > 0
      ? makeModel
      : makeFilters.length > 0
      ? makeFilters
      : cars;

  console.log({ cars, makes, models, makeFilters, makeModel });

  return (
    <div>
      <Container>
        <Grid>
          <Sidebar
            setSelect={setSelect}
            select={select}
            makes={makes}
            models={models}
          />
          <div>
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
  const url = "http://localhost:5000/api/v1/cars";
  const make_url = `http://localhost:5000/api/v1/makes`;
  const base_on_make_url = `http://localhost:5000/api/v1/cars/make/${make}`;
  const model_url = `http://localhost:5000/api/v1/models/${make}`;
  const make_model_url = `http://localhost:5000/api/v1/cars/model/make?make=${make}&model=${mod}`;
  // const res = await fetch(url);
  // const filter = await fetch(make_url);
  const [res, filter, model, base_make, makmod] = await Promise.all([
    fetch(url),
    fetch(make_url),
    fetch(model_url),
    fetch(base_on_make_url),
    fetch(make_model_url),
  ]);
  const cars = await res.json();
  const makes = await filter.json();
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
    },
  };
}

export default IndexPage;
