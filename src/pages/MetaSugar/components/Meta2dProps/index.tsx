import React, { useMemo } from 'react';
import { BackgroundComponent } from './components';
import styles from './index.less';

interface IMeta2dPropsProps {
  type: 'line' | 'default' | 'node' | 'multi';
  selected: boolean;
  selectedData: object;
  multiData: any[];
}

const Meta2dProps: React.FunctionComponent<IMeta2dPropsProps> = (props) => {
  const { selected, selectedData, type } = props;
  const _renderComp = useMemo(() => {
    switch (type) {
      case 'node':
        return <h1>node</h1>;
      case 'line':
        return <h1>line</h1>;
      case 'multi':
        return <h1>multi</h1>;
      default:
        return <BackgroundComponent />;
    }
  }, [type]);
  return <section className={styles.rightConf}>{_renderComp}</section>;
};

export default Meta2dProps;
