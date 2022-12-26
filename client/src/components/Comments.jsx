import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import axios from "axios";
import { useSelector } from "react-redux";

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

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 3px 5px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const Comments = ({ videoId }) => {
  const [text, setText] = useState("");
  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      } catch (err) {}
    };
    fetchComments();
  }, [videoId]);

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/comments", { videoId, desc: text });
      setText("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser.img} />
        <Input
          placeholder="Add a comment..."
          onChange={(e) => setText(e.target.value)}
        />
        <Button disabled={!text} onClick={handleComment}>
          Add a Comment
        </Button>
      </NewComment>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment._id} />
      ))}
    </Container>
  );
};

export default Comments;
