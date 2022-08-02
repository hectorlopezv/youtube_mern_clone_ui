import { FC } from "react";
import styled from "styled-components";
import Card from "../components/card";
interface ISignIn {}

const SignIn: FC<ISignIn> = () => {
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
export default SignIn;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
