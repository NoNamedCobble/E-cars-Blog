import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { IoChevronBackCircleSharp } from 'react-icons/io5';
import Heading from 'src/components/atoms/Heading';

const Wrapper = styled.main`
  position: relative;
  padding: 80px 10vh;
  display: flex;
  flex-direction: column;
`;

const StyledIcon = styled(IoChevronBackCircleSharp)`
  position: absolute;
  left: 2%;
  top: 10%;
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.primary};

  &:active {
    color: ${({ theme }) => theme.secondary};
  }
`;

const StyledPicture = styled.picture`
  position: relative;
  margin-bottom: 50px;
  align-self: center;

  &::before {
    content: '';
    position: absolute;
    left: -3%;
    top: 3%;
    width: 100%;
    height: 100%;
    background: transparent;
    border: 3px solid ${({ theme }) => theme.primary};
    z-index: -1;
  }
`;

const StyledImg = styled.img`
  position: relative;
  object-fit: cover;
  margin: 5px;
  height: 60vh;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 10px;
`;

const PageTemplate = ({ pageContext: { data } }) => (
  <Wrapper>
    <Link to="/articles">
      <StyledIcon />
    </Link>

    <StyledPicture>
      <StyledImg src={data.pictureLink} alt={data.title} />
    </StyledPicture>
    <StyledHeading isMain>{data.title}</StyledHeading>
    <p>{data.description.text}</p>
  </Wrapper>
);
export default PageTemplate;
