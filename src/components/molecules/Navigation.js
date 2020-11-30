import React from 'react';

import NavigationProvider from 'src/store/NavigationProvider';
import NavigationWrapper from 'src/components/atoms/NavigationWrapper';
import NavigationList from 'src/components/molecules/NavigationList';
import NavigationButton from 'src/components/atoms/NavigationButton';

const Navigation = () => {
  return (
    <NavigationProvider>
      <NavigationWrapper>
        <NavigationList />
      </NavigationWrapper>
      <NavigationButton />
    </NavigationProvider>
  );
};

export default Navigation;
