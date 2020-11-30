import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLi = styled.li`
  color: ${({ theme }) => theme.primary};
`;

const StyledLink = styled(Link)`
  position: relative;
  &::after {
    content: '';
    background-color: hsla(195, 99%, 50%, 0.25);
    position: absolute;
    left: 18%;
    bottom: -25%;
    width: 90%;
    height: 40%;
    transform: skewX(-30deg);
    transition: 0.33s cubic-bezier(0.24, 0.11, 0, 2.04);
    z-index: -3;
  }

  &:hover:after {
    transform: translate(-16%, -140%) scale(1.2, 2.8);
  }
`;

const NavigationElement = ({ title, url }) => (
  <StyledLink to={url}>
    <StyledLi>{title}</StyledLi>
  </StyledLink>
);

export default NavigationElement;
