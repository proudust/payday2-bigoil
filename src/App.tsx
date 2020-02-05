import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ArrowBack } from '@material-ui/icons';

import { ConditionButton } from './ConditionButton';
import { Map } from './Map';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 350,
    },
    paper: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
      '&> *': {
        margin: 'auto',
      },
    },
  }),
);

const links = [
  {
    name: 'PayDay2 BigOil Engine Selector',
    href: 'http://payday2skills.ru/bigoil.html',
  },
  {
    name: 'Big Oil | Payday Wiki | Fandom',
    href: 'https://payday.fandom.com/wiki/Big_Oil',
  },
  {
    name: 'BIG OIL DAY2 - Payday2 日本語 Wiki*',
    href: 'https://wikiwiki.jp/payday2ch/BIG%20OIL%20DAY2',
  },
];

const App: React.FC = () => {
  const dispatch = useDispatch();
  const condition = useSelector(state => state.condition);
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <CssBaseline />
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
            <ArrowBack />
          </IconButton>
          <Typography variant="h6">Payday2 Big Oil Day2 Engine Problem Calculator</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" disableGutters>
        <Paper className={classes.paper}>
          <Map />
        </Paper>

        <Paper className={classes.paper}>
          <Grid container>
            <Grid item sm={12} xs={6}>
              <ConditionButton
                label="Gas tank"
                choices={['deuterium', 'helium', 'nitrogen']}
                currentValue={condition.gastank}
                onChange={(_, gastank) => dispatch({ type: 'CONDITION_CHANGED', gastank })}
              />
            </Grid>
            <Grid item sm={12} xs={6}>
              <ConditionButton
                label="Nozzles"
                choices={['1', '2', '3']}
                currentValue={condition.nozzles}
                onChange={(_, nozzles) => dispatch({ type: 'CONDITION_CHANGED', nozzles })}
              />
            </Grid>
            <Grid item sm={12} xs={6}>
              <ConditionButton
                label="Pressure"
                choices={[
                  { name: '≥5783', value: '>' },
                  { name: '≤5812', value: '<' },
                ]}
                currentValue={condition.pressure}
                onChange={(_, pressure) => dispatch({ type: 'CONDITION_CHANGED', pressure })}
              />
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Typography variant="h5" component="h3">
            Links
          </Typography>
          <ul>
            {links.map(({ name, href }, index) => (
              <li key={index}>
                <Typography component="p">
                  <a href={href}>{name}</a>
                </Typography>
              </li>
            ))}
          </ul>
        </Paper>
      </Container>
    </div>
  );
};

export default App;
