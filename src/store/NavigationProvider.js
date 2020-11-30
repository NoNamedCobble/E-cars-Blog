import React, { useState } from 'react';

export const NavigationContext = React.createContext(null);

const NavigationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleNavigation = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const navigationElements = [
    { title: 'Home', url: '/' },
    { title: 'Articles', url: '/articles' },
    { title: 'graphcms', url: 'https://app.graphcms.com/' },
  ];

  return (
    <NavigationContext.Provider value={{ isOpen, handleToggleNavigation, navigationElements }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
