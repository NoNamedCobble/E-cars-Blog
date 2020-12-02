import styled, { css } from 'styled-components';

const StyledHeading = styled.h2`
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.primary};
  font-size: ${({ isMain, theme: { heading } }) => (isMain ? heading.main.size : heading.sub.size)};
  font-weight: ${({ isMain, theme: { heading } }) =>
    isMain ? heading.main.weight : heading.sub.weight};

  ${({ isWarning, theme: { warning } }) =>
    isWarning &&
    css`
      color: ${warning.color};
      font-weight: ${warning.weight};
      font-size: ${warning.size};
    `}
`;

export default StyledHeading;
