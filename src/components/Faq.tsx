import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Faq = ({ faq }) => {
  return (
    <Flex>
      <FaqStyle>{faq.questions}</FaqStyle>
    </Flex>
  );
};

export default Faq;

const FaqStyle = styled.div``;
const Flex = styled.div`
  padding: 1em;
  border-bottom: 1px solid #999999;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;
