import React from "react";
import styled from "styled-components";
import Car from "../../components/Car/Car";

const CarDetail = ({ car }) => {
  return (
    <Container>
      <Car car={car} />
    </Container>
  );
};

export default CarDetail;

export const getServerSideProps = async (ctx) => {
  const id = ctx.params.id;
  const url = `http://localhost:5000/api/v1/cars/${id}`;
  const res = await fetch(url);
  const car = await res.json();

  return {
    props: { car: car.data },
  };
};

const Container = styled.div`
  padding: 2% 10%;
`;
