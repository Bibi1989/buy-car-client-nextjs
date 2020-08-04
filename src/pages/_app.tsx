import "../Styles/globalStyle.css";
import Nav from "../components/Nav";
import styled from "styled-components";

const Appstyle = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* background: black; */
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <Appstyle>
      <Nav />
      <Component {...pageProps} />
    </Appstyle>
  );
}
