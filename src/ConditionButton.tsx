import React from 'react';
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2),
    },
    button: {
      minWidth: 128,
    },
  }),
);

interface ConditionButtonProps {
  label: string;
  choices: (string | { name: string; value: string })[];
  currentValue: string;
  onChange?: (event: React.MouseEvent<HTMLElement>, value: string) => void;
}

export const ConditionButton: React.FC<ConditionButtonProps> = ({
  label,
  currentValue,
  choices,
  onChange,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className={classes.root}>
      <Typography variant="caption" display="block" gutterBottom>
        {label}
      </Typography>
      <ButtonGroup
        size="large"
        orientation={matches ? 'horizontal' : 'vertical'}
      >
        {[{ name: '?????', value: 'unknown' }, ...choices].map(
          (choice, index) => {
            const name = typeof choice === 'string' ? choice : choice.value;
            const value = typeof choice === 'string' ? choice : choice.value;
            return (
              <Button
                key={index}
                variant={currentValue === value ? 'contained' : 'outlined'}
                onClick={event => onChange?.(event, value)}
                className={classes.button}
              >
                {name}
              </Button>
            );
          },
        )}
      </ButtonGroup>
    </div>
  );
};
