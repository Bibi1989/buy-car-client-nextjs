import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const AddFaq = () => {
  const url = "http://localhost:5000/api/v1/fags";
  const [values, setValues] = useState({
    questions: "",
    answers: "",
  });
  const handleInput = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const addToFaqs = async () => {
    await axios.post(url, values, {
      headers: {
        "content-type": "application/json",
      },
    });
  };

  const addFaqs = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.questions || !values.answers) {
      alert("Fields are empty!!");
      return;
    }
    await addToFaqs();
    setValues({
      questions: "",
      answers: "",
    });
  };
  return (
    <Container>
      <Form onSubmit={addFaqs}>
        <H1>Add Faqs</H1>
        <Divgroup>
          <Input
            type='text'
            name='questions'
            value={values.questions}
            placeholder='Add question'
            onChange={handleInput}
          />
        </Divgroup>
        <Divgroup>
          <Input
            type='text'
            name='answers'
            placeholder='Add answer'
            value={values.answers}
            onChange={handleInput}
          />
        </Divgroup>
        <Button>Add Faqs</Button>
      </Form>
    </Container>
  );
};

export default AddFaq;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3em;
`;
const Form = styled.form`
  width: 70%;
  background: #181818;
  padding: 1em;
`;
const Divgroup = styled.div`
  width: 100%;
  margin-bottom: 1em;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.5em 1em;
  border: 0;
  border-radius: 0.25em;
`;
const Button = styled.button`
  border: 0;
  padding: 0.5em 1em;
  display: block;
  border-radius: 0.25em;
  margin: auto;
  margin-bottom: 2em;
  cursor: pointer;
`;
const H1 = styled.h1`
  color: #999999;
  text-align: center;
  padding: 1em 0;
`;
// const Button = styled.div``
