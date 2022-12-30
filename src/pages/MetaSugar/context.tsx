import React from 'react';

export const MetaContext = React.createContext({
  mata: null,
});

export const useMeta = () => {
  return React.useContext(MetaContext);
};
