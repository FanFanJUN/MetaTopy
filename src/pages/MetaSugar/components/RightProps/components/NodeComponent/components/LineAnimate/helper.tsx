import { ReactComponent as S2 } from '@/assets/svg/lineStyle/2.svg';
import { ReactComponent as S3 } from '@/assets/svg/lineStyle/3.svg';
import { ReactComponent as S4 } from '@/assets/svg/lineStyle/4.svg';

import { ReactComponent as SvgPause } from '@/assets/svg/svg_pause.svg';
import { ReactComponent as SvgPlay } from '@/assets/svg/svg_play.svg';
import { ReactComponent as SvgStop } from '@/assets/svg/svg_stop.svg';

export const SelectOptions = [
  {
    value: 0,
    label: '水流',
  },
  {
    value: 1,
    label: '水珠流动',
  },
  {
    value: 2,
    label: '圆点',
  },
];

export const Show_List = [
  {
    name: '动画',
    toolKey: 'animate',
    cList: [
      {
        name: '动画效果',
        toolKey: 'lineAnimateType',
        type: 'select',
        options: SelectOptions,
      },
      {
        name: '圆点大小',
        toolKey: 'animateDotSize',
        type: 'inputNumber',
        options: SelectOptions,
        compConf: {
          min: 6,
          placeholder: '最小值6',
        },
      },
      {
        name: '动画线条',
        toolKey: 'animateDash',
        type: 'select',
        options: [
          {
            label: <S2 />,
            value: 0,
          },
          {
            label: <S3 />,
            value: 1,
          },
          {
            label: <S4 />,
            value: 2,
          },
        ],
      },
      {
        name: '动画线宽',
        toolKey: 'animateLineWidth',
        type: 'inputNumber',
      },
      {
        name: '动画颜色',
        toolKey: 'animateColor',
        type: 'colorPicker',
      },
      {
        name: '动画速度',
        toolKey: 'animateSpan',
        type: 'Slider',
      },
      {
        name: '反向流动',
        toolKey: 'animateReverse',
        type: 'switch',
      },
      {
        name: '循环次数',
        toolKey: 'animateCycle',
        type: 'inputNumber',
        compConf: {
          placeholder: '默认无限循环',
        },
      },
      { name: '自动播放', toolKey: 'autoPlay', type: 'switch' },
      { name: '保持动画状态', toolKey: 'keepAnimateState', type: 'switch' },
      { name: '线性播放', toolKey: 'linear', type: 'switch' },
    ],
  },
];

export const Buttons = [
  {
    name: '播放',
    toolKey: 'startAnimate',
    icon: <SvgPlay />,
  },
  {
    name: '暂停',
    toolKey: 'pauseAnimate',
    icon: <SvgPause />,
  },
  {
    name: '停止',
    toolKey: 'stopAnimate',
    icon: <SvgStop />,
  },
];
