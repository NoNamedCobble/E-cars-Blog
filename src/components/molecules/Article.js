import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Heading from 'src/components/atoms/Heading';

const Wrapper = styled.article`
  position: relative;
  width: 340px;
  min-height: 420px;

  &::before {
    content: '';
    position: absolute;
    left: -3%;
    top: 8%;
    width: 100%;
    height: 100%;
    background: transparent;
    border: 3px solid ${({ theme }) => theme.primary};
    transition: 0.3s cubic-bezier(0.24, 0.11, 0, 2.04);
  }

  &:hover {
    &::before {
      z-index: 99;
      transform: translate(3%, -8%);
    }
  }
`;

const StyledPicture = styled.picture`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 52%;
  background: url(${({ url }) => url});
  background-size: cover;
  background-position: 0 80%;
  z-index: 0;
`;

const Date = styled.span`
  position: absolute;
  right: 0;
  top: 2%;
`;

const Description = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 52%;
  background-color: ${({ theme }) => theme.quaternary};
  padding: 18px;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  /* background: transparent; */

  & * {
    margin: 2px;
  }
`;

const Article = ({ title, slug, description, pictureLink, date }) => (
  <Wrapper>
    <StyledPicture url={pictureLink} />
    <Description>
      <Heading>{title}</Heading>
      <Date>{date}</Date>
      <p> {description.text}</p>
      <Link to={slug}>
        <strong> READ MORE</strong>
      </Link>
    </Description>
  </Wrapper>
);

export default Article;
