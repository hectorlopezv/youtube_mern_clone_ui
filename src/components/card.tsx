import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";
interface ICard {
  type: string;
  title: string;
  views: number;
  imageUrl: string;
  createdAt: string;
  userId: string;
}

const Card: FC<ICard> = ({
  type,
  imageUrl,
  title,
  views,
  createdAt,
  userId,
}) => {
  const [channel, setChannel] = useState<{ img?: string; name?: string }>({});
  useEffect(() => {
    const fetchChannel = async () => {
      const response = await axios.get(`/users/find/${userId}`);
      console.log(response);
      setChannel(response.data);
    };
    fetchChannel();
  }, [userId]);

  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={imageUrl} />
        <Details type={type}>
          <ChannelImage type={type} src={channel.img} />
          <Texts>
            <Title>{title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>
              {views} • {format(createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;

interface TypeProps {
  type: string;
}
const Container = styled.div<TypeProps>`
  width: ${(props) => props.type !== "sm" && "320px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img<TypeProps>`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div<TypeProps>`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img<TypeProps>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;
const Texts = styled.div`
  text-align: left;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
