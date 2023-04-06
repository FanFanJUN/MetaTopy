import { useMeta } from '@/pages/MetaSugar/context';
import _ from 'lodash';
import React from 'react';
import ReactJson from 'react-json-view';
import styles from './index.less';
interface IAppProps {}

const NodeComponent: React.FunctionComponent<IAppProps> = (props) => {
  const { meta2d } = useMeta();
  return (
    <div className={styles.nodeWrap}>
      <ReactJson
        src={_.omit(meta2d.store.active?.[0], ['calculative', 'anchors'])}
      />
    </div>
  );
};

export default NodeComponent;
