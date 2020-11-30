import React, { useContext } from 'react';
import styled from 'styled-components';

import { NavigationContext } from 'src/store/NavigationProvider';
import NavigationElement from 'src/components/atoms/NavigationElement';

const StyledList = styled.ul`
  position: relative;
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

const NavigationList = () => {
  const { navigationElements } = useContext(NavigationContext);

  return (
    <StyledList>
      {navigationElements.map(element => (
        <NavigationElement key={element.title} title={element.title} url={element.url} />
      ))}
    </StyledList>
  );
};

export default NavigationList;
