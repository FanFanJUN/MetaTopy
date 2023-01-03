import { useSetState } from 'ahooks';
import React from 'react';
import { useMeta } from '../../context';
import { TOOL_LIST } from './helper';
import styles from './index.less';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const [state, setState] = useSetState({
    activeToolKey: '',
  });

  const { meta2d } = useMeta();

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
      default:
        break;
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__left}></div>
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
