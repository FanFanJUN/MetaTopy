import { ICON_TAB, chart_gauge, icons_chart } from './data';

export const TAB_LIST = [
  {
    name: '图元',
    key: 'system',
    icon: 't-icon-control-platform',
    list: ICON_TAB,
  },
  {
    name: '图表',
    key: 'myComponent',
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
        fontFamily: 't-icon',
        expand: true,
      },
    ],
  },
];
