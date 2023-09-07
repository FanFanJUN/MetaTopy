import { Meta2d } from '@meta2d/core';
import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { RightClick } from './components';
import { containerDragResolve } from './components/LeftMaterial/crossDrag';
import { preConf, setFunMeta2D } from './hepler';
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
import { chartsPens } from '@meta2d/le5le-charts';
import { previewData } from './components/Header/helper';
import { isEmpty } from 'lodash';
import { Button } from 'antd';
import { history } from 'umi';
import { IMeta } from './context';

export const MainMeta = (props) => {
  const {
    mateConf = {},
    onComplete,
    onMessage,
    pageType,
    showReturnButton,
  } = props;
  const [isLoad, setIsLoad] = useState(false);
  const [meta2d, setState] = useState<IMeta>(null);
  const isPreView = pageType === 'preview';
  useEffect(() => {
    window.meta2d = new Meta2d('meta2d');
    onComplete && onComplete(window.meta2d);
    setState(window.meta2d);
    setIsLoad(true);
  }, []);

  useEffect(() => {
    if (meta2d) {
      const options = {
        background: '#222629',
        rule: true,
        color: '#278df8',
        locked: 0,
        ...mateConf,
      };
      if (isPreView) {
        Object.assign(options, preConf);
      }
      // 组件注册
      registerEcharts();
      registerHighcharts();
      registerLightningChart();
      meta2d.registerCanvasDraw(chartsPens());
      meta2d.register(activityDiagram());
      meta2d.register(classPens());
      meta2d.register(sequencePens());
      meta2d.registerCanvasDraw(sequencePensbyCtx());
      meta2d.registerCanvasDraw(formPens());
      meta2d.register(flowPens());
      meta2d.setOptions(options);
      meta2d.on('*', onMessage); // 监听所有事件
      setFunMeta2D(meta2d);
      const pens = previewData?.pens || [];
      /*  pens.forEach((item) => {
        item.locked = isPreView ? 2 : 0;
        item.disableAnchor = isPreView ? true : false;
        item.disableInput = isPreView ? true : false;
      }); */
      !isEmpty(previewData);
      meta2d.open({ ...previewData, pens });
      if (isPreView) {
        meta2d.lock(1);
      } else {
        meta2d.lock(0);
      }
      meta2d.resize();
      meta2d.fitView();
    }
    return () => {
      meta2d && meta2d.off('*', onMessage);
    };
  }, [meta2d]);

  return (
    <main
      className={styles.main}
      id="meta2d"
      style={
        isPreView
          ? {
              height: '100%',
              width: '100%',
              flexShrink: '0',
              position: 'relative',
            }
          : {}
      }
    >
      <div
        className={styles.meta2d}
        {...containerDragResolve(meta2d)}
        data-mark="noMove"
        id="iMeta2d"
      >
        {/* 右键 */}
      </div>
      {isLoad && <RightClick />}
      {isPreView && showReturnButton && (
        <>
          <Button
            style={{ position: 'absolute', zIndex: '10000', right: '0' }}
            onClick={() => history.goBack()}
          >
            返回
          </Button>
          <Button
            style={{ position: 'absolute', zIndex: '10000', right: '100px' }}
            onClick={() => meta2d.fitView()}
          >
            自适应
          </Button>
        </>
      )}
    </main>
  );
};

export { useMeta } from './context';
