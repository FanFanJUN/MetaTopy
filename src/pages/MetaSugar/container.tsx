import { Meta2d } from '@meta2d/core';
import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { RightClick } from './components';

export const MainMeta = ({ onComplete }) => {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    window.meta2d = new Meta2d('meta2d');
    onComplete && onComplete(window.meta2d);
    setIsLoad(true);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.meta2d} id="meta2d">
        {/* 右键 */}
        {isLoad && <RightClick />}
      </div>
    </main>
  );
};

export { useMeta } from './context';
