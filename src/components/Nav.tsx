import React from "react";
import styled from "styled-components";
import Link from "next/link";

const NavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 10%;
  background: teal;

  p {
    color: white;
  }

  a {
    padding: 0 1em;
    text-decoration: none;
    color: white;
  }
`;

const Nav = () => {
  return (
    <NavStyle>
      <Link href='/' as='/'>
        <a>Car Trader</a>
      </Link>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/faqs'>
          <a>Faq</a>
        </Link>
      </div>
    </NavStyle>
  );
};

export default Nav;
