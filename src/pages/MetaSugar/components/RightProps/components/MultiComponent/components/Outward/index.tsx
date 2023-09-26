import { useMeta } from '@/pages/MetaSugar/context';
import { map } from 'lodash';
import React from 'react';
import styles from './index.less';

const S1_NAME = [
  '左对齐',
  '右对齐',
  '顶部对齐',
  '底部对齐',
  '垂直居中',
  '水平居中',
  '等距分布、左右对齐', // spaceBetween
  '等距分布、上下对齐', // spaceBetweenColumn
];
const S2_NAME = [
  '左对齐',
  '右对齐',
  '顶部对齐',
  '底部对齐',
  '垂直居中',
  '水平居中',
  '相同大小',
  '格式刷',
];

const S1_ICON = [
  't-align-left t-icon',
  't-align-right t-icon',
  't-align-top t-icon',
  't-align-bottom t-icon',
  't-align-center t-icon',
  't-align-middle t-icon',
  't-icon t-horizontal-between',
  't-icon t-vertical-between',
];
const S2_ICON = [
  't-align-left t-icon',
  't-align-right t-icon',
  't-align-top t-icon',
  't-align-bottom t-icon',
  't-align-center t-icon',
  't-align-middle t-icon',
  //   't-icon t-yiyang',
  //   't-icon t-geshishua',
];

const alignList = [
  'left',
  'right',
  'top',
  'bottom',
  'center',
  'middle',
  'spaceBetween',
  'spaceBetweenColumn',
];

const Outward: React.FunctionComponent = () => {
  const { meta2d } = useMeta();
  const outwardList = [
    {
      name: '对齐(参照框)',
      toolKey: '1',
      cList: map(S1_NAME, (n, index) => ({
        name: n,
        icon: S1_ICON[index],
        align: alignList[index],
      })),
    },
    {
      name: '对齐(参照第一个选中节点)',
      toolKey: '2',
      cList: map(S2_NAME, (n, index) => ({
        name: n,
        icon: S2_ICON[index],
        align: alignList[index],
      })),
    },
  ];
  return (
    <div className={styles.outward}>
      {outwardList.map((item) => {
        return (
          <div data-item key={item.toolKey}>
            <header>{item.name}</header>
            <div data-clist>
              {item.cList.map((sItem) => {
                return (
                  <div
                    data-li
                    key={sItem.align}
                    onClick={() => {
                      const activePens = meta2d.store.active ?? [];
                      if (
                        ['spaceBetween', 'spaceBetweenColumn'].includes(
                          sItem.align,
                        )
                      ) {
                        meta2d[sItem.align]();
                        return;
                      }
                      meta2d.alignNodes(sItem.align, activePens);
                    }}
                  >
                    <i className={sItem.icon} title={sItem.name}></i>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Outward;
