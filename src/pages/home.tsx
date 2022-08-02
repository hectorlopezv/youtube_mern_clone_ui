import { FC } from "react";
import styled from "styled-components";
import Card from "../components/card";
interface IHome {}

const Home: FC<IHome> = () => {
  return (
    <Container>
      <Card type="" />
      <Card type="" />
      <Card type="" />
      <Card type="" />
      <Card type="" />
      <Card type="" />
    </Container>
  );
};
export default Home;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
