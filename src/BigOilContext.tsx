import React, { createContext, useContext, useState } from 'react';

type GastankChoice = 'unknown' | 'deuterium' | 'helium' | 'nitrogen';
type NozzlesChoice = 'unknown' | '1' | '2' | '3';
type PressureChoice = 'unknown' | '>' | '<';
type AssetsChoice = 'not' | 'get';

interface ContextValue {
  values: {
    gastank: GastankChoice;
    nozzles: NozzlesChoice;
    pressure: PressureChoice;
    assets: AssetsChoice;
  };
  setters: {
    gastank: (value: GastankChoice) => void;
    nozzles: (value: NozzlesChoice) => void;
    pressure: (value: PressureChoice) => void;
    assets: (value: AssetsChoice) => void;
  };
}

const context = createContext<ContextValue>({
  values: {
    gastank: 'unknown',
    nozzles: 'unknown',
    pressure: 'unknown',
    assets: 'not',
  },
  setters: {
    gastank: () => undefined,
    nozzles: () => undefined,
    pressure: () => undefined,
    assets: () => undefined,
  },
});

interface ContextProviderProps {
  children: React.ReactNode;
}

export const useBigOilContext = (): ContextValue => useContext(context);

export const BigOilContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [gastank, setGastank] = useState<GastankChoice>('unknown');
  const [nozzles, setNozzles] = useState<NozzlesChoice>('unknown');
  const [pressure, setPressure] = useState<PressureChoice>('unknown');
  const [assets, setAssets] = useState<AssetsChoice>('not');

  return (
    <context.Provider
      value={{
        values: {
          gastank: assets === 'get' ? 'deuterium' : gastank,
          nozzles: assets === 'get' ? '3' : nozzles,
          pressure,
          assets,
        },
        setters: {
          gastank: setGastank,
          nozzles: setNozzles,
          pressure: setPressure,
          assets: setAssets,
        },
      }}
    >
      {children}
    </context.Provider>
  );
};
