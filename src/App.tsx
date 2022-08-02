import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Menu from "./components/menu";
import Navbar from "./components/navbar";

function App() {
  return (
    <Container className="App">
      <BrowserRouter>
        <Menu />
        <Main>
          <Navbar />
          <Wrapper>Video Cards</Wrapper>
        </Main>
      </BrowserRouter>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div``;
