import { deepClone } from '@meta2d/core';
import { parseSvg } from '@meta2d/svg';
import { useSetState, useUpdate } from 'ahooks';
import { Dropdown, InputNumber, message } from 'antd';
import * as FileSaver from 'file-saver';
import { keyBy } from 'lodash';
import React, { useEffect } from 'react';
import { history } from 'umi';
import { useMeta } from '../../context';
import { SelectOption, TOOL_LIST, savePreviewData } from './helper';
import styles from './index.less';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const update = useUpdate();
  const { meta2d } = useMeta();
  const [state, setState] = useSetState({
    activeToolKey: '',
    lineWidth: meta2d?.data()?.lineWidth || 1,
  });
  useEffect(() => {
    setState({ lineWidth: meta2d?.data()?.lineWidth || 1 });
  }, [meta2d?.data()?.lineWidth || 1]);

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
            if (data.topologyData?.main) {
              data.pens = data.topologyData?.main;
            }
            meta2d.open(data);
            if (data.isScreen) {
              meta2d.fitSizeView();
            } else {
              meta2d.fitView();
            }
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

  const resetEvent = () => {
    meta2d.hideMagnifier();
    meta2d.stopPencil();
    meta2d.drawLine();
  };

  const _handleOp = (type: string, value?: any) => {
    const currentObj = meta2d.store.data ?? {};
    if (type === 'lockStatus') {
      const { locked = 0 } = currentObj;
      const lockStatus = {
        0: 1,
        1: 2,
        2: 0,
      };
      meta2d.lock(lockStatus[locked]);
      meta2d.render();
      update();
      return;
    }
    const isActive = state.activeToolKey === type;
    // if (![...map(SelectOption, 'key')].some((item) => item === type) || !boo) {
    if (!isActive) {
      setState({ activeToolKey: type });
    } else {
      setState({ activeToolKey: '' });
    }
    // }
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
          meta2d.stopPencil();
          meta2d.drawLine(meta2d?.store?.options?.drawingLineName);
        }
        break;
      case 'qianbi':
        if (isActive) {
          meta2d.stopPencil();
        } else {
          meta2d.drawLine();
          meta2d.drawingPencil();
        }
        break;
      case 'newFile':
        resetEvent();
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
        resetEvent();
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
        if (meta2d.isScreen()) {
          meta2d.fitSizeView();
        } else {
          meta2d.fitView();
        }
        break;
      case 'attention':
        savePreviewData(JSON.stringify(meta2d.data()));
        history.push('/preview');
        break;
      // eslint-disable-next-line no-duplicate-case
      case 'curve2':
        meta2d.setOptions({ drawingLineName: value });
        resetEvent();
        update();
        break;
      case 'fromArrow':
        {
          meta2d.store.data.fromArrow = value;
          resetEvent();
          update();
        }
        break;
      case 'toArrow':
        {
          meta2d.store.data.toArrow = value;
          resetEvent();
          update();
        }
        break;
      default:
        break;
    }
  };

  const _handleMenuClick = (e: any, tKey: string) => {
    if (tKey === 'folder') {
      _handleOp(e.key);
      return;
    }
    e.key && _handleOp(tKey, e.key);
  };

  const renderIcon = (item: any) => {
    const currentObj = meta2d?.store?.data ?? {};
    if (item.oComp) {
      switch (item.toolKey) {
        case 'lockStatus': {
          const lockIcon = {
            0: 'unlock',
            1: 'lock',
            2: 'wufayidong',
          };
          return (
            <i className={`t-icon t-${lockIcon[currentObj?.locked ?? 0]}`} />
          );
        }
        case 'xiankuan':
          return (
            <span className={styles.topItem__value}>{state.lineWidth}</span>
          );
        case 'fitView':
          return <div className={styles[`topItem__${item.toolKey}`]} />;
        case 'curve2':
          {
            const currentLineObj = keyBy(SelectOption, 'key')?.[
              meta2d?.store?.options?.drawingLineName
            ];
            const lineName = currentLineObj?.iconKey || currentLineObj?.key;
            return <i className={`t-icon t-${lineName}`} />;
          }
          break;
        case 'fromArrow':
        case 'toArrow': {
          const aObj = {
            fromArrow: 'from',
            toArrow: 'to',
          };
          const name = currentObj?.[`${aObj[item.toolKey]}Arrow`];
          const lineName =
            currentObj?.iconKey ||
            (name && `t-${aObj[item.toolKey]}-${name}`) ||
            't-line';
          return <i className={`t-icon ${lineName}`} />;
        }
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
            return (
              <div
                key={item.toolKey}
                className={styles.header__middle__split}
              />
            );
          }
          const currentObj = meta2d?.store?.data ?? {};
          const showName = () => {
            if (item.toolKey === 'lockStatus') {
              const showNameObj = {
                0: '编辑',
                1: '预览',
                2: '锁定',
              };
              return showNameObj[currentObj.locked ?? 0];
            }
            return item.name;
          };
          const comp = (
            <div
              key={item.toolKey}
              onClick={(e) => {
                if (
                  [
                    'folder',
                    'xiankuan',
                    'fromArrow',
                    'toArrow',
                    'curve2',
                  ].includes(item.toolKey)
                ) {
                  e.preventDefault();
                  return;
                }
                _handleOp(item.toolKey);
              }}
              data-toolKey={item.toolKey}
              data-canvaslock={currentObj.locked ?? 0}
              className={`${styles.header__middle__item}`}
              data-isDivider={item.toolKey.includes('divider_T')}
              style={
                state.activeToolKey === item.toolKey &&
                ['curve', 'qianbi', 'fangdajing', 'ditu'].includes(item.toolKey)
                  ? { color: 'rgb(24, 144, 255)' }
                  : {}
              }
            >
              <div className={styles.topItem}>
                {meta2d && renderIcon(item)}
                {(item.dropdown && (
                  <i
                    className={`t-icon t-triangle-down`}
                    style={{ fontSize: '10px' }}
                  />
                )) ||
                  null}
              </div>
              <span className={styles.itemName}>{showName()}</span>
            </div>
          );
          if (item.dropdown) {
            const { items, type } = item.dropdown;
            const dropDownObj = {};
            if (type === 'menu') {
              Object.assign(dropDownObj, {
                menu: {
                  items,
                  onClick: (e: any) => _handleMenuClick(e, item.toolKey),
                },
              });
            } else if (type === 'input') {
              Object.assign(dropDownObj, {
                dropdownRender: () => {
                  return (
                    <div className={styles.dropdown__renderInput}>
                      <InputNumber
                        value={state.lineWidth}
                        step={1}
                        min={1}
                        onChange={(value: number | null) => {
                          meta2d.store.data.lineWidth = value || 1;
                          resetEvent();
                          setState({ lineWidth: value });
                        }}
                      />
                    </div>
                  );
                },
              });
            }
            return (
              // eslint-disable-next-line react/jsx-key
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
