import axios from "axios";
import { FC, Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Comment from "./comment";
const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments: FC<{ videoId: string }> = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const user = useSelector((state: any) => state.user.user);
  useEffect(() => {
    try {
      const fetchComments = async () => {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      };
      fetchComments();
    } catch (error) {}
  }, [videoId]);
  return (
    <Container>
      <NewComment>
        <Avatar src={user?.img} />
        <Input placeholder="Add a comment..." />
      </NewComment>
      {comments.map((comment: any) => {
        return (
          <Fragment key={comment._id}>
            <Comment comment={comment} />
          </Fragment>
        );
      })}
    </Container>
  );
};

export default Comments;
