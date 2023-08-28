import { useMeta } from '@/pages/MetaSugar/context';
import _ from 'lodash';
import React from 'react';
import ReactJson from 'react-json-view';
import styles from './index.less';
import { TAB_LIST } from './helper';
import { useSetState } from 'ahooks';
import { Show } from './components';
interface IAppProps {}

const NodeComponent: React.FunctionComponent<IAppProps> = (props) => {
  const { meta2d } = useMeta();
  const [state, setState] = useSetState({
    activeTab: 'show',
  });

  const _renderContent = () => {
    switch (state.activeTab) {
      case 'show':
        return <Show />;
      case 'data':
        return (
          <ReactJson
            src={_.omit(meta2d.store.active?.[0], ['calculative', 'anchors'])}
          />
        );
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
