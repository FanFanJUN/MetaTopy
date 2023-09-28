export const other_graphics = [
  {
    key: 'icon-wenduji',
    title: '温度计',
    data: {
      name: 'thermometer',
      width: 32,
      height: 128,
      background: '#FF5D3C33',
      bkType: 0,
      activeBacground: '#FF5D3C',
      color: '#4583FF',
      dash: 0,
      disableAnchor: true,
      fontSize: 12,
      max: 20,
      min: -20,
      textColor: '#FFFFFFB3',
      value: -10,
      form: [
        {
          key: 'value',
          name: '温度',
          type: 'number',
        },
        {
          key: 'min',
          name: '最小值',
          type: 'number',
        },
        {
          key: 'max',
          name: '最大值',
          type: 'number',
        },
      ],
    },
  },
  {
    key: 'icon-liebiao',
    title: '列表',
    data: {
      name: 'list',
      background: '#282E3B',
      width: 400,
      height: 200,
      textColor: '#FFFFFF66',
      globalAlpha: 1,
      headingColor: '#FFFFFFE6',
      headingSize: 16,
      dash: 0,
      hoverTextColor: '#FFFFFF66',
      shadow: false,
      data: [
        {
          title: '列表标题',
          description: '列表内容的描述性文字',
        },
        {
          title: '列表标题',
          description: '列表内容的描述性文字',
        },
        {
          title: '列表标题',
          description: '列表内容的描述性文字',
        },
      ],
      props: {
        custom: [
          {
            key: 'data',
            label: '数据',
            type: 'code',
          },
          {
            key: 'background',
            label: '背景颜色',
            type: 'color',
          },
          {
            key: 'headingSize',
            label: '标题大小',
            type: 'number',
          },
          {
            key: 'headingColor',
            label: '标题颜色',
            type: 'color',
          },
        ],
      },
    },
  },
  {
    key: 'icon-lunbo',
    title: '水平轮播',
    data: {
      name: 'swiperline',
      data: ['轮播第一次数据', '轮播第二次数据', '轮播第三次数据'],
      width: 180,
      height: 36,
      hiddenText: true,
      props: {
        custom: [
          {
            key: 'data',
            label: '数据',
            type: 'code',
          },
          {
            key: 'timeout',
            label: '轮播时间',
            type: 'number',
          },
        ],
      },
    },
  },
  {
    title: '垂直轮播',
    key: 'icon-lunboshezhi',
    data: {
      name: 'swiperline',
      width: 200,
      height: 24,
      direction: 'vertical',
      lineHeight: 2,
      data: ['轮播第一次数据', '轮播第二次数据', '轮播第三次数据'],
      hiddenText: true,
      props: {
        custom: [
          {
            key: 'data',
            label: '数据',
            type: 'code',
          },
          {
            key: 'timeout',
            label: '轮播时间',
            type: 'number',
          },
        ],
      },
    },
  },
  {
    title: '球形水位',
    key: 't-shuiliujianceqi',
    fontFamily: 't-icon',
    data: {
      name: 'watermeter',
      width: 128,
      height: 128,
      disableAnchor: !0,
      background: '#4583FF',
      value: 50,
      max: 70,
      min: 20,
      maxBackground: '#f5222d',
      minBackground: '#52c41a',
      scaleShow: !1,
    },
  },
  {
    title: '圆柱水位',
    key: 't-db',
    fontFamily: 't-icon',
    data: {
      name: 'waterTank',
      width: 128,
      height: 128,
      disableAnchor: !0,
      color: '#FFFFFF00',
      progress: 0.5,
      progressColor: '#4583FF',
    },
  },
  {
    title: '按钮',
    key: 'icon-anniu',
    fontFamily: 'meta',
    data: {
      name: 'antdButton',
      width: 70,
      height: 30,
      data: {},
      customAttribute: { type: 'danger', text: '按钮' },
      disableAnchor: true,
    },
  },
  {
    title: '电池',
    key: 'icon-dianchi',
    fontFamily: 'meta',
    data: {
      name: 'battery',
      width: 74,
      height: 108,
      disableAnchor: true,
      data: {
        value: 50,
        status: '放电',
      },
    },
  },
];
