import { useMeta } from '@/pages/MetaSugar/context';
import { useDeepCompareEffect, useSetState, useUpdate } from 'ahooks';
import { Input } from 'antd';
import { isObject, omit } from 'lodash';
import React from 'react';
import ReactJson from 'react-json-view';
import { list } from './helper';
import styles from './index.less';

const exceptParam = [
  'name',
  'width',
  'height',
  'x',
  'y',
  'id',
  'ex',
  'ey',
  'center',
];

function isJSON(str) {
  if (typeof str === 'string') {
    try {
      const obj = JSON.parse(str);
      if (typeof obj === 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}

const PenParam: React.FunctionComponent = () => {
  const { meta2d } = useMeta();
  const [state, setState] = useSetState({ jStr: '' });
  const update = useUpdate();
  const showData = omit(meta2d.store.active?.[0], ['calculative', 'anchors']);

  const tData = isObject(showData)
    ? JSON.stringify(omit(showData, exceptParam), null, 2)
    : String(showData || '');

  useDeepCompareEffect(() => {
    setState({ jStr: tData });
  }, [tData]);

  const _handleValueChange = (e: any) => {
    if (isJSON(e.target.value)) {
      meta2d.setValue({ id: showData.id, ...JSON.parse(e.target.value) });
      update();
    }
    setState({ jStr: e.target.value });
  };
  return (
    <div className={styles.penParam}>
      <div className={styles.list}>
        {list.map((item) => {
          return (
            <div data-list-item key={item.toolKey}>
              <span>{item.name}</span>
              <span>{showData?.[item.toolKey]}</span>
            </div>
          );
        })}
      </div>
      <div className={styles.edit}>编辑</div>
      <Input.TextArea
        value={state.jStr}
        autoSize
        onChange={_handleValueChange}
      />
      <div className={styles.json}>
        <ReactJson src={showData} collapsed={true} displayDataTypes={false} />
      </div>
    </div>
  );
};

export default PenParam;
