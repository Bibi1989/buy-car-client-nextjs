import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { states } from "../../utils/states";

const AddCars = () => {
  const url = "https://buyyourcar-api.herokuapp.com/api/v1/cars";
  const [errors, setErrors] = useState([]);
  // const [file, setFile] = useState(null);
  const [values, setValues] = useState({
    color: "",
    description: "",
    distance: "",
    fuel_type: "",
    location: "",
    model: "",
    name: "",
    file: null,
    price: "",
    year: "",
  });
  const handleInput = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const addToCars = async (form) => {
    try {
      await axios.post(url, form, {
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (error) {
      setErrors(error.response.data.error);
    }
  };

  let a = errors.map((e, i) => Object.values(e)[0]);

  console.log(values);

  const addFaqs = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", values.name.toLowerCase());
    form.append("model", values.model.toLowerCase());
    form.append("description", values.description);
    form.append("price", values.price);
    form.append("color", values.color);
    form.append("fuel_type", values.fuel_type.toLowerCase());
    form.append("distance", values.distance);
    form.append("file", values.file);
    form.append("year", values.year);
    form.append("location", values.location.toLowerCase());
    await addToCars(form);
    setValues({
      color: "",
      description: "",
      distance: "",
      fuel_type: "",
      location: "",
      model: "",
      name: "",
      file: "",
      price: "",
      year: "",
    });
  };
  return (
    <Container>
      <div>
        {errors.length > 0 && (
          <ErrorDiv>
            <h3>Errors lists</h3>
            {a.map((error) => (
              <p>{error}</p>
            ))}
          </ErrorDiv>
        )}
      </div>
      <Form onSubmit={addFaqs}>
        <H1>Add Cars</H1>
        <Divgroup>
          <Input
            type='text'
            name='name'
            value={values.name}
            placeholder='Car Make'
            onChange={handleInput}
          />
        </Divgroup>
        <Divgroup>
          <Input
            type='text'
            name='model'
            placeholder='Add answer'
            value={values.model}
            onChange={handleInput}
          />
        </Divgroup>
        <Divgroup>
          <Input
            type='text'
            name='price'
            placeholder='Car Cost'
            value={values.price}
            onChange={handleInput}
          />
        </Divgroup>
        <Divgroup>
          <Input
            type='text'
            name='year'
            placeholder='Car Year'
            value={values.year}
            onChange={handleInput}
          />
        </Divgroup>
        <Divgroup>
          <Input
            type='text'
            name='distance'
            placeholder='Car Distance Travel in KM'
            value={values.distance}
            onChange={handleInput}
          />
        </Divgroup>
        <Divgroup>
          <label>Choose Car Colors</label>
          <Input
            type='color'
            name='color'
            placeholder='Car Color'
            value={values.color}
            onChange={handleInput}
            id='color'
          />
        </Divgroup>

        <Divgroup>
          <Input
            type='text'
            name='fuel_type'
            placeholder='Add answer'
            value={values.fuel_type}
            onChange={handleInput}
          />
        </Divgroup>
        <Divgroup>
          <Input
            type='file'
            name='file'
            placeholder='Upload car image'
            // value={values.file}
            onChange={({ target: { files } }) =>
              setValues({ ...values, file: files[0] })
            }
          />
        </Divgroup>
        <Divgroup>
          <Select
            onChange={({ target: { value } }) =>
              setValues({ ...values, location: value })
            }
          >
            <option>List of states</option>
            {states.map((state) => (
              <option key={state} value={state.toLowerCase()}>
                {state}
              </option>
            ))}
          </Select>
        </Divgroup>
        <Divgroup>
          <Textarea
            placeholder='Car description'
            onChange={({ target: { value } }) =>
              setValues({ ...values, description: value })
            }
          ></Textarea>
        </Divgroup>
        <Button>Add Car</Button>
      </Form>
    </Container>
  );
};

export default AddCars;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 50% 20%;
  justify-content: center;
  margin-top: 1em;
`;
const Form = styled.form`
  width: 100%;
  background: white;
  padding: 1em;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0.3em;

  #color {
    width: 150px;
    height: 40px;
    margin-left: 15px;
  }
`;
const Divgroup = styled.div`
  width: 100%;
  margin-bottom: 1em;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.5em 1em;
  border: 1px solid #cccccc;
  border-radius: 0.25em;
  outline: none;
`;
const Select = styled.select`
  width: 100%;
  padding: 0.5em 1em;
  border: 1px solid #cccccc;
  border-radius: 0.25em;
  outline: none;
`;
const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5em 1em;
  border: 1px solid #cccccc;
  border-radius: 0.25em;
  outline: none;
`;
const Button = styled.button`
  border: 0;
  padding: 0.5em 1em;
  display: block;
  border-radius: 0.25em;
  margin: auto;
  margin-bottom: 1em;
  cursor: pointer;
`;
const H1 = styled.h1`
  color: #999999;
  text-align: center;
  padding: 0.5em 0;
  padding-top: 0;
`;
const ErrorDiv = styled.div`
  padding: 2em;
`;
// const Button = styled.div``
