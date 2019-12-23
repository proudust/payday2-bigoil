import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
  const classes = useStyles();
  const [gastank, setGastank] = useState('unknown');
  const [nozzles, setNozzles] = useState('unknown');
  const [pressure, setPressure] = useState('unknown');

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Payday2 Big Oil Day2 Engine Problem Calculator
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" disableGutters>
        <Paper className={classes.paper}>
          <Map
            gastank={gastank !== 'unknown' ? gastank : undefined}
            nozzles={nozzles !== 'unknown' ? nozzles : undefined}
            pressure={pressure !== 'unknown' ? pressure : undefined}
          />
        </Paper>

        <Paper className={classes.paper}>
          <Grid container>
            <Grid item sm={12} xs={6}>
              <ConditionButton
                label="Gas tank"
                choices={['deuterium', 'helium', 'nitrogen']}
                currentValue={gastank}
                onChange={(_, newGastank) => setGastank(newGastank)}
              />
            </Grid>
            <Grid item sm={12} xs={6}>
              <ConditionButton
                label="Nozzles"
                choices={['1', '2', '3']}
                currentValue={nozzles}
                onChange={(_, newNozzles) => setNozzles(newNozzles)}
              />
            </Grid>
            <Grid item sm={12} xs={6}>
              <ConditionButton
                label="Pressure"
                choices={[
                  { name: '≥5783', value: '>' },
                  { name: '≤5812', value: '<' },
                ]}
                currentValue={pressure}
                onChange={(_, newPressure) => setPressure(newPressure)}
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
