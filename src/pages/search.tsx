import axios from "axios";
import { FC, Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/card";
interface ISearch {}

const Search: FC<ISearch> = () => {
  const query = useLocation().search;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/search${query}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, []);

  return (
    <Container>
      {videos.map((video: any) => {
        return (
          <Fragment>
            <Card
              type={"sm"}
              title={video.title}
              views={video.views}
              imageUrl={video.imageUrl}
              createdAt={video.createdAt}
              userId={video.userId}
              id={video._id}
            />
          </Fragment>
        );
      })}
    </Container>
  );
};
export default Search;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
