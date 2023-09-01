import React, { useState } from 'react';
import styles from './index.less';
import { Show_List } from './helper';
import { map } from 'lodash';
import { ArrowDownOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Input, InputNumber, Select, Switch } from 'antd';
import { useMeta } from '@/pages/MetaSugar/context';
import { useSetState } from 'ahooks';
import ColorPicker from '@/pages/component/ColorPicker';
interface IAppProps {}

const Show: React.FunctionComponent<IAppProps> = (props) => {
  const [state, setState] = useSetState({
    activeTab: 'system',
    expandKeys: map(Show_List, 'toolKey'),
    fresh: 1,
  });

  const { meta2d } = useMeta();

  const _handleChange = (value: any, values: any, tKey: string) => {
    const penOption = { id: values.id, [tKey]: value };
    if (tKey === 'dash') {
      const dashOption = {
        1: [5, 5],
        2: [10, 10],
        3: [10, 10, 2, 10],
      };
      Object.assign(penOption, {
        lineDash: dashOption[value] || undefined,
      });
    }
    meta2d.setValue(penOption);
    meta2d.render();
    setState({ fresh: state.fresh + 1 });
  };

  const _renderComp = (item: any) => {
    const values = meta2d.store.active?.[0] || {};
    if (item.type === 'inputNumber') {
      return (
        <InputNumber
          value={values?.[item.toolKey]}
          style={{ width: '100%' }}
          onChange={(value) => _handleChange(value, values, item.toolKey)}
        />
      );
    } else if (item.type === 'switch') {
      return (
        <Switch
          checked={values?.[item.toolKey]}
          onChange={(value) => _handleChange(value, values, item.toolKey)}
        />
      );
    } else if (item.type === 'textArea') {
      return (
        <Input.TextArea
          value={values?.[item.toolKey]}
          onChange={(e) => _handleChange(e.target.value, values, item.toolKey)}
        />
      );
    } else if (item.type === 'select') {
      return (
        <Select
          value={values?.[item.toolKey] ?? item.defaultValue}
          style={{ width: '100%' }}
          onChange={(e) => _handleChange(e, values, item.toolKey)}
        >
          {item.options.map((o) => {
            return <Select.Option value={o.value}>{o.label}</Select.Option>;
          })}
        </Select>
      );
    } else if (item.type === 'colorPicker') {
      return (
        <ColorPicker
          value={values?.[item.toolKey]}
          onChange={(color?: string | undefined) =>
            _handleChange(color, values, item.toolKey)
          }
        />
      );
    }
    return <Input />;
  };

  const _renderContent = (obj: any) => {
    switch (obj.toolKey) {
      case 'basic':
      case 'disable':
      case 'text':
      case 'style':
        return obj.cList.map((item) => {
          return (
            <div className={styles.showWrap_item_clist}>
              <span style={{ color: '#7f838c', fontSize: '12px' }}>
                {item.name}
              </span>
              <span style={{ width: 150 }}>{_renderComp(item)}</span>
            </div>
          );
        });
      default:
        break;
    }
  };

  const _handleEx = (r: any, isShow: boolean) => {
    let fList: string[] = [];
    if (isShow) {
      fList = state.expandKeys.filter((i) => i !== r.toolKey);
    } else {
      fList = [...state.expandKeys, r.toolKey];
    }
    setState({ expandKeys: fList });
  };

  return (
    <div className={styles.showWrap}>
      {Show_List.map((item) => {
        const isShow = state.expandKeys.includes(item.toolKey);
        return (
          <div key={item.toolKey} className={styles.showWrap_item}>
            <div className={styles.showWrap_item_name}>
              <span>{item.name}</span>
              <span
                onClick={() => _handleEx(item, isShow)}
                style={{ cursor: 'pointer' }}
              >
                {isShow ? <ArrowDownOutlined /> : <ArrowRightOutlined />}
              </span>
            </div>
            {isShow && _renderContent(item)}
          </div>
        );
      })}
    </div>
  );
};

export default Show;
