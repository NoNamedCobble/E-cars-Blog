import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'src/styles/GlobalStyles';
import theme from 'src/theme/theme';
import Header from 'src/components/organisms/Header';

const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      {children}
    </ThemeProvider>
  </>
);

export default Layout;
