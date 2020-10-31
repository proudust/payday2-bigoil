import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';
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
        <List subheader={<ListSubheader>Links</ListSubheader>}>
          {links.map(({ name, href }, index) => (
            <li key={index}>
              <ListItem component="a" href={href} button>
                <ListItemText primary={name} />
              </ListItem>
            </li>
          ))}
        </List>
      </Paper>
    </Layout>
  );
};

export default App;
