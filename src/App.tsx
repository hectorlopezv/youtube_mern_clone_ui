import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Menu from "./components/menu";
import Navbar from "./components/navbar";
import { darkTheme, lightTheme } from "./utils/theme";

function App() {
  const [theme, setTheme] = useState<boolean>(true);
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Container className="App">
        <BrowserRouter>
          <Menu setTheme={setTheme} theme={theme} />
          <Main>
            <Navbar />
            <Wrapper>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>

              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>

              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>

              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bgLighter};
`;
const Wrapper = styled.div``;
