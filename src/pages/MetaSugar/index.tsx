import { useSetState } from 'ahooks';
import { useState } from 'react';
import { Header, LeftMaterial, Meta2dProps } from './components';
import { MainMeta } from './container';
import type { IMeta } from './context';
import { MetaContext } from './context';
import styles from './index.less';

const App = () => {
  const [meta2d, setMeta] = useState<IMeta>();
  const [state, setState] = useSetState({
    selected: false,
    selectedData: {},
    multiData: [],
    type: 'default',
  });
  /**
   * 监听画布上元素的事件
   * @params {string} event - 事件名称
   * @params {object} data - 节点数据
   */
  const onMessage = (event: any, data: any) => {
    // console.log(event, data);
    if (data?.length === 0) {
      setState({
        type: 'default',
        selected: false,
        multiData: [],
        selectedData: {},
      });
      return;
    }
    switch (event) {
      case 'active':
        // 选中
        if (data && data?.length === 1) {
          const { name } = data[0];
          if (name === 'line') {
            setState({ type: 'line', selected: true, selectedData: data[0] });
          } else {
            setState({ type: 'node', selected: true, selectedData: data[0] });
          }
        } else {
          setState({ type: 'multi', selected: true, multiData: data });
        }
        break;
      case 'inactive':
        setState({
          type: 'default',
          selected: false,
          multiData: [],
          selectedData: {},
        });
      case 'opened':
        setState({
          type: 'default',
          selected: false,
          multiData: [],
          selectedData: {},
        });
        break;
      case 'translate':
        break;
      default:
        break;
    }
  };

  return (
    <MetaContext.Provider
      value={{
        meta2d,
      }}
    >
      <div className={styles.home}>
        {meta2d && <Header />}
        <div className={styles.home__container}>
          {/* 左侧画布pen */}
          <LeftMaterial />
          {/* 画布 */}
          <MainMeta onComplete={setMeta} onMessage={onMessage} />
          {/* 左侧画布、pen配置 */}
          <Meta2dProps {...state} />
        </div>
      </div>
    </MetaContext.Provider>
  );
};

export default App;
