import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import { DefaultAppBar } from './AppBar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div style={{ minWidth: 350 }}>
    <CssBaseline />
    <DefaultAppBar />

    <Container component="main" maxWidth="sm" disableGutters>
      {children}
    </Container>
  </div>
);
