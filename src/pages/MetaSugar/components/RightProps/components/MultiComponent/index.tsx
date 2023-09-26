import { useSetState } from 'ahooks';
import React from 'react';
import { Structure } from '../NodeComponent/components';
import { LayOut, Outward } from './components';
import { TAB_LIST } from './helper';
import styles from './index.less';
interface IAppProps {}

const NodeComponent: React.FunctionComponent<IAppProps> = (props) => {
  const [state, setState] = useSetState({
    activeTab: 'outward',
  });

  const _renderContent = () => {
    switch (state.activeTab) {
      case 'outward':
        return <Outward />;
      case 'layout':
        return <LayOut />;
      case 'struct':
        return <Structure />;
      default:
        break;
    }
  };

  return (
    <div className={styles.nodeWrap}>
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

export default NodeComponent;
