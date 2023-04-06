import { useSetState } from 'ahooks';
import { Dropdown, Input, InputNumber, MenuProps, message } from 'antd';
import React from 'react';
import { useMeta } from '../../context';
import { TOOL_LIST } from './helper';
import styles from './index.less';
import * as FileSaver from 'file-saver';
import _ from 'lodash';
import { parseSvg } from '@meta2d/svg';
import { deepClone } from '@meta2d/core';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const { meta2d } = useMeta();
  const [state, setState] = useSetState({
    activeToolKey: '',
    lineWidth: meta2d?.data()?.lineWidth || 1,
  });

  const onHandleImportJson = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (event) => {
      const elem = event.srcElement || event.target;
      if (elem.files && elem.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const text = e.target.result + '';
          try {
            if (text.indexOf('<svg') === 0) {
              // @ts-ignore
              const pens = parseSvg(text);
              // @ts-ignore
              if (meta2d) {
                // @ts-ignore
                meta2d.canvas.addCaches = deepClone(pens);
                message.success('svg转换成功，请点击画布决定放置位置');
              }
            }
            const data = JSON.parse(text);
            meta2d.open(data);
          } catch (e) {
            return false;
          } finally {
          }
        };
        reader.readAsText(elem.files[0]);
      }
    };
    input.click();
  };

  const onHandleSaveToSvg = () => {
    const C2S = window.C2S;
    const ctx = new C2S(meta2d.canvas.width + 200, meta2d.canvas.height + 200);
    // if (!meta2d.isEmptyData()) {
    //   for (const item of meta2d.data().pens) {
    //     item.render(ctx);
    //   }
    // }
    let mySerializedSVG = ctx.getSerializedSvg();
    mySerializedSVG = mySerializedSVG.replace(
      '<defs/>',
      `<defs>
    <style type="text/css">
      @font-face {
        font-family: 'topology';
        src: url('http://at.alicdn.com/t/font_1331132_h688rvffmbc.ttf?t=1569311680797') format('truetype');
      }
    </style>
  </defs>`,
    );
    mySerializedSVG = mySerializedSVG.replace(/--le5le--/g, '&#x');
    const urlObject = window.URL || window;
    const export_blob = new Blob([mySerializedSVG]);
    const url = urlObject.createObjectURL(export_blob);
    const a = document.createElement('a');
    a.setAttribute('download', 'meta2D.svg');
    a.setAttribute('href', url);
    const evt = document.createEvent('MouseEvents');
    evt.initEvent('click', true, true);
    a.dispatchEvent(evt);
  };

  const _handleOp = (type: string) => {
    const isActive = state.activeToolKey === type;
    if (!isActive) {
      setState({ activeToolKey: type });
    } else {
      setState({ activeToolKey: '' });
    }
    switch (type) {
      case 'ditu':
        if (isActive) {
          meta2d.hideMap();
        } else {
          meta2d.showMap();
        }
        break;
      case 'fangdajing':
        if (isActive) {
          meta2d.hideMagnifier();
        } else {
          meta2d.showMagnifier();
        }
        break;
      case 'curve':
        if (isActive) {
          meta2d.drawLine();
        } else {
          meta2d.drawLine('curve');
        }
        break;
      case 'qianbi':
        if (isActive) {
          meta2d.stopPencil();
        } else {
          meta2d.drawingPencil();
        }
        break;
      case 'newFile':
        // @ts-ignore
        meta2d.open({ pens: [] });
        break;
      case 'downLoadJson':
        FileSaver.saveAs(
          new Blob([JSON.stringify(meta2d.data())], {
            type: 'text/plain;charset=utf-8',
          }),
          `meta2D.json`,
        );
        break;
      case 'openLocalFile':
        onHandleImportJson();
        break;
      case 'downloadPng':
        if (meta2d.isEmptyData()) {
          message.warning('暂无面板数据');
          return;
        }
        meta2d.downloadPng('meta2D.png');
      case 'downloadSvg':
        onHandleSaveToSvg();
        break;
      case 'fitView':
        meta2d.fitView();
      default:
        break;
    }
  };

  const _handleMenuClick: MenuProps['onClick'] = (e) => {
    _handleOp(e.key);
  };

  const renderIcon = (item: any) => {
    if (item.oComp) {
      switch (item.toolKey) {
        case 'xiankuan':
          return (
            <span className={styles.topItem__value}>{state.lineWidth}</span>
          );
        case 'fitView':
          return <div className={styles[`topItem__${item.toolKey}`]} />;
        default:
          break;
      }
    }
    return <i className={`t-icon t-${item.toolKey}`} />;
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__middle}>
        {TOOL_LIST.map((item) => {
          if (item.isSplit) {
            return <div className={styles.header__middle__split} />;
          }
          const comp = (
            <div
              key={item.toolKey}
              onClick={(e) => {
                if (item.toolKey === 'folder') {
                  e.preventDefault();
                  return;
                }
                _handleOp(item.toolKey);
              }}
              data-toolKey={item.toolKey}
              className={`${styles.header__middle__item}`}
              data-isDivider={item.toolKey.includes('divider_T')}
            >
              <div className={styles.topItem}>
                {renderIcon(item)}
                {(item.dropdown && (
                  <i
                    className={`t-icon t-triangle-down`}
                    style={{ fontSize: '10px' }}
                  />
                )) ||
                  null}
              </div>
              <span className={styles.itemName}>{item.name}</span>
            </div>
          );
          if (item.dropdown) {
            const { items, type } = item.dropdown;
            const dropDownObj = {};
            if (type === 'menu') {
              Object.assign(dropDownObj, {
                menu: {
                  items,
                  onClick: _handleMenuClick,
                },
              });
            } else if (type === 'input') {
              Object.assign(dropDownObj, {
                dropdownRender: () => {
                  return (
                    <div className={styles.dropdown__renderInput} v>
                      <InputNumber
                        value={state.lineWidth}
                        step={1}
                        min={1}
                        onChange={(value: number | null) => {
                          // meta2d.setOptions({
                          //   linew
                          // })
                          setState({ lineWidth: value });
                        }}
                      />
                    </div>
                  );
                },
              });
            }
            return (
              <Dropdown
                overlayClassName={`${styles.dropdown} ${
                  item.dropdown.hasDivider ? styles.hasDivider : ''
                }`}
                {...dropDownObj}
                data-dropKey={item.toolKey}
              >
                {comp}
              </Dropdown>
            );
          }
          return comp;
        })}
      </div>
    </header>
  );
};

export default Header;
