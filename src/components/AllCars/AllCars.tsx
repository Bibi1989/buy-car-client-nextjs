import React from "react";
import styled from "styled-components";

const bmw = "./assets/bmw.jpg";
const toyota = "./assets/toyota.jpg";
const honda = "./assets/honda.jpg";
const lexus = "./assets/lexus.jpg";

const AllCars = ({
  car: { name, model, year, location, fuel_type, description, photo_url },
}) => {
  const photo = () => {
    const img = photo_url
      ? photo_url
      : name === "bmw"
      ? bmw
      : name === "toyota"
      ? toyota
      : name === "honda"
      ? honda
      : lexus;
    return img;
  };
  return (
    <Container>
      <Grid>
        <Image>
          <img src={photo()} alt='cars poster' />
        </Image>
        <Content>
          <h1 className='make'>{name.toUpperCase()}</h1>
          <h2 className='model'>{model}</h2>
          <p className='year'>{year}</p>
          <p className='fuel'>{fuel_type}</p>
          <p className='location'>{location}</p>
          <p className='description'>{`${description.slice(0, 50)}...`}</p>
        </Content>
      </Grid>
    </Container>
  );
};

export default AllCars;

const Container = styled.div`
  margin-bottom: 2em;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
  height: 300px;
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
//  const Content = styled.div``
