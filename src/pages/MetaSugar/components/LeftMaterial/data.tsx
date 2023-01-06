export const icons_common = [
  {
    key: 'icon-rect',
    title: '矩形',
    data: {
      name: 'rectangle',
      text: '矩形',
      width: 100,
      height: 100,
    },
  },
  {
    key: 'icon-circle',
    title: '圆形',
    data: {
      name: 'circle',
      text: '圆形',
      width: 100,
      height: 100,
    },
  },
  {
    key: 'icon-img',
    title: '图片',
    data: {
      name: 'image',
      width: 100,
      height: 100,
      image:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F016ba9554b952b000001bf72fa6574.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636344024&t=f977b8ad47acf62ee3579d594f32489a',
    },
  },
  {
    key: 'icon-video',
    title: '视频',
    data: {
      name: 'video',
      width: 100,
      height: 100,
      video: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      autoPlay: true,
    },
  },
  {
    key: 'icon-audio',
    title: '音频',
    data: {
      name: 'video',
      width: 100,
      height: 100,
      audio: 'https://down.ear0.com:3321/preview?soundid=37418&type=mp3',
      autoPlay: true,
    },
  },
];

const icons_basic = [
  {
    key: 't-text',
    title: '文本',
    data: {
      name: 'text',
      text: '文本',
      width: 100,
      height: 20,
    },
  },
  {
    key: 't-arrow-left',
    title: '左箭头',
    data: {
      name: 'leftArrow',
      text: '左箭头',
      width: 100,
      height: 50,
      lineHeight: 1.5,
      lineWidth: 1,
    },
  },
  {
    key: 't-arrow-right',
    title: '右箭头',
    data: {
      name: 'rightArrow',
      text: '左箭头',
      width: 100,
      height: 50,
      lineHeight: 1.5,
      lineWidth: 1,
    },
  },
];

export const ICON_TAB = [
  {
    name: '常用图形',
    key: 'commonGraphics',
    list: icons_common,
    fontFamily: 'iconfont',
  },
  {
    name: '基本图形',
    key: 'basicGraphics',
    list: icons_basic,
    fontFamily: 't-icon',
  },
  {
    name: '脑图',
    key: 'brainMap',
    list: [
      {
        key: 't-zhuti',
        title: '主题',
        data: {
          name: 'mindNode',
          text: '主题',
          width: 180,
          height: 45,
          borderRadius: 0.5,
          lineHeight: 1.5,
          lineWidth: 1,
        },
      },
      {
        key: 't-zizhuti',
        title: '子主题',
        data: {
          name: 'mindLine',
          text: '子主题',
          width: 144,
          height: 36,
          lineHeight: 1.5,
          lineWidth: 1,
        },
      },
    ],
    fontFamily: 't-icon',
  },
];
