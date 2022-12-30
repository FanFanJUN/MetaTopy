import { Meta2d } from '@meta2d/core';
import React, { useEffect } from 'react';
import styles from './index.less';

export const MainMeta = ({ onComplete }) => {
  useEffect(() => {
    window.meta2d = new Meta2d('meta2d');
    onComplete && onComplete(window.meta2d);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.meta2d} id="meta2d"></div>
    </main>
  );
};

export { useMeta } from './context';
