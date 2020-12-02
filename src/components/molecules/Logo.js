import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { BsBatteryCharging } from 'react-icons/bs';
import Heading from 'src/components/atoms/Heading';
import { useLocation } from '@reach/router';

const StyledHeading = styled(Heading)`
  display: flex;
  align-items: center;
  color: ${({ theme, path }) => (path !== '/' ? theme.primary : theme.tertiary)};
`;

const Icon = styled(BsBatteryCharging)`
  margin: 5px;
`;

const Logo = () => {
  const path = useLocation().pathname;
  return (
    <Link to="/">
      <StyledHeading path={path} isMain>
        <span>E-cars</span> <Icon />
      </StyledHeading>
    </Link>
  );
};

export default Logo;
