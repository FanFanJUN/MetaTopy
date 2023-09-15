import { Meta2d } from '@meta2d/core';
import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { RightClick } from './components';
import { containerDragResolve } from './components/LeftMaterial/crossDrag';
import { PreviewButton, preConf, setFunMeta2D } from './hepler';
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
import { previewData, savePreviewData } from './components/Header/helper';
import { isEmpty } from 'lodash';
import { Button } from 'antd';
import { history } from 'umi';
import { IMeta } from './context';
import { useSetState } from 'ahooks';

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
    setFunMeta2D(window.meta2d);
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
      // @ts-ignore
      if (!isEmpty(previewData)) {
        meta2d.open({ ...previewData, pens });
      }
      if (isPreView) {
        meta2d.lock(1);
      } else {
        meta2d.lock(0);
      }
      if (meta2d.isScreen()) {
        meta2d.fitSizeView();
      } else {
        meta2d.fitView();
      }
      meta2d.resize();
    }
    return () => {
      meta2d && meta2d.off('*', onMessage);
    };
  }, [meta2d]);

  const _handleOp = (tKey: string) => {
    switch (tKey) {
      case 'back':
        history.push('/');
        break;
      case 'centerView':
        meta2d.centerView();
        break;
      case 'fitView':
        meta2d.fitView();
        break;
      case 'fitSizeView':
        meta2d.fitSizeView();
        break;
      case 'fitTemplateView':
        meta2d.fitTemplateView();
        break;
      default:
        break;
    }
    savePreviewData(meta2d.store.data);
    meta2d.resize();
  };

  return (
    <main
      className={styles.main}
      id="meta2d"
      data-isscreen={meta2d?.isScreen()}
      data-isPreview={isPreView}
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
      {isPreView && showReturnButton && isLoad && (
        <div className={styles.buttons}>
          {PreviewButton(meta2d?.isScreen() ?? false).map((item) => {
            return (
              <Button
                key={item.toolKey}
                onClick={() => _handleOp(item.toolKey)}
              >
                {item.name}
              </Button>
            );
          })}
        </div>
      )}
    </main>
  );
};

export { useMeta } from './context';
