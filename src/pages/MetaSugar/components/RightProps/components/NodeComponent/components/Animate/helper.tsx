export const SelectOptions = [
  {
    value: '',
    label: '无',
  },
  {
    value: 'upDown',
    label: '上下跳动',
    durationTime: 560,
    animate: [
      {
        duration: 100,
        y: 10,
      },
      {
        duration: 100,
        y: -10,
      },
      {
        duration: 200,
        y: -10,
      },
    ],
  },
  {
    value: 'leftRight',
    label: '左右跳动',
    durationTime: 560,
    animate: [
      {
        duration: 100,
        x: 10,
      },
      {
        duration: 100,
        x: -10,
      },
      {
        duration: 200,
        x: -10,
      },
    ],
  },
  {
    value: 'heart',
    label: '心跳',
    durationTime: 500,
    animate: [
      {
        duration: 0,
        scale: 0.99,
      },
      {
        duration: 200,
        scale: 1.03,
      },
      {
        duration: 400,
        scale: 0.99,
      },
    ],
  },
  {
    value: 'success',
    label: '成功',
    durationTime: 500,
    animate: [
      {
        duration: 100,
        background: '#52c41a',
      },
    ],
  },
  {
    value: 'warning',
    label: '警告',
    durationTime: 1100,
    animate: [
      {
        duration: 100,
        background: '#faad14',
      },
    ],
  },
  {
    value: 'error',
    label: '错误',
    durationTime: 100,
    animate: [
      {
        duration: 100,
        background: '#f5222d',
      },
    ],
  },
  {
    value: 'show',
    label: '炫耀',
    durationTime: 300,
    animate: [
      {
        duration: 100,
        rotate: 10,
      },
      {
        duration: 100,
        rotate: -10,
      },
      {
        duration: 100,
        rotate: 0,
      },
    ],
  },
  {
    value: 'rotate',
    label: '旋转',
    durationTime: 1000,
    animate: [
      {
        duration: 1000,
        rotate: 90,
      },
      {
        duration: 2000,
        rotate: 180,
      },
      {
        duration: 3000,
        rotate: 0,
      },
    ],
  },
];

export const Show_List = [
  {
    name: '动画',
    toolKey: 'animate',
    cList: [
      {
        name: '时长',
        toolKey: 'showDuration',
        type: 'inputNumber',
      },
      {
        name: '动画效果',
        toolKey: 'animateType',
        type: 'select',
        options: SelectOptions,
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
  },
  {
    name: '暂停',
    toolKey: 'pauseAnimate',
  },
  {
    name: '停止',
    toolKey: 'stopAnimate',
  },
];
