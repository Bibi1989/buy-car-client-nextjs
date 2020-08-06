import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { formatPrice } from "../../utils/formatPrice";

const bmw = "./assets/bmw.jpg";
const toyota = "./assets/toyota.jpg";
const honda = "./assets/honda.jpg";
const lexus = "./assets/lexus.jpg";

const AllCars = ({
  car: {
    _id,
    name,
    model,
    year,
    location,
    color,
    description,
    photo_url,
    price,
  },
}) => {
  const { push } = useRouter();
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

  const handleNav = (id) => {
    push(`/vehicle/${name}/${model}/${id}`);
  };
  return (
    <Container>
      <Grid>
        <Image onClick={() => handleNav(_id)}>
          <img src={photo_url || bmw} alt='cars poster' />
        </Image>
        <Content color={color.split(" ")[0]}>
          <h1 className='make'>
            <span>{name.toUpperCase()}</span>
            <span></span>
          </h1>
          <h2 className='model'>Car Model: {model}</h2>
          <p className='year'>Manufacturing Year: {year}</p>
          <p className='price'>Car Price: ₦ {formatPrice(price)}</p>
          <p className='location'>Location: {location}</p>
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
  cursor: pointer;

  img {
    border-radius: 0.25em;
    width: 100%;
  }
`;
const Content = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p,
  h2,
  h1 {
    margin-bottom: 5px;
  }

  .make {
    display: flex;
    align-items: center;

    span:last-child {
      display: block;
      width: 30px;
      height: 15px;
      background: ${({ color }) =>
        color === "white" ? "#cccccc" : color ? color : "#aaaaaa"};
      margin-left: 1em;
      border-radius: 4px;
    }
  }
`;
//  const Content = styled.div``
