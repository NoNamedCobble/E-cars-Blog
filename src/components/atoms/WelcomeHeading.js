import styled from 'styled-components';

const WelcomeHeading = styled.h2`
  position: absolute;
  right: 0;
  top: 45%;
  transform: translate(0%, -50%);
  font-size: 12rem;

  color: ${({ theme }) => theme.tertiary};

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 30px;

  & span {
    position: relative;
    animation: showSpans 0.7s cubic-bezier(0.1, 0.82, 0.71, 0.98);
    &:nth-of-type(1) {
      font-size: 8rem;
    }
    &:nth-of-type(2) {
      font-size: 12rem;

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -5%;
        width: 80%;
        height: 3px;
        transform: translateX(-50%);
        background-color: #fff;
      }
    }
  }

  @keyframes showSpans {
    from {
      opacity: 0;
      transform: translateX(50%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

export default WelcomeHeading;
