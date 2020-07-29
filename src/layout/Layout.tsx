import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import { DefaultAppBar } from './AppBar';
import { ApplyTheme } from './ApplyTheme';

interface LayoutProps {
  children: React.ReactNodeArray;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <ApplyTheme>
    <div style={{ minWidth: 350 }}>
      <CssBaseline />
      <DefaultAppBar />

      <Container component="main" maxWidth="sm" disableGutters>
        {children}
      </Container>
    </div>
  </ApplyTheme>
);
