import React from 'react';
import styled from 'styled-components';

import WelcomeMessage from 'src/components/molecules/WelcomeMessage';
import WelcomeImageWrapper from 'src/components/molecules/WelcomeImageWrapper';

const Wrapper = styled.main`
  position: relative;
  display: flex;
  height: 100vh;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0%;
    bottom: 0%;
    width: 1080px;
    height: 260px;
    clip-path: polygon(0 100%, 0 0, 100% 100%);
    background-color: ${({ theme }) => theme.tertiary};
    z-index: 5;
    animation: showTringle 0.6s ease;
  }

  @keyframes showTringle {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;

const Welcome = () => (
  <Wrapper>
    <WelcomeMessage />
    <WelcomeImageWrapper src="./welcomeCats.svg" alt="WelcomeIllustration" />
  </Wrapper>
);

export default Welcome;
