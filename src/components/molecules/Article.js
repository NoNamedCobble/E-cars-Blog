import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Heading from 'src/components/atoms/Heading';

const Wrapper = styled.article`
  position: relative;
  width: 340px;
  min-height: 500px;
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.quaternary};

  &::before {
    content: '';
    position: absolute;
    left: -3%;
    top: 8%;
    width: 100%;
    height: 102%;
    background: transparent;
    border: 3px solid ${({ theme }) => theme.primary};
    transition: 0.3s cubic-bezier(0.24, 0.11, 0, 2.04);
    z-index: -5;
  }

  &:hover {
    &::before {
      z-index: 99;
      transform: translate(3%, -8%);
      animation: bipBop 1s 0.3s infinite alternate;
    }
  }

  @keyframes bipBop {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;

const StyledImg = styled.img`
  position: relative;
  width: 100%;
  flex-basis: 52%;
  object-fit: cover;
`;

const Description = styled.p`
  position: relative;
  max-width: 100%;
  /* min-height: 48%; */
  flex-basis: 48%;
  padding: 20px;
  word-wrap: break-word;
  font-size: 1.4rem;
  z-index: 10;
`;

const Date = styled.span`
  position: absolute;
  right: 2%;
  top: 1%;
`;

const StyledLink = styled(Link)`
  display: block;
  position: relative;
  font-weight: 700;
  cursor: pointer;
  z-index: 999;
`;

const Article = ({ title, slug, description, pictureLink, date }) => (
  <Wrapper>
    <StyledImg src={pictureLink} alt={title} />
    <Description>
      <Date>{date}</Date>
      <Heading>{title}</Heading>
      {description.text}
      <StyledLink to={slug}>READ MORE</StyledLink>
    </Description>
  </Wrapper>
);

export default Article;
