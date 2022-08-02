import { FC } from "react";
import styled from "styled-components";
import hectortube from "../img/logo.png";
interface IMenu {}

const Menu: FC<IMenu> = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Image src={hectortube} />
          HectorTube
        </Logo>
      </Wrapper>
    </Container>
  );
};
export default Menu;

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: white;
  font-size: 14px;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Image = styled.img`
  height: 25px;
`;
