import React from "react";
import styled from "styled-components";
import { formatPrice } from "../../utils/formatPrice";

const hmm = "../../../assets/lexus.jpg";

const bmw = "./assets/bmw.jpg";
const toyota = "./assets/toyota.jpg";
const honda = "./assets/honda.jpg";
const lexus = "./assets/lexus.jpg";

const Car = ({
  car: {
    name,
    model,
    year,
    location,
    fuel_type,
    description,
    photo_url,
    price,
    distance,
  },
}) => {
  return (
    <Container>
      <H1>
        {name} - {model} - {year}
      </H1>
      <Grid>
        <Image>
          <img src={photo_url || hmm} alt='cars poster' />
        </Image>
        <Content>
          <h1 className='make'>Car Make: {name.toUpperCase()}</h1>
          <h2 className='model'>Car Model: {model}</h2>
          <p className='year'>Manufacturing Year: {year}</p>
          <p className='price'>Car Price: ₦ {formatPrice(price)}</p>
          <p className='kilo'>Car Distance: {formatPrice(distance)} KM</p>
          <p className='fuel'>Fuel Type: {fuel_type}</p>
          <p className='location'>Location: {location}</p>
          <p className='description'>Car Discription: {description}</p>
        </Content>
      </Grid>
    </Container>
  );
};

export default Car;

const Container = styled.div`
  margin-bottom: 2em;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
`;
const Image = styled.div`
  max-height: 100%;
  overflow: hidden;

  img {
    border-radius: 0.25em;
    width: 100%;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p,
  h2,
  h1 {
    margin-bottom: 5px;
  }
`;
const H1 = styled.h1`
  text-align: center;
  color: #555555;
  padding: 1em 0;
  text-transform: uppercase;
`;
//  const Content = styled.div``
