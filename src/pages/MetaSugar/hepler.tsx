import type { Pen } from '@meta2d/core';
import _, { isNil } from 'lodash';
import registerNode from './components/plugs/registerNode';
import {
  AntdButton,
  BatteryCanvas,
  Beeline,
  Calendar,
  List,
  Swiperline,
  Thermometer,
  WaterMeter,
  WaterTank,
} from './components/registerComp';
import type { IMeta } from './context';

/**
 * meta2d 拓展方法和属性
 * @param meta2d
 */
export const setFunMeta2D = (meta2d: IMeta, values: any) => {
  meta2d.isPreView = values?.isPreView ?? false;
  meta2d.isEmptyData = () => {
    return _.isEmpty(meta2d.data().pens);
  };
  meta2d.isScreen = () => {
    return (
      meta2d.store.data?.isScreen ||
      (!isNil(meta2d.store.data?.height) && !isNil(meta2d.store.data?.width))
    );
  };
};

export const preConf = {
  rule: false,
  disableScale: false,
  disableTranslate: false,
};

const CommonButton = [
  {
    name: '返回',
    toolKey: 'back',
  },
  {
    name: '居中显示(centerView)',
    toolKey: 'centerView',
  },
];

export const PreviewButton = (isTemp: boolean) => {
  if (isTemp) {
    return [
      ...CommonButton,
      {
        name: '大屏自适应屏幕显示(fitSizeView)',
        toolKey: 'fitSizeView',
      },
    ];
  }
  return [
    ...CommonButton,
    {
      name: '自适应屏幕显示(fitView)',
      toolKey: 'fitView',
    },

    /* {
      name: '自适应屏幕显示(fitSizeView)',
      toolKey: 'fitSizeView',
    }, */
    // {
    //   name: '大屏自适应屏幕显示(fitTemplateView)',
    //   toolKey: 'fitTemplateView',
    // },
  ];
};

export async function onWaitPromise(time = 500) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
}

/**
 * @description 其他注册组件 name 组件在画布中的名称 唯一
 * @param meta2d
 */
export const registerCustomCanvasDraw = (meta2d: IMeta) => {
  meta2d.registerCanvasDraw({
    beeline: Beeline,
    thermometer: Thermometer,
    calendar: Calendar,
    list: List,
    swiperline: Swiperline,
    watermeter: WaterMeter,
    waterTank: WaterTank,
    battery: (ctx: CanvasRenderingContext2D, pen: Pen) =>
      BatteryCanvas(ctx, pen, meta2d),
  });
};

export const registerCustomDomDraw = (meta2d: IMeta) => {
  meta2d.register({
    antdButton: registerNode(AntdButton, meta2d),
  });
};
