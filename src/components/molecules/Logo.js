import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { BsBatteryCharging } from 'react-icons/bs';
import Heading from 'src/components/atoms/Heading';

const StyledHeading = styled(Heading)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.tertiary};
`;

const Icon = styled(BsBatteryCharging)`
  margin: 5px;
`;

const Logo = () => (
  <Link to="/">
    <StyledHeading isMain>
      <span>E-cars</span> <Icon />
    </StyledHeading>
  </Link>
);

export default Logo;
