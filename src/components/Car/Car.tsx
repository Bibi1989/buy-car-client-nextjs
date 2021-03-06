import React, { useState } from "react";
import styled from "styled-components";
import { formatPrice } from "../../utils/formatPrice";
import { Descriptions, Badge, Col, Row } from "antd";

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
  const [index, setIndex] = useState(0);
  const image = JSON.parse(photo_url)[index]
    ? JSON.parse(photo_url)[index]
    : "";

  const handleImg = (i: number) => {
    setIndex(i);
  };
  const imgArray = JSON.parse(photo_url) ? JSON.parse(photo_url) : [];
  return (
    <Container>
      <H1>
        {name} - {model} - {year}
      </H1>
      <Row gutter={[16, 16]} align='middle'>
        <Col span={12} xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
          <Image>
            <img src={image || hmm} alt='cars poster' />
          </Image>
          <Ul>
            {imgArray.map((img: string, i: number) => (
              <Li key={img} onClick={() => handleImg(i)}>
                <img src={img} alt={img} />
              </Li>
            ))}
          </Ul>
        </Col>
        <Col span={12} xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
          <Descriptions title='Car Details' bordered>
            <Descriptions.Item label='Car Make'>
              {name.toUpperCase()}
            </Descriptions.Item>
            <Descriptions.Item label='Car Model'>
              {model[0].toUpperCase() + model.slice(1)}
            </Descriptions.Item>
          </Descriptions>
          <Descriptions bordered>
            <Descriptions.Item label='Manufacturing Year'>
              {year}
            </Descriptions.Item>
            <Descriptions.Item label='Car Price'>
              ₦ {formatPrice(price)}
            </Descriptions.Item>
          </Descriptions>
          <Descriptions bordered>
            <Descriptions.Item label='Car Distance'>
              {formatPrice(distance)} KM
            </Descriptions.Item>
            <Descriptions.Item label='Fuel Type'>{fuel_type}</Descriptions.Item>
          </Descriptions>
          <Descriptions bordered>
            <Descriptions.Item label='Location'>{location}</Descriptions.Item>
          </Descriptions>
          <Descriptions bordered>
            <Descriptions.Item label='Car Discription'>
              {description}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </Container>
  );
};

export default Car;

const Container = styled.div`
  margin-bottom: 1em;
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

const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  margin-top: 10px;
  list-style: none;

  &::-webkit-scrollbar {
    height: 2px;
  }
`;
const Li = styled.li`
  height: 110px;
  margin-right: 5px;
  cursor: pointer;

  img {
    border-radius: 4px;
    width: 170px;
    height: 110px;
  }
`;
//  const Content = styled.div``
