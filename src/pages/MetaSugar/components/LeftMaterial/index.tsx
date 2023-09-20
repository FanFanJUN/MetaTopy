import {
  AppstoreAddOutlined,
  ArrowDownOutlined,
  ArrowRightOutlined,
  FolderOpenOutlined,
} from '@ant-design/icons';
import { useSetState } from 'ahooks';
import _ from 'lodash';
import { useEffect } from 'react';
import { useMeta } from '../../context';
import { dragEventResolve } from './crossDrag';
import { ICON_TAB } from './data';
import { TAB_LIST } from './helper';
import styles from './index.less';

const LeftMaterial = () => {
  const [state, setState] = useSetState({
    activeTab: 'system',
    expandKeys: _.map(
      _.filter(ICON_TAB, (n) => n.expand),
      'key',
    ),
  });
  const { meta2d } = useMeta();

  useEffect(() => {}, [meta2d]);

  const _renderList = () => {
    return (
      <div className={styles.aside__content__system}>
        <div className={styles.iconTabList}>
          {ICON_TAB.map((item) => {
            const isShow = state.expandKeys.includes(item.key);
            return (
              <div className={styles.iconTabList__item} key={item.key}>
                <div
                  style={{
                    padding: '0 20px',
                    justifyContent: 'space-between',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <div>
                    <FolderOpenOutlined style={{ marginRight: '4px' }} />
                    {item.name}
                  </div>
                  <span
                    style={{
                      color: '#000000d9',
                      opacity: '.5',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      if (isShow) {
                        setState({
                          expandKeys: state.expandKeys.filter(
                            (a) => a !== item.key,
                          ),
                        });
                      } else {
                        setState({
                          expandKeys: [...state.expandKeys, item.key],
                        });
                      }
                    }}
                  >
                    {isShow ? <ArrowDownOutlined /> : <ArrowRightOutlined />}
                  </span>
                </div>
                <div
                  className={styles.iconTabList__item__list}
                  style={{ display: isShow ? '' : 'none' }}
                >
                  {item.list.map((icon) => {
                    const { key, title, data } = icon;
                    return (
                      <div
                        key={key}
                        className={styles.iconTabList__item__list__item}
                        title={icon.title}
                      >
                        <i
                          className={`${item.fontFamily} ${key}`}
                          title={title}
                          {...dragEventResolve(meta2d, data)}
                        ></i>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.iconButton}>
          <div className={styles.iconButton__inner}>
            <AppstoreAddOutlined />
            图形库管理
          </div>
        </div>
      </div>
    );
  };

  const _renderComp = () => {
    switch (state.activeTab) {
      case 'system':
        return _renderList();
      default:
        break;
    }
  };

  return (
    <div className={styles.aside}>
      <div className={styles.aside__tab}>
        {TAB_LIST.map((item) => {
          return (
            <div
              className={styles.aside__tab__item}
              key={item.key}
              data-isactive={item.key === state.activeTab}
              onClick={() => {
                if (item.key !== state.activeTab) {
                  setState({ activeTab: item.key });
                }
              }}
            >
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.aside__content}>{_renderComp()}</div>
    </div>
  );
};

export default LeftMaterial;
