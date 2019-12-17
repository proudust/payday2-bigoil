import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
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

  return (
    <div className={classes.root}>
      <Typography variant="caption" display="block" gutterBottom>
        {label}
      </Typography>
      <ToggleButtonGroup
        size="large"
        value={currentValue}
        exclusive
        onChange={onChange}
      >
        {[{ name: '?????', value: 'unknown' }, ...choices].map(
          (value, index) => (
            <ToggleButton
              key={index}
              value={typeof value === 'string' ? value : value.value}
              className={classes.button}
            >
              {typeof value === 'string' ? value : value.name}
            </ToggleButton>
          ),
        )}
      </ToggleButtonGroup>
    </div>
  );
};
