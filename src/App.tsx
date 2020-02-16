import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { Layout } from './layout/Layout';
import { ConditionButton } from './ConditionButton';
import { Map } from './Map';

const useStyles = makeStyles(theme =>
  createStyles({
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
] as const;

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Paper className={classes.paper}>
        <Map />
      </Paper>

      <Paper className={classes.paper}>
        <Grid container>
          {(['gastank', 'nozzles', 'pressure', 'assets'] as const).map((mode, index) => (
            <Grid item sm={12} xs={6} key={index}>
              <ConditionButton mode={mode} />
            </Grid>
          ))}
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
    </Layout>
  );
};

export default App;
