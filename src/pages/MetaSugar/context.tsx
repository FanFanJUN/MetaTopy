import { Meta2d } from '@meta2d/core';
import React from 'react';

export interface AppContextInterface {
  meta2d: Meta2d;
}
export const MetaContext = React.createContext<AppContextInterface>({
  // @ts-ignore
  meta2d: null,
});

export const useMeta = () => {
  return React.useContext(MetaContext);
};
