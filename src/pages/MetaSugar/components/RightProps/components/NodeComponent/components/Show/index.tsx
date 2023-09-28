import { useMeta } from '@/pages/MetaSugar/context';
import ColorPicker from '@/pages/component/ColorPicker';
import { ArrowDownOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useSetState } from 'ahooks';
import { Image, Input, InputNumber, Select, Switch } from 'antd';
import { cloneDeep, map, round } from 'lodash';
import React from 'react';
import { Show_List } from './helper';
import styles from './index.less';

const Show: React.FunctionComponent = () => {
  const [state, setState] = useSetState({
    activeTab: 'system',
    expandKeys: map(Show_List, 'toolKey'),
    fresh: 1,
  });

  const { meta2d } = useMeta();

  const _handleChange = (value: any, values: any, tKey: string) => {
    const penOption = { id: values.id, [tKey]: value ?? undefined };
    if (tKey === 'dash') {
      const dashOption = {
        1: [5, 5],
        2: [10, 10],
        3: [10, 10, 2, 10],
      };
      Object.assign(penOption, {
        dash: value,
        lineDash: dashOption[value] || undefined,
      });
    } else if (tKey === 'decorationDash') {
      const dashOption = {
        1: [5, 5],
        2: [10, 10],
        3: [10, 10, 2, 10],
      };
      Object.assign(penOption, {
        decorationDash: value,
        textDecorationDash: dashOption[value] || undefined,
      });
    } else if (tKey === 'textStrickoutDashNum') {
      const dashOption = {
        1: [5, 5],
        2: [10, 10],
        3: [10, 10, 2, 10],
      };
      Object.assign(penOption, {
        textStrickoutDashNum: value,
        textStrickoutDash: dashOption[value] || undefined,
      });
    }
    meta2d.setValue(penOption);
    meta2d.render();
    setState({ fresh: state.fresh + 1 });
  };

  const _renderComp = (item: any) => {
    const values = meta2d.store.active?.[0] || {};
    // 获取逻辑位置  {x,y,width,height})  缩放、平移后，getPenRect不变，但是 pen.x、pen.y等可能会变
    const calculativeValues = meta2d.getPenRect(values) || {};
    if (item.type === 'inputNumber') {
      return (
        <InputNumber
          value={
            item.isLogic
              ? round(calculativeValues?.[item.toolKey], 2)
              : values?.[item.toolKey]
          }
          style={{ width: '100%' }}
          {...(item.compConf || {})}
          onChange={(value) => {
            _handleChange(value, values, item.toolKey);
          }}
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
      let options = cloneDeep(item.options || []);
      if (values.name === 'combine' && values?.children?.length) {
        values?.children?.forEach((item, index) => {
          options.push({
            label: `状态${index + 1}`,
            value: index,
          });
        });
      }
      return (
        <Select
          value={values?.[item.toolKey] ?? item.x}
          style={{ width: '100%' }}
          onChange={(e) => _handleChange(e, values, item.toolKey)}
        >
          {options.map((o) => {
            return (
              <Select.Option value={o.value} key={o.value}>
                {o.label}
              </Select.Option>
            );
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
    } else if (item.type === 'imagePreview') {
      return (
        <Image src={values?.image} style={{ width: '50px', height: 'auto' }} />
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
      case 'image':
        return obj.cList.map((item) => {
          const values = meta2d.store.active?.[0] || {};
          if (item.uiHidden) {
            if (item.uiHidden(values)) {
              return null;
            }
          }
          return (
            <div className={styles.showWrap_item_clist} key={item.toolKey}>
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
        if (item.uiHidden) {
          const values = meta2d.store.active?.[0] || {};
          if (item.uiHidden(values)) {
            return null;
          }
        }
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
            {isShow && <>{_renderContent(item)}</>}
          </div>
        );
      })}
    </div>
  );
};

export default Show;
