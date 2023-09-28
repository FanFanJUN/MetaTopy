import { activityDiagram } from '@meta2d/activity-diagram';
import {
  register as registerEcharts,
  registerHighcharts,
  registerLightningChart,
} from '@meta2d/chart-diagram';
import { classPens } from '@meta2d/class-diagram';
import { Meta2d } from '@meta2d/core';
import { flowPens } from '@meta2d/flow-diagram';
import { formPath2DPens, formPens } from '@meta2d/form-diagram';
import { chartsPens } from '@meta2d/le5le-charts';
import { sequencePens, sequencePensbyCtx } from '@meta2d/sequence-diagram';
import { useDeepCompareEffect, useUpdate } from 'ahooks';
import { Button } from 'antd';
import { isEmpty, isNil } from 'lodash';
import { useEffect, useState } from 'react';
import { RightClick } from './components';
import { previewData } from './components/Header/helper';
import { containerDragResolve } from './components/LeftMaterial/crossDrag';
import { clearNodes } from './components/plugs/registerNode';
import type { IMeta } from './context';
import {
  PreviewButton,
  preConf,
  registerCustomCanvasDraw,
  registerCustomDomDraw,
  setFunMeta2D,
} from './hepler';
import styles from './index.less';

const options = {
  background: '#1e2430',
  rule: true,
  color: '#278df8',
  locked: 0,
  hoverAnchorColor: '#FF4101',
  rotateCursor: '/other/rotate.cur',
};

let metaTopology = null;
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
  // @ts-ignore
  const [meta2d, setState] = useState<IMeta>(null);
  const isPreView = pageType === 'preview';
  useEffect(() => {
    if (metaTopology) return;
    // @ts-ignore
    metaTopology = new Meta2d('meta2d', {
      ...options,
      ...(isPreView ? preConf : {}),
      ...mateConf,
    });
    // @ts-ignore
    setFunMeta2D(metaTopology);
    onComplete && onComplete(metaTopology);
    // @ts-ignore
    setState(metaTopology);
    setIsLoad(true);
  }, []);

  useDeepCompareEffect(() => {
    if (meta2d) {
      // 组件注册
      meta2d.registerCanvasDraw(chartsPens());
      meta2d.register(activityDiagram());
      meta2d.register(classPens());
      meta2d.register(sequencePens());
      meta2d.registerCanvasDraw(sequencePensbyCtx());
      meta2d.registerCanvasDraw(formPens());
      meta2d.register(formPath2DPens()); //版本>=1.0.9
      // 其他注册组件
      registerCustomCanvasDraw(meta2d);
      registerCustomDomDraw(meta2d);
      meta2d.register(flowPens());
      registerEcharts();
      registerHighcharts();
      registerLightningChart();
      meta2d.on('*', onMessage); // 监听所有事件
      setFunMeta2D(meta2d, { isPreView });
      const preData = JSON.parse(previewData) || {};
      // const pens = preData?.pens || [];
      /*  pens.forEach((item) => {
        item.locked = isPreView ? 2 : 0;
        item.disableAnchor = isPreView ? true : false;
        item.disableInput = isPreView ? true : false;
      }); */
      if (preData && !isEmpty(preData)) {
        meta2d.clear();
        // @ts-ignore
        meta2d.open({ ...preData }, true);
        update();
      }
      // @ts-ignore
      if (isPreView) {
        if (
          preData?.data?.isScreen ||
          (!isNil(meta2d.store.data?.height) &&
            !isNil(meta2d.store.data?.width))
        ) {
          meta2d.setBackgroundColor(meta2d.store.data.background || '#1e2430');
        }
        meta2d.lock(1);
        meta2d.setRule({ rule: false });
      } else {
        meta2d.lock(0);
      }
      // let data: any = localStorage.getItem('meta2d') || '{}';
      if (meta2d.isScreen()) {
        meta2d.fitSizeView();
      } else {
        meta2d.fitView();
      }
      meta2d.resize();
    }
    return () => {
      metaTopology = null;
      clearNodes();
      meta2d && meta2d.off('*', onMessage);
    };
  }, [isLoad]);

  const _handleOp = (tKey: string) => {
    switch (tKey) {
      case 'back':
        // history.push('/');
        history.back();
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
                ? meta2d.store.data.background || '#1e2430'
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
