import {
  brainMap,
  chart_gauge,
  icons_basic,
  icons_chart,
  icons_common,
  icons_form,
  other_graphics,
} from './data';
import { chart_pie } from './graphics/chart_pie';
import { LTDX_ICON } from './graphics/ltdx';
import { SGCC_ICON } from './graphics/sgcc';
import { time_graphics } from './graphics/time';

export const TAB_LIST = [
  {
    name: '图元',
    key: 'graphics',
    icon: 't-icon-control-platform',
    list: [
      {
        name: '常用图形',
        key: 'commonGraphics',
        list: icons_common,
        fontFamily: 'iconfont',
        expand: true,
      },
      {
        name: '基本图形',
        key: 'basicGraphics',
        list: icons_basic,
        fontFamily: 't-icon',
        expand: true,
      },
      {
        name: '脑图',
        key: 'brainMap',
        list: brainMap,
        fontFamily: 't-icon',
        expand: true,
      },
      {
        name: '表单',
        key: 'form',
        list: icons_form,
        fontFamily: 't-icon',
        expand: true,
      },
      {
        name: '国家电网图标',
        key: 'sgcc',
        list: SGCC_ICON,
        fontFamily: 'sgcc',
      },
      {
        name: '电气工厂常用',
        key: 'ltdx',
        list: LTDX_ICON,
        fontFamily: 'ltdx',
      },
    ],
  },
  {
    name: '图表',
    key: 'chart',
    icon: 't-icon-chart',
    list: [
      {
        name: '图表',
        key: 'chart',
        list: icons_chart,
        fontFamily: 't-icon',
        expand: true,
      },
      {
        name: '仪表盘',
        key: 'chart_gauge',
        list: chart_gauge,
        expand: true,
        fontFamily: 'meta',
      },
      {
        name: '饼环图',
        key: 'chart_pie',
        list: chart_pie,
        expand: true,
        fontFamily: 'meta',
      },
    ],
  },
  {
    name: '控件',
    key: 'control',
    icon: 't-icon-relativity',
    list: [
      {
        name: '时间',
        key: 'time',
        list: time_graphics,
        fontFamily: 'meta',
        expand: true,
      },
      {
        name: '其他',
        key: 'other',
        list: other_graphics,
        fontFamily: 'meta',
        expand: true,
      },
    ],
  },
];
