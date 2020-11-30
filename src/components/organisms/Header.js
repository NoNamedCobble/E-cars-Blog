import React from 'react';
import styled from 'styled-components';

import Logo from 'src/components/molecules/Logo';
import Navigation from 'src/components/molecules/Navigation';

const Wrapper = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 7vh;
  padding: 15px 40px;
  display: flex;
  align-items: center;
  /* box-shadow: 0 -40px 100px rgba(0, 0, 0, 0.3); */
  overflow: hidden;
  z-index: 5;

  background: transparent;

  /* background-color: yellow; */
`;

const Header = () => (
  <Wrapper>
    <Logo />
    <Navigation />
  </Wrapper>
);

export default Header;
