import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.picture`
  position: absolute;
  left: 20%;
  top: 45%;
  transform: translateY(-50%);

  &::before {
    content: '';
    position: absolute;
    left: 2%;
    top: 25%;
    width: 80%;
    height: 100%;
    border: 3px solid ${({ theme }) => theme.primary};
    z-index: -5;
    transform: skew(-15deg) scale(1.2, 1.2);

    animation: showPicture 1s ease infinite alternate;
  }

  @keyframes showPicture {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const StyledImg = styled.img`
  width: 90%;
`;

const WelcomeIllustration = ({ src, alt }) => (
  <Wrapper>
    <StyledImg src={src} alt={alt} />
  </Wrapper>
);

export default WelcomeIllustration;
