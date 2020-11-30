import React, { useContext } from 'react';

import styled, { css } from 'styled-components';
import { NavigationContext } from 'src/store/NavigationProvider';

const Wrapper = styled.button`
  position: absolute;
  right: 50px;
  top: 50%;

  width: 50px;
  height: 30px;
  /* padding: 0px; */
  transform: translateY(-50%);
  background: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  &::before {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    width: ${({ isOpen }) => (isOpen ? '40px' : '75%')};
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transition: 0.3s;
    transform-origin: 100% 50%;
    transform: ${({ isOpen }) => isOpen && 'rotate(-45deg)'};
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0%;
    width: ${({ isOpen }) => (isOpen ? '40px' : '65%')};
    height: 2px;

    transition: 0.2s;
    background-color: ${({ theme }) => theme.primary};
    transform-origin: 100% 50%;
    transform: ${({ isOpen }) => isOpen && 'rotate(45deg)'};
  }
`;

const StyledSpan = styled.span`
  height: 2px;
  width: 90%;
  background-color: ${({ theme }) => theme.primary};
  transition: 0.2s;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 0;
      transform: translateX(-100%);
    `}
`;

const NavigationButton = props => {
  const { isOpen, handleToggleNavigation } = useContext(NavigationContext);
  return (
    <Wrapper onClick={handleToggleNavigation} isOpen={isOpen}>
      <StyledSpan isOpen={isOpen} />
    </Wrapper>
  );
};

export default NavigationButton;
