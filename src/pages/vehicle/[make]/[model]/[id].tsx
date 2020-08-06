import Car from "../../../../components/Car/Car";
import styled from "styled-components";

export default function CarDetails({ faq, car }) {
  return (
    <Container>
      <Car car={car} />
    </Container>
  );
}

export const getServerSideProps = async (ctx) => {
  const id = ctx.params.id;
  const url = "http://localhost:5000/api/v1/fags";
  const single_url = `http://localhost:5000/api/v1/cars/${id}`;
  // const res = await fetch(`${url}/${ctx.params.id}`);
  // const response = await fetch(single_url);

  const [res, response] = await Promise.all([
    fetch(`${url}/${ctx.params.id}`),
    fetch(single_url),
  ]);

  const faq = await res.json();
  const car = await response.json();

  return {
    props: { faq, car: car.data },
  };
};

const Container = styled.div`
  padding: 2% 10%;
`;
