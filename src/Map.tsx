import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { blue, green, grey, yellow } from '@material-ui/core/colors';

interface Engines {
  [key: number]: {
    ignore?: true;
    gastank: 'deuterium' | 'helium' | 'nitrogen';
    nozzles: 1 | 2 | 3;
    pressure: '<' | '=' | '>';
  };
}

const engines: Engines = {
  1: {
    gastank: 'nitrogen',
    nozzles: 1,
    pressure: '<',
  },
  2: {
    gastank: 'deuterium',
    nozzles: 1,
    pressure: '>',
  },
  3: {
    ignore: true,
    gastank: 'helium',
    nozzles: 2,
    pressure: '=',
  },
  4: {
    ignore: true,
    gastank: 'nitrogen',
    nozzles: 2,
    pressure: '=',
  },
  5: {
    gastank: 'deuterium',
    nozzles: 2,
    pressure: '<',
  },
  6: {
    gastank: 'helium',
    nozzles: 2,
    pressure: '>',
  },
  7: {
    gastank: 'helium',
    nozzles: 3,
    pressure: '<',
  },
  8: {
    gastank: 'nitrogen',
    nozzles: 3,
    pressure: '<',
  },
  9: {
    gastank: 'deuterium',
    nozzles: 3,
    pressure: '<',
  },
  10: {
    ignore: true,
    gastank: 'helium',
    nozzles: 3,
    pressure: '=',
  },
  11: {
    gastank: 'nitrogen',
    nozzles: 3,
    pressure: '>',
  },
  12: {
    gastank: 'deuterium',
    nozzles: 3,
    pressure: '>',
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderColor: grey[300],
      borderStyle: 'solid',
      borderWidth: 1,
      textAlign: 'center',
      padding: theme.spacing(1),
    },
    engine: {
      borderColor: grey[300],
      borderStyle: 'solid',
      borderWidth: 1,
      fontWeight: 'bold',
      padding: theme.spacing(1),
    },
    wrongEngine: {
      borderColor: grey[300],
      borderStyle: 'solid',
      borderWidth: 1,
      fontWeight: 'bold',
      padding: theme.spacing(1),
      opacity: 0.2,
    },
    deuterium: {
      color: blue[500],
    },
    helium: {
      color: green[500],
    },
    nitrogen: {
      color: yellow[900],
    },
  }),
);

interface EngineCellProps {
  id: number;
  gastank?: string;
  nozzles?: string;
  pressure?: string;
}

const EngineCell: React.FC<EngineCellProps> = (props: EngineCellProps) => {
  const classes = useStyles();
  const engine = engines[props.id];
  const isWrong =
    !!engine.ignore ||
    (props.gastank ? engine.gastank !== props.gastank : false) ||
    (props.nozzles ? engine.nozzles.toString() !== props.nozzles : false) ||
    (props.pressure ? engine.pressure !== props.pressure : false);

  const gasView = {
    deuterium: <span className={classes.deuterium}>D</span>,
    helium: <span className={classes.helium}>He</span>,
    nitrogen: <span className={classes.nitrogen}>N</span>,
  }[engine.gastank];

  return (
    <td className={isWrong ? classes.wrongEngine : classes.engine}>
      #{props.id}
      <br />
      {gasView} {engine.nozzles} {engine.pressure}
    </td>
  );
};

interface MapProps {
  gastank?: string;
  nozzles?: string;
  pressure?: string;
}

export const Map: React.FC<MapProps> = (props: MapProps) => {
  const classes = useStyles();

  return (
    <table className={classes.root}>
      <tbody>
        <tr>
          <td colSpan={2}></td>
          <td>Whiteboard</td>
          <td colSpan={2}></td>
        </tr>
        <tr>
          <EngineCell
            id={12}
            gastank={props.gastank}
            nozzles={props.nozzles}
            pressure={props.pressure}
          />
          <EngineCell
            id={7}
            gastank={props.gastank}
            nozzles={props.nozzles}
            pressure={props.pressure}
          />
          <td rowSpan={3}>Stairs</td>
          <EngineCell
            id={2}
            gastank={props.gastank}
            nozzles={props.nozzles}
            pressure={props.pressure}
          />
          <EngineCell
            id={1}
            gastank={props.gastank}
            nozzles={props.nozzles}
            pressure={props.pressure}
          />
        </tr>
        <tr>
          <EngineCell
            id={10}
            gastank={props.gastank}
            nozzles={props.nozzles}
            pressure={props.pressure}
          />
          <EngineCell
            id={9}
            gastank={props.gastank}
            nozzles={props.nozzles}
            pressure={props.pressure}
          />
          <EngineCell
            id={4}
            gastank={props.gastank}
            nozzles={props.nozzles}
            pressure={props.pressure}
          />
          <EngineCell
            id={3}
            gastank={props.gastank}
            nozzles={props.nozzles}
            pressure={props.pressure}
          />
        </tr>
        <tr>
          <EngineCell
            id={8}
            gastank={props.gastank}
            nozzles={props.nozzles}
            pressure={props.pressure}
          />
          <EngineCell
            id={11}
            gastank={props.gastank}
            nozzles={props.nozzles}
            pressure={props.pressure}
          />
          <EngineCell
            id={6}
            gastank={props.gastank}
            nozzles={props.nozzles}
            pressure={props.pressure}
          />
          <EngineCell
            id={5}
            gastank={props.gastank}
            nozzles={props.nozzles}
            pressure={props.pressure}
          />
        </tr>
      </tbody>
    </table>
  );
};
