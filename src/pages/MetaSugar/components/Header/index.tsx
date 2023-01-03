import { useSetState } from 'ahooks';
import { Dropdown, MenuProps } from 'antd';
import React from 'react';
import { useMeta } from '../../context';
import { FILE_LIST, TOOL_LIST, TOOL_LIST_LEFT } from './helper';
import styles from './index.less';
import * as FileSaver from 'file-saver';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const [state, setState] = useSetState({
    activeToolKey: '',
  });

  const { meta2d } = useMeta();

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
      default:
        break;
    }
  };
  const items: MenuProps['items'] = FILE_LIST;

  const _handleMenuClick: MenuProps['onClick'] = (e) => {
    _handleOp(e.key);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        {TOOL_LIST_LEFT.map((item) => {
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
              className={`${styles.header__middle__item}`}
            >
              <i className={`t-icon t-${item.toolKey}`} />
              <span className={styles.itemName}>{item.name}</span>
            </div>
          );
          if (item.toolKey === 'folder') {
            return (
              <Dropdown
                menu={{ items, onClick: _handleMenuClick }}
                overlayClassName={styles.fileDropdown}
              >
                {comp}
              </Dropdown>
            );
          }
          return comp;
        })}
      </div>
      <div className={styles.header__middle}>
        {TOOL_LIST.map((item) => {
          return (
            <div
              className={`${styles.header__middle__item} ${
                item.toolKey === state.activeToolKey
                  ? styles.header__middle__item__active
                  : ''
              }`}
              key={item.toolKey}
              onClick={() => _handleOp(item.toolKey)}
            >
              <i className={`t-icon t-${item.toolKey}`} />
              <span className={styles.itemName}>{item.name}</span>
            </div>
          );
        })}
      </div>
      <div className={styles.header__right}></div>
    </header>
  );
};

export default Header;
