import React, { useEffect, useState } from 'react';
import { Header, LeftMaterial, Meta2dProps } from './components';
import { MetaContext } from './context';
import { MainMeta } from './Meta2dContainer';
import styles from './index.less';

const App = () => {
  const [meta, setMeta] = useState<any>();

  useEffect(() => {
    if (meta) {
      meta.setOptions({
        grid: true,
        // background: '#222629',
        rule: true,
      });
      meta.resize();
    }
  }, [meta]);

  return (
    <MetaContext.Provider
      value={{
        meta,
      }}
    >
      <div className={styles.home}>
        <Header />
        <div className={styles.home__container}>
          <LeftMaterial />
          <MainMeta onComplete={setMeta} />
          <Meta2dProps />
        </div>
      </div>
    </MetaContext.Provider>
  );
};

export default App;
