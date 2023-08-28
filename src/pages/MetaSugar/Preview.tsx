import { MainMeta } from './container';
import React from 'react';

interface IAppProps {}

const Preview: React.FunctionComponent<IAppProps> = (props) => {
  const _onMessage = () => {};
  return <MainMeta onMessage={_onMessage} pageType="preview" mateConf={{}} />;
};

export default Preview;
