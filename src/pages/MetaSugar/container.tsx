import { activityDiagram } from '@meta2d/activity-diagram';
import {
  register as registerEcharts,
  registerHighcharts,
  registerLightningChart,
} from '@meta2d/chart-diagram';
import { classPens } from '@meta2d/class-diagram';
import { Meta2d } from '@meta2d/core';
import { flowPens } from '@meta2d/flow-diagram';
import { formPens } from '@meta2d/form-diagram';
import { chartsPens } from '@meta2d/le5le-charts';
import { sequencePens, sequencePensbyCtx } from '@meta2d/sequence-diagram';
import { useSetState, useUpdate } from 'ahooks';
import { Button } from 'antd';
import { isEmpty, isNil } from 'lodash';
import { useEffect, useState } from 'react';
import { history } from 'umi';
import { RightClick } from './components';
import { previewData, savePreviewData } from './components/Header/helper';
import { containerDragResolve } from './components/LeftMaterial/crossDrag';
import { IMeta } from './context';
import { PreviewButton, preConf, setFunMeta2D } from './hepler';
import styles from './index.less';

export const MainMeta = (props) => {
  const {
    mateConf = {},
    onComplete,
    onMessage,
    pageType,
    showReturnButton,
  } = props;
  const update = useUpdate();
  const [isLoad, setIsLoad] = useState(false);
  const [meta2d, setState] = useState<IMeta>(null);
  const [aState, setSAtate] = useSetState({
    tempBg: '', // 模板背景颜色
  });
  const isPreView = pageType === 'preview';
  useEffect(() => {
    // @ts-ignore
    const metaTopology = new Meta2d('meta2d');
    window.meta2d = metaTopology;
    setFunMeta2D(metaTopology);
    onComplete && onComplete(metaTopology);
    setState(metaTopology);
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
      meta2d.registerCanvasDraw(chartsPens());
      meta2d.register(activityDiagram());
      meta2d.register(classPens());
      meta2d.register(sequencePens());
      meta2d.registerCanvasDraw(sequencePensbyCtx());
      meta2d.registerCanvasDraw(formPens());
      meta2d.register(flowPens());
      registerEcharts();
      registerHighcharts();
      registerLightningChart();
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
        meta2d.clear();
        meta2d.open({ ...previewData, pens });
        update();
      }
      if (isPreView) {
        if (
          previewData?.data?.isScreen ||
          (!isNil(meta2d.store.data?.height) &&
            !isNil(meta2d.store.data?.width))
        ) {
          meta2d.setBackgroundColor('#1e2430');
        }
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
              background: meta2d?.isScreen()
                ? meta2d.store.data.background
                : '',
            }
          : meta2d?.isScreen()
          ? { background: '#181b24' }
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
