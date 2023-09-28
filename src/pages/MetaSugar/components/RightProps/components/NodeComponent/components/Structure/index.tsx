import { useMeta } from '@/pages/MetaSugar/context';
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  LineChartOutlined,
  LockOutlined,
  UnlockOutlined,
} from '@ant-design/icons';
import type { Pen } from '@meta2d/core';
import { useUpdate } from 'ahooks';
import React from 'react';
import styles from './index.less';
interface IAppProps {}

const Structure: React.FunctionComponent<IAppProps> = (props) => {
  const update = useUpdate();
  const { meta2d } = useMeta();

  const getValue = (type: string, item: Pen) => {
    if (type === 'locked') {
      return (item.locked ?? 0) === 0 ? 1 : 0;
    } else {
      return !(item.visible ?? true);
    }
  };
  const _setValue = (type: string, item: Pen) => {
    if (item.name === 'combine') {
      if (item.children?.length) {
        item.children.forEach((item) => {
          const currentPen = meta2d.findOne(item);
          meta2d.setValue({
            id: item,
            [type]: getValue(type, currentPen),
          });
        });
      }
    } else {
      meta2d.setValue({
        id: item.id,
        [type]: getValue(type, item),
      });
    }
    meta2d.render();
    update();
  };

  const _renderStructure = () => {
    const pens = meta2d.store.data.pens;
    // 组合pen 过滤
    const childPens: string[] = [];
    pens.forEach((item) => {
      if (item?.children?.length) {
        childPens.push(...item.children);
      }
    });
    const activePen = meta2d.store.active?.[0] || {};
    if (pens.length) {
      return (
        <div className={styles.structureWrap}>
          {pens.map((item) => {
            if (childPens.some((i) => i === item.id)) {
              return null;
            }
            return (
              <div
                key={item.id}
                className={styles.structureWrap__item}
                style={{
                  color: !(activePen.id === item.id) ? '' : '#1890ff',
                }}
                onClick={() => {
                  const pen = meta2d.findOne(item.id);
                  meta2d.gotoView(pen);
                  meta2d.active([item]);
                  meta2d.render();
                }}
              >
                <div className={styles.structureWrap__item__left}>
                  <LineChartOutlined />
                  <span onClick={() => {}} style={{ cursor: 'pointer' }}>
                    {item.name}
                  </span>
                </div>
                <div className={styles.structureWrap__item__right}>
                  <span
                    onClick={() => {
                      _setValue('locked', item);
                    }}
                  >
                    {item.locked ?? 0 ? <LockOutlined /> : <UnlockOutlined />}
                  </span>
                  <span
                    onClick={() => {
                      _setValue('visible', item);
                    }}
                  >
                    {item.visible ?? true ? (
                      <EyeOutlined />
                    ) : (
                      <EyeInvisibleOutlined />
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
    return <></>;
  };

  return _renderStructure();
};

export default Structure;
