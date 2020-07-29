import React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';

import { useBigOilContext } from './BigOilContext';

const unknownChoice = { name: '?????', value: 'unknown' } as const;

const modes = {
  gastank: {
    name: 'Gas tank',
    choices: [unknownChoice, 'deuterium', 'helium', 'nitrogen'],
  },
  nozzles: {
    name: 'Nozzles',
    choices: [unknownChoice, '1', '2', '3'],
  },
  pressure: {
    name: 'Gas tank',
    choices: [unknownChoice, { name: '≥5783', value: '>' }, { name: '≤5812', value: '<' }],
  },
  assets: {
    name: 'Cold Fusion Research',
    choices: ['not', 'get'],
  },
} as const;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
    },
    button: {
      width: 128,
    },
  }),
);

interface ConditionButtonProps {
  children?: never;
  mode: keyof typeof modes;
}

export const ConditionButton: React.FC<ConditionButtonProps> = ({ mode }) => {
  const { values, setters } = useBigOilContext();
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const { name, choices } = modes[mode];
  const disabled = (mode === 'gastank' || mode === 'nozzles') && values.assets === 'get';

  return (
    <div className={classes.root}>
      <Typography variant="caption" display="block" gutterBottom>
        {name}
      </Typography>
      <ButtonGroup size="large" orientation={matches ? 'horizontal' : 'vertical'}>
        {[...choices].map((choice, index) => {
          const name = typeof choice === 'string' ? choice : choice.name;
          const value = typeof choice === 'string' ? choice : choice.value;
          return (
            <Button
              key={index}
              variant={values[mode] === value ? 'contained' : 'outlined'}
              onClick={() => setters[mode](value as never)}
              className={classes.button}
              disabled={disabled}
            >
              {name}
            </Button>
          );
        })}
      </ButtonGroup>
    </div>
  );
};
