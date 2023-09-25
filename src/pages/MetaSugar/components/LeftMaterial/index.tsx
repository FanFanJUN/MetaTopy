import { ArrowDownOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useSetState } from 'ahooks';
import { keyBy } from 'lodash';
import { useEffect } from 'react';
import { useMeta } from '../../context';
import { dragEventResolve } from './crossDrag';
import { TAB_LIST } from './helper';
import styles from './index.less';

const LeftMaterial = () => {
  const [state, setState] = useSetState({
    activeTab: 'graphics',
    expandKeys: [],
  });
  const { meta2d } = useMeta();

  useEffect(() => {
    const expList = TAB_LIST.filter((item) => item.key === state.activeTab)?.[0]
      ?.list.filter((sItem) => sItem?.expand)
      ?.map((d) => d.key);
    setState({ expandKeys: expList });
  }, [state.activeTab]);

  useEffect(() => {}, [meta2d]);

  const _renderList = (l: any) => {
    return (
      <div className={styles.aside__content__system}>
        <div className={styles.iconTabList}>
          {l?.map((item) => {
            const isShow = state.expandKeys.includes(item.key);
            return (
              <div className={styles.iconTabList__item} key={item.key}>
                <div
                  style={{
                    padding: '0 8px',
                    justifyContent: 'space-between',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <div>
                    {/* <FolderOpenOutlined style={{ marginRight: '4px' }} /> */}
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
                    if (icon.useSvg) {
                      return (
                        <div
                          key={key}
                          {...dragEventResolve(meta2d, data)}
                          className={styles.iconTabList__item__list__usesvg}
                        >
                          <svg className={styles.ticonusescg}>
                            <use href={`#${key}`}></use>
                          </svg>
                        </div>
                      );
                    }
                    return (
                      <div
                        key={key}
                        className={styles.iconTabList__item__list__item}
                        title={icon.title}
                      >
                        <i
                          className={`${
                            icon.fontFamily || item.fontFamily
                          } ${key}`}
                          title={title}
                          {...dragEventResolve(meta2d, data)}
                        ></i>
                        <span className={styles.desc}>{title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className={styles.iconButton}>
          <div className={styles.iconButton__inner}>
            <AppstoreAddOutlined />
            图形库管理
          </div>
        </div> */}
      </div>
    );
  };

  const _renderComp = () => {
    const list = keyBy(TAB_LIST, 'key')[state.activeTab]?.list || [];
    return _renderList(list);
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
              <svg className={styles.ticonscg}>
                <use href={`#${item.icon}`}></use>
              </svg>
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
