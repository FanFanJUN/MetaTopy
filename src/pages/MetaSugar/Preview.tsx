import React from 'react';
import { MainMeta } from './container';

interface IAppProps {}

const Preview: React.FunctionComponent<IAppProps> = (props) => {
  const _onMessage = () => {};
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MainMeta
        onMessage={_onMessage}
        pageType="preview"
        mateConf={{}}
        showReturnButton
      />
    </div>
  );
};

export default Preview;
