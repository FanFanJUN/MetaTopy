import type { Meta2d } from '@meta2d/core';
import React from 'react';

export interface IMeta extends Meta2d {
  isEmptyData: Function;
  isScreen: Function;
  isPreView: boolean;
}

export interface AppContextInterface {
  meta2d: IMeta;
}
export const MetaContext = React.createContext<AppContextInterface>({
  // @ts-ignore
  meta2d: null,
});

export const useMeta = () => {
  return React.useContext(MetaContext);
};
