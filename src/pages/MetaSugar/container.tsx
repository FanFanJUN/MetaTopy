import { Meta2d } from '@meta2d/core';
import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { RightClick } from './components';
import { containerDragResolve } from './components/LeftMaterial/crossDrag';
import { useMeta } from './context';

export const MainMeta = ({ onComplete }) => {
  const [isLoad, setIsLoad] = useState(false);

  const { meta2d } = useMeta();
  useEffect(() => {
    window.meta2d = new Meta2d('meta2d');
    onComplete && onComplete(window.meta2d);
    setIsLoad(true);
  }, []);

  return (
    <main className={styles.main} id="meta2d">
      <div
        className={styles.meta2d}
        {...containerDragResolve(meta2d)}
        data-mark="noMove"
        id="iMeta2d"
      >
        {/* 右键 */}
      </div>
      {isLoad && <RightClick />}
    </main>
  );
};

export { useMeta } from './context';
