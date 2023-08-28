import React, { useEffect, useState } from 'react';
import { Header, LeftMaterial, Meta2dProps, RightClick } from './components';
import { IMeta, MetaContext } from './context';
import { MainMeta } from './container';
import styles from './index.less';
import { useSetState } from 'ahooks';
import { Modal, message } from 'antd';

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
          if (name == 'line') {
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
        <Header />
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
