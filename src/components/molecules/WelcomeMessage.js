import React from 'react';
import styled from 'styled-components';

import WelcomeHeading from 'src/components/atoms/WelcomeHeading';

const Wrapper = styled.div`
  position: relative;
  flex-basis: 40%;
  background-color: ${({ theme }) => theme.primary};
`;

const WelcomeMessage = () => (
  <Wrapper>
    <WelcomeHeading>
      <span>Welcome</span>
      <span>at my site</span>
    </WelcomeHeading>
  </Wrapper>
);

export default WelcomeMessage;
