import Link from "next/link";
import styled from "styled-components";
import Faq from "../components/Faq";
import AddFaq from "../components/AddFaq/AddFaq";
import { useEffect } from "react";

interface FProps {
  _id: string;
  questions: string;
  answers: string;
  createdAt: string;
}

const Wrapper = styled.div``;
const Container = styled.div`
  display: grid;
  padding: 2% 10%;

  .faq {
    border: 1px solid #999999;
    border-radius: 0.25em;
  }
`;
const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Details({ faqs }) {
  return (
    <Wrapper>
      <Container>
        <Grid>
          <h1>Faq</h1>
          <Link href='/'>
            <a>Go Back</a>
          </Link>
        </Grid>
        <div className='faq'>
          {faqs.map((faq: FProps) => (
            <Faq key={faq._id} faq={faq} />
          ))}
        </div>
        <AddFaq />
      </Container>
    </Wrapper>
  );
}

export async function getServerSideProps() {
  const url = "http://localhost:5000/api/v1/fags";
  const res = await fetch(url);
  const faqs = await res.json();

  return {
    props: { faqs: faqs.data },
  };
}
