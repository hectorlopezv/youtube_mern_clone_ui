import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Menu from "./components/menu";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Search from "./pages/search";
import SignIn from "./pages/signIn";
import Video from "./pages/videos";
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
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route path="trends" element={<Home type="trend" />} />
                  <Route path="subscriptions" element={<Home type="sub" />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="search" element={<Search />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
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
const Wrapper = styled.div`
  padding: 22px 96px;
`;
