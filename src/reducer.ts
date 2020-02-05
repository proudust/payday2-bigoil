import { Store, Dispatch } from 'redux';

type GastankChoice = 'unknown' | 'deuterium' | 'helium' | 'nitrogen';
type NozzlesChoice = 'unknown' | '1' | '2' | '3';
type PressureChoice = 'unknown' | '>' | '<';
type AssetsChoice = 'not' | 'get';

type Actions = {
  type: 'CONDITION_CHANGED';
  gastank?: GastankChoice;
  nozzles?: NozzlesChoice;
  pressure?: PressureChoice;
  assets?: AssetsChoice;
};

interface StoreState {
  button: {
    gastank: GastankChoice;
    nozzles: NozzlesChoice;
    pressure: PressureChoice;
    assets: AssetsChoice;
  };
  condition: {
    gastank: GastankChoice;
    nozzles: NozzlesChoice;
    pressure: PressureChoice;
    assets: AssetsChoice;
  };
}

const initState: StoreState = {
  button: {
    gastank: 'unknown',
    nozzles: 'unknown',
    pressure: 'unknown',
    assets: 'not',
  },
  condition: {
    gastank: 'unknown',
    nozzles: 'unknown',
    pressure: 'unknown',
    assets: 'not',
  },
};

export function reducer(state: StoreState = initState, actions: Actions): StoreState {
  switch (actions.type) {
    case 'CONDITION_CHANGED': {
      const gastank = actions.gastank ?? state.button.gastank;
      const nozzles = actions.nozzles ?? state.button.nozzles;
      const pressure = actions.pressure ?? state.button.pressure;
      const assets = actions.assets ?? state.button.assets;
      return {
        button: {
          gastank,
          nozzles,
          pressure,
          assets,
        },
        condition: {
          gastank: assets === 'get' ? 'deuterium' : gastank,
          nozzles: assets === 'get' ? '3' : nozzles,
          pressure,
          assets,
        },
      };
    }
    default:
      return state;
  }
}

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultRootState extends StoreState {}
  export function useDispatch<TDispatch = Dispatch<Actions>>(): TDispatch;
  export function useStore<S = DefaultRootState>(): Store<S, Actions>;
}
