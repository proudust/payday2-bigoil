import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';

interface AppBarProps {
  children?: never;
}

export const DefaultAppBar: React.FC<AppBarProps> = () => {
  const theme = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="back"
          component="a"
          href=".."
          style={{ marginRight: theme.spacing(2) }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Payday2 Big Oil Day2 Engine Problem Calculator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
