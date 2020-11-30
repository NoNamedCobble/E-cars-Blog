import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavigationContext } from 'src/store/NavigationProvider';

const Wrapper = styled.nav`
  position: relative;
  margin: 0 100px 0 auto;
  width: 25%;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(140%)')};
  transition: 0.5s;
`;

const NavigationWrapper = ({ children }) => {
  const { isOpen } = useContext(NavigationContext);

  return <Wrapper isOpen={isOpen}>{children}</Wrapper>;
};

export default NavigationWrapper;
