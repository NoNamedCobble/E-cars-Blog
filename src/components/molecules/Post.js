import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Heading from 'src/components/atoms/Heading';

const Wrapper = styled.article`
  position: relative;
  /* background-color: blue; */
  margin: 30px;
  padding: 30px;
  overflow: hidden;
  border-radius: 10px 60px 10px 0px;
  transition: box-shadow 0.3s ease-in-out;
  animation: render 0.6s ease;

  &:hover {
    box-shadow: 0 42px 34px rgba(0, 0, 0, 0.09), 5px 5px 30px rgba(0, 0, 0, 0.1);
  }

  @keyframes render {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

const StyledDescription = styled.p`
  max-width: 70%;
  text-align: justify;
`;

const Post = ({ content: { title, description, pictureLink, slug } }) => (
  <Link to={slug}>
    <Wrapper>
      <Heading>{title}</Heading>
      <StyledDescription>{description.text}</StyledDescription>
    </Wrapper>
  </Link>
);

export default Post;
