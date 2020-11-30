import React from 'react';
import styled from 'styled-components';

import WelcomeIllustration from 'src/components/atoms/WelcomeIllustration';

const Wrapper = styled.div`
  position: relative;
  background-color: white;
  flex-basis: 60%;
`;

const WelcomeImageWrapper = () => (
  <Wrapper>
    <WelcomeIllustration src="./welcomeCats.svg" alt="Welcome Illustration " />
  </Wrapper>
);

export default WelcomeImageWrapper;
