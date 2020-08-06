import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dropdown from "react-dropdown";
import { useRouter } from "next/router";

// const makes = [
//   { value: "bmw", label: "Bmw" },
//   { value: "toyota", label: "Toyota" },
//   { value: "honda", label: "Honda" },
//   { value: "lexus", label: "Lexus" },
// ];
// const models = [
//   { value: "x5", label: "X5" },
//   { value: "x6", label: "X6" },
//   { value: "x7", label: "X7" },
//   { value: "x8", label: "X8" },
// ];
const locations = [
  { value: "lagos", label: "Lagos" },
  { value: "abuja", label: "Abuja" },
  { value: "bayelsa", label: "Bayelsa" },
  { value: "port harcourt", label: "Port Harcourt" },
];

const Sidebar = ({ setSelect, select, makes, models, queryCars }) => {
  const [mod, setMod] = useState(null);
  const { query, push }: { query: any; push: any } = useRouter();
  const prices = [
    500000,
    1000000,
    1500000,
    2000000,
    2500000,
    3000000,
    10000000,
    20000000,
    30000000,
    40000000,
    50000000,
  ];

  useEffect(() => {
    const getModels = async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/models/${select.make}`
      );
      let mods = await res.json();
      setMod(mods.data);
    };
    getModels();
  }, [select]);

  let newModels = mod ? mod : models;

  const handleSearch = () => {
    push({
      pathname: "/",
      query: select,
    });
  };
  return (
    <Container>
      <List>
        <label>All Cars</label>
        <Button
          background='white'
          onClick={() => {
            push("/");
            setSelect({
              make: "",
              model: "",
              location: "",
              min: 0,
              max: 0,
            });
          }}
        >
          All
        </Button>
      </List>
      <List>
        <label>Makes</label>
        <Select
          name='make'
          onChange={({ target: { value } }) =>
            setSelect({
              ...select,
              make: value,
            })
          }
        >
          <option value={query.make}>{query.make || " Select a make"}</option>
          {makes.map((make: any) => (
            <option key={make.make} value={make.make}>
              {make.make} ({make.count})
            </option>
          ))}
        </Select>
      </List>
      <List>
        <label>Models</label>
        <Select
          name='model'
          onChange={({ target: { value } }) =>
            setSelect({
              ...select,
              model: value,
            })
          }
        >
          <option value={query.model}>
            {query.model || " Select a model"}
          </option>
          {newModels.map((model: any) => (
            <option key={model.model} value={model.model}>
              {model.model}
            </option>
          ))}
        </Select>
      </List>
      <List>
        <label>Minimum Price</label>
        <Select
          name='min'
          onChange={({ target: { value } }) =>
            setSelect({
              ...select,
              min: value,
            })
          }
        >
          <option value={query.min}>{query.min || "Minimum Prices"}</option>
          {prices.map((price: number) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </Select>
      </List>
      <List>
        <label>Maximum Price</label>
        <Select
          name='max'
          onChange={({ target: { value } }) =>
            setSelect({
              ...select,
              max: value,
            })
          }
        >
          <option value={query.max}>{query.max || "Maximum Prices"}</option>
          {prices.map((price: number) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </Select>
      </List>

      <Button background='teal' onClick={handleSearch}>
        Search For Car
      </Button>

      <p className='count'>{queryCars.length} Cars Found!!!</p>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  /* position: sticky;
top: 0; */
`;
const List = styled.div`
  margin-bottom: 1em;

  label {
    display: block;
    padding-bottom: 0.5em;
  }
`;
const Select = styled.select`
  width: 100%;
  padding: 10px 5px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #cccccc;
`;
const Button = styled.button<{ background: string }>`
  display: block;
  width: 100%;
  border: ${({ background }) => (background ? "1px solid #cccccc" : "none")};
  outline: none;
  padding: 0.7em 1.5em;
  background: ${({ background }) => (background ? background : "teal")};
  color: ${({ background }) => (background ? "#333333" : "white")};
  border-radius: 4px;
  cursor: pointer;
`;
// const Container = styled.div``;
