import { useMeta } from '@/pages/MetaSugar/context';
import ColorPicker from '@/pages/component/ColorPicker';
import { ArrowDownOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useSetState } from 'ahooks';
import { Input, InputNumber, Select, Slider, Switch } from 'antd';
import { keyBy, map, round } from 'lodash';
import React from 'react';
import { Buttons, SelectOptions, Show_List } from './helper';
import styles from './index.less';
interface IAppProps {}

const LineAnimate: React.FunctionComponent<IAppProps> = (props) => {
  const [state, setState] = useSetState({
    activeTab: 'system',
    expandKeys: map(Show_List, 'toolKey'),
    fresh: 1,
  });

  const { meta2d } = useMeta();

  const _handleChange = (value: any, values: any, tKey: string) => {
    const penOption = {
      id: values.id,
      [tKey]: value,
    };
    if (tKey === 'animateCycle') {
      Object.assign(penOption, {
        animateCycle: value || Infinity,
      });
    } else if (tKey === 'animateType') {
      Object.assign(penOption, {
        showDuration: keyBy(SelectOptions, 'value')?.[value]?.durationTime,
      });
    } else if (tKey === 'animateDash') {
      let animateLineDash = undefined;
      if (value === 1) {
        animateLineDash = [10, 10];
      } else if (value === 2) {
        animateLineDash = [10, 10, 2, 10];
      }
      Object.assign(penOption, { animateLineDash });
    }
    meta2d.setValue({ ...penOption });
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
      return (
        <Select
          value={values?.[item.toolKey] ?? item.x}
          style={{ width: '100%' }}
          onChange={(e) => _handleChange(e, values, item.toolKey)}
        >
          {item.options.map((o) => {
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
    } else if (item.type === 'Slider') {
      return (
        <Slider
          min={1}
          max={5}
          {...(item.compConf || {})}
          value={values?.[item.toolKey]}
          onChange={(value?: string | undefined) =>
            _handleChange(value, values, item.toolKey)
          }
        />
      );
    }
    return <Input value={values?.[item.toolKey]} />;
  };

  const _renderContent = (obj: any) => {
    switch (obj.toolKey) {
      case 'animate':
        return obj.cList.map((item) => {
          const values = meta2d.store.active?.[0] || {};
          if (item?.toolKey === 'animateDotSize') {
            if (!((values.lineAnimateType ?? 0) === 2)) {
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

  const _handleStart = (tKey: string) => {
    meta2d?.[tKey](meta2d?.store?.active);
    meta2d.render();
    setState({ fresh: state.fresh + 1 });
  };

  const _renderButtons = () => {
    return (
      <div className={styles.buttons}>
        {Buttons.map((item) => {
          return (
            <div
              data-button={item.toolKey}
              key={item.toolKey}
              onClick={() => _handleStart(item.toolKey)}
            >
              <span style={{ lineHeight: 1, marginRight: '6px' }}>
                {item.icon}
              </span>
              {item.name}
            </div>
          );
        })}
      </div>
    );
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
            {isShow && (
              <>
                {_renderContent(item)}
                {_renderButtons()}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LineAnimate;
