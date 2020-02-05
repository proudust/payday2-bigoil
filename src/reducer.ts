import { Store, Dispatch } from 'redux';

export const gastankChoice = ['deuterium', 'helium', 'nitrogen'] as const;
export const nozzlesChoice = ['1', '2', '3'] as const;
export const pressureChoice = ['>', '<'] as const;

type GastankChoice = typeof gastankChoice[number] | 'unknown';
type NozzlesChoice = typeof nozzlesChoice[number] | 'unknown';
type PressureChoice = typeof pressureChoice[number] | 'unknown';

type Actions = {
  type: 'CONDITION_CHANGED';
  gastank?: GastankChoice;
  nozzles?: NozzlesChoice;
  pressure?: PressureChoice;
};

interface StoreState {
  condition: {
    gastank: GastankChoice;
    nozzles: NozzlesChoice;
    pressure: PressureChoice;
  };
}

const initState: StoreState = {
  condition: {
    gastank: 'unknown',
    nozzles: 'unknown',
    pressure: 'unknown',
  },
};

export function reducer(state: StoreState = initState, actions: Actions): StoreState {
  switch (actions.type) {
    case 'CONDITION_CHANGED':
      return {
        condition: {
          gastank: actions.gastank ?? state.condition.gastank,
          nozzles: actions.nozzles ?? state.condition.nozzles,
          pressure: actions.pressure ?? state.condition.pressure,
        },
      };
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
