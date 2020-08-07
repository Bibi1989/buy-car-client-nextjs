import "../Styles/globalStyle.css";
import Nav from "../components/Nav";
import styled from "styled-components";
import "react-dropdown/style.css";
import "antd/dist/antd.css";

const Appstyle = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* background: black; */
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <Appstyle>
      <Nav {...pageProps} />
      <Component {...pageProps} />
    </Appstyle>
  );
}
