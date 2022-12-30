import React, { useCallback } from 'react';
import { icons } from '../utils/data';
import styles from './index.less';

const LeftMaterial = () => {
  const onDragStart = useCallback((e, data) => {
    e.dataTransfer.setData('Meta2d', JSON.stringify(data));
  }, []);

  return (
    <div className={styles.aside}>
      <div className={styles.aside__list}>
        {icons.map((icon) => {
          const { key, title, data } = icon;
          return (
            <div key={key} className={styles.aside__list__item}>
              <i
                draggable
                className={`iconfont icon-${key}`}
                title={title}
                onDragStart={(e) => onDragStart(e, data)}
              ></i>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftMaterial;
