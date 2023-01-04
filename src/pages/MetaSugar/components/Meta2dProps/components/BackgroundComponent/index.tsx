import { useSetState } from 'ahooks';
import _ from 'lodash';
import React from 'react';
import { TAB_LIST } from './helper';
import styles from './index.less';

interface IAppProps {}

const BackgroundComponent: React.FunctionComponent<IAppProps> = (props) => {
  const [state, setState] = useSetState({
    activeTab: _.head(TAB_LIST)?.key,
  });

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
    </div>
  );
};

export default BackgroundComponent;
