import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { ConditionButton } from './ConditionButton';
import { Map } from './Map';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin: theme.spacing(2),
      padding: theme.spacing(3, 2),
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();
  const [gastank, setGastank] = useState('unknown');
  const [nozzles, setNozzles] = useState('unknown');
  const [pressure, setPressure] = useState('unknown');

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Payday2 Big Oil Day2 Engine Problem Calculator
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Paper className={classes.paper}>
          <Map
            gastank={gastank !== 'unknown' ? gastank : undefined}
            nozzles={nozzles !== 'unknown' ? nozzles : undefined}
            pressure={pressure !== 'unknown' ? pressure : undefined}
          />
        </Paper>

        <Paper className={classes.paper}>
          <ConditionButton
            label="Gas tank"
            choices={['deuterium', 'helium', 'nitrogen']}
            currentValue={gastank}
            onChange={(_, newGastank) => setGastank(newGastank)}
          />
          <ConditionButton
            label="Nozzles"
            choices={['1', '2', '3']}
            currentValue={nozzles}
            onChange={(_, newNozzles) => setNozzles(newNozzles)}
          />
          <ConditionButton
            label="Pressure"
            choices={[
              { name: '≥5783', value: '>' },
              { name: '≤5812', value: '<' },
            ]}
            currentValue={pressure}
            onChange={(_, newPressure) => setPressure(newPressure)}
          />
        </Paper>

        <Paper className={classes.paper}>
          <Typography variant="h5" component="h3">
            Link
          </Typography>
          <ul>
            <li>
              <Typography component="p">
                <a href="http://payday2skills.ru/bigoil.html">
                  PayDay2 BigOil Engine Selector
                </a>
              </Typography>
            </li>
            <li>
              <Typography component="p">
                <a href="https://payday.fandom.com/wiki/Big_Oil">
                  Big Oil | Payday Wiki | Fandom
                </a>
              </Typography>
            </li>
            <li>
              <Typography component="p">
                <a href="https://wikiwiki.jp/payday2ch/BIG%20OIL%20DAY2">
                  BIG OIL DAY2 - Payday2 日本語 Wiki*
                </a>
              </Typography>
            </li>
          </ul>
        </Paper>
      </Container>
    </>
  );
};

export default App;
