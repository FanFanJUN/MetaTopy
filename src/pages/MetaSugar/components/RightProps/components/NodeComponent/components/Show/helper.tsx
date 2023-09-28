import { ReactComponent as S1 } from '@/assets/svg/lineStyle/1.svg';
import { ReactComponent as S2 } from '@/assets/svg/lineStyle/2.svg';
import { ReactComponent as S3 } from '@/assets/svg/lineStyle/3.svg';
import { ReactComponent as S4 } from '@/assets/svg/lineStyle/4.svg';

export const Show_List = [
  {
    name: '位置和大小',
    toolKey: 'basic',
    cList: [
      {
        name: 'X',
        toolKey: 'x',
        type: 'inputNumber',
        isLogic: true,
      },
      {
        name: 'Y',
        toolKey: 'y',
        type: 'inputNumber',
        isLogic: true,
      },
      {
        name: '宽',
        toolKey: 'width',
        type: 'inputNumber',
        isLogic: true,
      },
      {
        name: '高',
        toolKey: 'height',
        type: 'inputNumber',
        isLogic: true,
      },
      {
        name: '圆角',
        toolKey: 'borderRadius',
        type: 'inputNumber',
      },
      {
        name: '旋转',
        toolKey: 'rotate',
        type: 'inputNumber',
      },
      {
        name: '内边距(左)',
        toolKey: 'paddingLeft',
        type: 'inputNumber',
      },
      {
        name: '内边距(右)',
        toolKey: 'paddingRight',
        type: 'inputNumber',
      },
      {
        name: '内边距(上)',
        toolKey: 'paddingTop',
        type: 'inputNumber',
      },
      {
        name: '内边距(下)',
        toolKey: 'paddingBottom',
        type: 'inputNumber',
      },
      {
        name: '状态',
        toolKey: 'showChild',
        type: 'select',
        options: [{ value: undefined, label: '无' }],
        uiHidden: (value: any) => {
          return value?.name !== 'combine' || !value?.children?.length;
        },
      },
      {
        name: '进度',
        toolKey: 'progress',
        type: 'inputNumber',
        compConf: {
          max: 1,
          min: 0,
          step: 0.01,
        },
      },
      {
        name: '进度颜色',
        toolKey: 'progressColor',
        type: 'colorPicker',
      },
      { name: '垂直进度', toolKey: 'verticalProgress', type: 'switch' },
      { name: '水平翻转', toolKey: 'flipX', type: 'switch' },
      { name: '垂直翻转', toolKey: 'flipY', type: 'switch' },
    ],
  },
  {
    name: '样式',
    toolKey: 'style',
    cList: [
      {
        name: '线条样式',
        toolKey: 'dash',
        defaultValue: 0,
        type: 'select',
        options: [
          { value: 0, label: <S1 /> },
          { value: 1, label: <S2 /> },
          { value: 2, label: <S3 /> },
          { value: 3, label: <S4 /> },
        ],
      },
      {
        name: '线条颜色',
        toolKey: 'color',
        type: 'colorPicker',
      },
      {
        name: '线条宽度',
        toolKey: 'lineWidth',
        type: 'inputNumber',
      },
      {
        name: '背景颜色',
        toolKey: 'background',
        type: 'colorPicker',
      },
      {
        name: '选中背景颜色',
        toolKey: 'activeBackground',
        type: 'colorPicker',
      },
      {
        name: '透明度',
        toolKey: 'globalAlpha',
        type: 'inputNumber',
        compConf: {
          max: 1,
          min: 0,
          step: 0.1,
        },
      },
      {
        name: '鼠标经过颜色',
        toolKey: 'hoverColor',
        type: 'colorPicker',
      },
    ],
  },
  {
    name: '文字',
    toolKey: 'text',
    cList: [
      /* {
        name: '字体名',
        toolKey: 'fontFamily',
        type: 'select',
        options: map(FamilyList, (n) => ({ value: n, label: n })),
      }, */
      {
        name: '文本内容',
        toolKey: 'text',
        type: 'textArea',
      },
      {
        name: '字体大小',
        toolKey: 'fontSize',
        type: 'inputNumber',
      },
      {
        name: '字体颜色',
        toolKey: 'textColor',
        type: 'colorPicker',
      },
      {
        name: '隐藏文字',
        toolKey: 'hiddenText',
        type: 'switch',
      },
      {
        name: '保留小数',
        toolKey: 'keepDecimal',
        type: 'inputNumber',
      },
      {
        name: '下划线',
        toolKey: 'textDecoration',
        type: 'switch',
      },
      {
        name: '下划线颜色',
        toolKey: 'textDecorationColor',
        type: 'colorPicker',
      },
      {
        name: '下划线样式',
        toolKey: 'decorationDash',
        type: 'select',
        options: [
          { value: 0, label: <S1 /> },
          { value: 1, label: <S2 /> },
          { value: 2, label: <S3 /> },
          { value: 3, label: <S4 /> },
        ],
      },
      {
        name: '删除线',
        toolKey: 'textStrickout',
        type: 'switch',
      },
      {
        name: '删除线颜色',
        toolKey: 'textStrickoutColor',
        type: 'colorPicker',
      },
      {
        name: '删除线样式',
        toolKey: 'textStrickoutDashNum',
        type: 'select',
        options: [
          { value: 0, label: <S1 /> },
          { value: 1, label: <S2 /> },
          { value: 2, label: <S3 /> },
          { value: 3, label: <S4 /> },
        ],
      },
      {
        name: '水平对齐',
        toolKey: 'textAlign',
        type: 'select',
        options: [
          { value: 'left', label: '左对齐' },
          { value: 'center', label: '居中' },
          { value: 'right', label: '右对齐' },
        ],
      },
      {
        name: '垂直对齐',
        toolKey: 'textBaseline',
        type: 'select',
        options: [
          { value: 'top', label: '顶部对齐' },
          { value: 'middle', label: '居中' },
          { value: 'bottom', label: '底部对齐' },
        ],
      },
    ],
  },
  {
    name: '图片',
    toolKey: 'image',
    uiHidden: (value: any) => {
      return value.name !== 'image';
    },
    cList: [
      {
        name: '图片预览',
        toolKey: 'disableInput',
        type: 'imagePreview',
      },
      {
        name: '图片地址',
        toolKey: 'image',
        type: 'textArea',
      },
      {
        name: '下层',
        toolKey: 'isBottom',
        type: 'switch',
      },
    ],
  },
  {
    name: '禁止',
    toolKey: 'disable',
    cList: [
      {
        name: '禁止输入',
        toolKey: 'disableInput',
        type: 'switch',
      },
      {
        name: '禁用旋转',
        toolKey: 'disableRotate',
        type: 'switch',
      },
      {
        name: '禁用缩放',
        toolKey: 'disableSize',
        type: 'switch',
      },
      {
        name: '禁用锚点',
        toolKey: 'disableAnchor',
        type: 'switch',
      },
    ],
  },
];
