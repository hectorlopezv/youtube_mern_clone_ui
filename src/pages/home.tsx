import axios from "axios";
import { FC, Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/card";

interface IHome {
  type?: "random" | "trend" | "sub";
}

const Home: FC<IHome> = ({ type }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get(`/videos/${type}`);
      console.log(response);
      setVideos(response.data);
    };
    fetchVideos();
  }, [type]);
  return (
    <Container>
      {videos.map((video: any) => {
        return (
          <Fragment key={video._id}>
            <Card
              type=""
              imageUrl={video.imageUrl}
              title={video.title}
              views={video.views}
              createdAt={video.createAt}
              userId={video.userId}
              id={video._id}
            />
          </Fragment>
        );
      })}
    </Container>
  );
};
export default Home;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
