import React from "react";
import styled from "styled-components";

const Faq = ({ faq }) => {
  return <FaqStyle>{faq.questions}</FaqStyle>;
};

export default Faq;

const FaqStyle = styled.div`
  padding: 1em;
  border-bottom: 1px solid #999999;

  &:last-child {
    border-bottom: none;
  }
`;
