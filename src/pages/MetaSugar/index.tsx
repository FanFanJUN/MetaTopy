import React, { useEffect, useState } from 'react';
import { Header, LeftMaterial, Meta2dProps } from './components';
import { IMeta, MetaContext } from './context';
import { MainMeta } from './Meta2dContainer';
import styles from './index.less';
import { useSetState } from 'ahooks';
import { setFunMeta2D } from './hepler';
import { flowPens } from '@meta2d/flow-diagram';
import { activityDiagram } from '@meta2d/activity-diagram';
import { classPens } from '@meta2d/class-diagram';
import { sequencePens, sequencePensbyCtx } from '@meta2d/sequence-diagram';
import { formPens } from '@meta2d/form-diagram';
import {
  register as registerEcharts,
  registerHighcharts,
  registerLightningChart,
} from '@meta2d/chart-diagram';

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
    switch (event) {
      case 'active':
        // 选中
        if (data && data.length === 1) {
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
      default:
        break;
    }
  };

  useEffect(() => {
    if (meta2d) {
      // 组件注册
      meta2d.register(activityDiagram());
      meta2d.register(classPens());
      meta2d.register(sequencePens());
      meta2d.registerCanvasDraw(sequencePensbyCtx());
      meta2d.registerCanvasDraw(formPens());
      meta2d.register(flowPens());
      registerEcharts();
      registerHighcharts();
      registerLightningChart();
      meta2d.setOptions({
        background: '#222629',
        rule: true,
        color: '#278df8',
      });
      meta2d.on('*', onMessage); // 监听所有事件
      setFunMeta2D(meta2d);
      meta2d.resize();
    }
    return () => {
      meta2d && meta2d.off('*', onMessage);
    };
  }, [meta2d]);

  return (
    <MetaContext.Provider
      value={{
        meta2d,
      }}
    >
      <div className={styles.home}>
        <Header />
        <div className={styles.home__container}>
          <LeftMaterial />
          <MainMeta onComplete={setMeta} />
          <Meta2dProps {...state} />
        </div>
      </div>
    </MetaContext.Provider>
  );
};

export default App;
