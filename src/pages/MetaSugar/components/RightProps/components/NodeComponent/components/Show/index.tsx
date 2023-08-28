import React, { useState } from 'react';
import styles from './index.less';
import { Show_List } from './helper';
import { map } from 'lodash';
import { ArrowDownOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Input, InputNumber } from 'antd';
import { useMeta } from '@/pages/MetaSugar/context';
import { useSetState } from 'ahooks';
interface IAppProps {}

const Show: React.FunctionComponent<IAppProps> = (props) => {
  const [state, setState] = useSetState({
    activeTab: 'system',
    expandKeys: map(Show_List, 'toolKey'),
    fresh: 1,
  });

  const { meta2d } = useMeta();

  const _handleChange = (value: any, values: any, tKey: string) => {
    meta2d.setValue({ id: values.id, [tKey]: value });
    meta2d.render();
    setState({ fresh: state.fresh + 1 });
  };

  const _renderComp = (item: any) => {
    const values = meta2d.store.active?.[0] || {};
    if ('inputNumber') {
      return (
        <InputNumber
          value={values?.[item.toolKey]}
          style={{ width: '100%' }}
          onChange={(value) => _handleChange(value, values, item.toolKey)}
        />
      );
    }
    return <Input />;
  };

  const _renderContent = (obj: any) => {
    switch (obj.toolKey) {
      case 'basic':
        return obj.cList.map((item) => {
          return (
            <div className={styles.showWrap_item_clist}>
              <span>{item.name}</span>
              <span style={{ width: 150 }}>{_renderComp(item)}</span>
            </div>
          );
        });
      default:
        break;
    }
  };

  return (
    <div className={styles.showWrap}>
      {Show_List.map((item) => {
        const isShow = state.expandKeys.includes(item.toolKey);
        return (
          <div key={item.toolKey} className={styles.showWrap_item}>
            <div className={styles.showWrap_item_name}>
              <span>{item.name}</span>
              {isShow ? <ArrowDownOutlined /> : <ArrowRightOutlined />}
            </div>
            {_renderContent(item)}
          </div>
        );
      })}
    </div>
  );
};

export default Show;
