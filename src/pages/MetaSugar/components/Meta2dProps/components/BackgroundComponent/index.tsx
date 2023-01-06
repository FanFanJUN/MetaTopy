import { useMeta } from '@/pages/MetaSugar/context';
import { useDeepCompareEffect, useSetState, useUpdate } from 'ahooks';
import { InputNumber, Switch } from 'antd';
import _ from 'lodash';
import React, { useEffect } from 'react';
import { TAB_LIST } from './helper';
import styles from './index.less';
import {
  RightOutlined,
  LineChartOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  UnlockOutlined,
} from '@ant-design/icons';
import ColorPicker from '@/pages/component/ColorPicker';
import { Pen } from '@meta2d/core';
interface IAppProps {}

const BackgroundComponent: React.FunctionComponent<IAppProps> = (props) => {
  const [state, setState] = useSetState({
    activeTab: _.head(TAB_LIST)?.key,
    expandKeys: ['canvas'],
  });

  const { meta2d } = useMeta();
  const update = useUpdate();
  useDeepCompareEffect(() => {
    update();
  }, [meta2d]);

  const _handleChange = (type: string, value?: any, checked?: boolean) => {
    switch (type) {
      case 'grid':
        meta2d.setGrid({
          grid: checked,
        });
        break;
      case 'gridRotate':
        meta2d.setGrid({
          gridRotate: value,
        });
        break;
      case 'rule':
        meta2d.setOptions({
          rule: checked,
        });
        break;
      case 'background':
      case 'gridColor':
      case 'color':
      case 'ruleColor':
      case 'gridSize':
        meta2d.setOptions({
          [type]: value,
        });
        break;
      default:
        break;
    }
    meta2d.resize();
    update();
  };
  const _renderCanvas = () => {
    const data = meta2d?.data();
    const option = meta2d?.getOptions();
    return (
      <>
        <div className={styles.content__item}>
          <header>
            画布
            <RightOutlined
              style={{
                cursor: 'pointer',
                transform: state.expandKeys.includes('canvas')
                  ? 'rotate(90deg)'
                  : 'rotate(00deg)',
                transition: 'transform .3s',
              }}
              onClick={() => {
                setState({
                  expandKeys: state.expandKeys.includes('canvas')
                    ? []
                    : ['canvas'],
                });
              }}
            />
          </header>
          <section
            style={{
              display: state.expandKeys.includes('canvas') ? '' : 'none',
              transition: 'display .3s',
            }}
          >
            <div className={styles.content__item__pro}>
              <span>默认颜色</span>
              <ColorPicker
                value={option?.color}
                onChange={(color?: string | undefined) =>
                  _handleChange('color', color, undefined)
                }
              />
            </div>
            <div className={styles.content__item__pro}>
              <span>背景网格</span>
              <Switch
                checked={data?.grid ?? false}
                onChange={(checked: boolean) =>
                  _handleChange('grid', null, checked)
                }
              />
            </div>
            <div className={styles.content__item__pro}>
              <span>网格颜色</span>
              <ColorPicker
                value={option?.gridColor}
                onChange={(color?: string | undefined) =>
                  _handleChange('gridColor', color, undefined)
                }
              />
            </div>
            <div className={styles.content__item__pro}>
              <span>网格大小</span>
              <InputNumber
                value={option?.gridSize}
                onChange={(gridSize?: string | undefined) =>
                  _handleChange('gridSize', gridSize, undefined)
                }
              />
            </div>
            <div className={styles.content__item__pro}>
              <span>网格角度</span>
              <InputNumber
                value={data?.gridRotate}
                onChange={(gridRotate?: string | undefined) =>
                  _handleChange('gridRotate', gridRotate, undefined)
                }
              />
            </div>
            <div className={styles.content__item__pro}>
              <span>标尺</span>
              <Switch
                checked={option?.rule ?? false}
                onChange={(checked: boolean) =>
                  _handleChange('rule', null, checked)
                }
              />
            </div>
            <div className={styles.content__item__pro}>
              <span>标尺颜色</span>
              <ColorPicker
                value={option?.ruleColor}
                onChange={(color?: string | undefined) =>
                  _handleChange('ruleColor', color, undefined)
                }
              />
            </div>
            <div className={styles.content__item__pro}>
              <span>背景颜色</span>
              <ColorPicker
                value={option?.background}
                onChange={(color?: string | undefined) =>
                  _handleChange('background', color, undefined)
                }
              />
            </div>
          </section>
        </div>
        <div className={styles.content__item}>
          <header>快捷键</header>
          <section className={styles.keyBor}>
            <ul>
              <li>← ↑ → ↓ ：移动5个像素</li>
              <li>Ctrl + 鼠标点击：多选</li>
              <li>Ctrl + 鼠标滚轮：缩放画布</li>
              <li>Ctrl + ← ↑ → ↓ ：移动1个像素</li>
              <li>Ctrl + 鼠标拖拽空白：移动整个画布</li>
              <li>Shift/Alt + 鼠标拖拽节点：独立拖拽（子）节点</li>
            </ul>
          </section>
        </div>
      </>
    );
  };

  const _setValue = (type: Pen, item: Pen) => {
    meta2d.setValue({
      id: item.id,
      [type]: !(type === 'lock' ? item?.[type] ?? false : item?.[type] ?? true),
    });
    meta2d.render();
    update();
  };

  const _renderStructure = () => {
    const pens = meta2d.data().pens;
    if (pens.length) {
      return (
        <div className={styles.structureWrap}>
          {pens.map((item) => {
            return (
              <div
                key={item.id}
                className={styles.structureWrap__item}
                style={{
                  color: item.visible ?? true ? '' : '#bfbfbf',
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
                    {item.locked ? <LockOutlined /> : <UnlockOutlined />}
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

  const _renderContent = () => {
    switch (state.activeTab) {
      case 'canvas':
        return _renderCanvas();
      case 'structure':
        return _renderStructure();
      default:
        break;
    }
  };

  return (
    <div className={styles.backgroundComponent}>
      <div className={styles.tab}>
        {TAB_LIST.map((item) => {
          return (
            <div
              className={`${styles.tabItem} ${
                state.activeTab === item.key ? styles.tabItem__active : ''
              }`}
              key={item.key}
              onClick={() => {
                if (item.key !== state.activeTab) {
                  setState({ activeTab: item.key });
                }
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div className={styles.content}>{_renderContent()}</div>
    </div>
  );
};

export default BackgroundComponent;
