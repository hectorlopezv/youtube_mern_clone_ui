import axios from "axios";
import { FC, Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./card";

const Container = styled.div`
  flex: 2;
`;

const Recommendation: FC<{ tags: any[] }> = ({ tags }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/tags?tags=${tags}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [tags]);

  return (
    <Container>
      {videos.map((video: any) => (
        <Fragment key={video._id}>
          <Card
            type="sm"
            title={video.title}
            views={video.views}
            imageUrl={video.imgUrl}
            createdAt={video.createAt}
            userId={video.userId}
            id={video._id}
          />
        </Fragment>
      ))}
    </Container>
  );
};

export default Recommendation;
