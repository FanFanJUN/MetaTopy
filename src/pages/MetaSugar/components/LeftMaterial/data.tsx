import { LTDX_ICON } from './graphics/ltdx';
import { SGCC_ICON } from './graphics/sgcc';

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
    key: 't-rect',
    title: '正方形',
    data: {
      name: 'square',
      text: '正方形',
      width: 100,
      height: 100,
    },
  },
  {
    key: 't-rectangle',
    title: '圆角矩形',
    data: {
      name: 'rectangle',
      text: '圆角矩形',
      width: 200,
      height: 50,
      borderRadius: 0.1,
    },
  },
  {
    key: 't-circle',
    title: '圆',
    data: {
      name: 'circle',
      text: '圆',
      width: 100,
      height: 100,
    },
  },
  {
    key: 't-triangle',
    title: '三角形',
    data: {
      name: 'triangle',
      text: '三角形',
      width: 100,
      height: 100,
    },
  },
  {
    key: 't-diamond',
    title: '菱形',
    data: {
      name: 'triangle',
      text: '菱形',
      width: 100,
      height: 100,
    },
  },
  {
    key: 't-pentagon',
    title: '五边形',
    data: {
      name: 'pentagon',
      text: '五边形',
      width: 100,
      height: 100,
    },
  },
  {
    key: 't-hexagon',
    title: '六边形',
    data: {
      name: 'hexagon',
      text: '六边形',
      width: 100,
      height: 100,
    },
  },
  {
    key: 't-pentagram',
    title: '五角星',
    data: {
      name: 'pentagram',
      text: '五角星',
      width: 100,
      height: 100,
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
  {
    key: 't-twoway-arrow',
    title: '双向箭头',
    data: {
      name: 'twowayArrow',
      text: '双向箭头',
      width: 150,
      height: 60,
    },
  },
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
];

const icons_form = [
  {
    key: 't-biaoge',
    title: '文本',
    data: {
      name: 'table2',
      width: 0,
      height: 0,
      disableAnchor: true,
      colWidth: 150,
      rowHeight: 40,
      data: [
        ['设备 ID', '设备名称', '数据协议', '状态', '操作'],
        ['1', '200', 'MQTT', '正在运行', {}],
        ['2', '湿度传感器', 'MQTT', '正在运行', {}],
        ['3', '物联网设备', 'MQTT', '正在运行', {}],
        ['4', '物联网设备/智能家居/智慧城市', 'MQTT', '正在运行', {}],
      ],
      styles: [
        {
          row: 1,
          col: 1,
          color: '#ff0000',
          background: '#ffff00',
          wheres: [
            //触发条件 成立后才允许配置样式
            {
              comparison: '<=',
              value: '123',
            },
          ],
        },
        {
          row: 0,
          height: 60,
        },
        {
          col: 4,
          width: 200, //为该列设置额外的节点
          pens: [
            {
              name: 'rectangle',
              width: 50,
              height: 20,
              text: '编辑',
              fontSize: 0.6,
              disableAnchor: true,
              activeBackground: '#40a9ff',
              activeColor: '#40a9ff',
              background: '#1890ff',
              color: '#1890ff',
              hoverBackground: '#40a9ff',
              hoverColor: '#40a9ff',
              textColor: '#ffffff',
              hoverTextColor: '#ffffff',
              activeTextColor: '#ffffff',
              events: [
                {
                  action: 5,
                  name: 'click',
                  value: 'alert("点击了编辑")',
                },
              ],
            },
            {
              name: 'rectangle',
              width: 80,
              height: 20,
              text: '实时数据',
              fontSize: 0.6,
              disableAnchor: true,
              activeBackground: '#40a9ff',
              activeColor: '#40a9ff',
              background: '#1890ff',
              color: '#1890ff',
              hoverBackground: '#40a9ff',
              hoverColor: '#40a9ff',
              textColor: '#ffffff',
              hoverTextColor: '#ffffff',
              activeTextColor: '#ffffff',
              events: [
                {
                  action: 5,
                  name: 'click',
                  value: 'alert("点击了实时数据")',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    key: 't-xuanzeqi',
    title: '复选框',
    data: {
      name: 'checkbox',
      width: 30,
      height: 30,
      checked: true,
      // isForbidden: true,
      value: '选项一',
      textColor: '#FFFFFF',
    },
  },
  {
    key: 't-danxuankuang',
    title: '单选框',
    data: {
      name: 'radio',
      width: 150,
      height: 100,
      direction: 'vertical',
      checked: '选项二',
      textColor: '#ffffff',
      options: [
        { text: '选项一', background: '#ff0000' },
        { text: '选项二', background: '#00ff00' },
        { text: '选项三', background: '#0000ff', isForbidden: true },
      ],
    },
  },
  {
    key: 't-kaiguan',
    title: '开关',
    data: {
      name: 'switch',
      height: 30,
      width: 60,
      checked: false,
      offColor: '#BFBFBF',
      onColor: '#1890ff',
      disableOffColor: '#E5E5E5',
      disableOnColor: '#A3D3FF',
    },
  },
  {
    key: 't-jindutiao',
    title: '进度条',
    data: {
      name: 'slider',
      width: 300,
      height: 30,
      value: 10,
      textWidth: 50,
      barHeight: 4,
      min: 0,
      max: 100,
      color: '#1890ff',
      background: '#D4D6D9',
      textColor: '#ffffff',
      unit: '%',
    },
  },
  {
    key: 't-anniu',
    title: '按钮',
    data: {
      name: 'rectangle',
      width: 80,
      height: 30,
      borderRadius: 0.2,
      text: '按钮',
      background: '#1890ff',
      color: '#1890ff',
      textColor: '#ffffff',
      activeBackground: '#40a9ff', //选中
      activeColor: '#40a9ff',
      activeTextColor: '#ffffff',
      hoverBackground: '#40a9ff', //鼠标经过
      hoverColor: '#40a9ff',
      hoverTextColor: '#ffffff',
    },
  },
  {
    key: 't-shurukuang',
    title: '输入框',
    data: {
      height: 50,
      width: 200,
      input: true,
      name: 'rectangle',
      borderRadius: 0.05,
      ellipsis: true,
      text: '输入数据',
      textAlign: 'left',
      color: '#D9D9D9FF',
      textColor: '#000000FF',
      hoverTextColor: '#000000FF',
      activeTextColor: '#000000FF',
      textLeft: 10,
    },
  },
  {
    key: 't-xuanzeqi',
    title: '选择器2',
    data: {
      height: 50,
      width: 200,
      name: 'rectangle',
      borderRadius: 0.05,
      ellipsis: true,
      text: '选项1',
      textAlign: 'left',
      color: '#D9D9D9FF',
      textColor: '#000000FF',
      hoverTextColor: '#000000FF',
      activeTextColor: '#000000FF',
      textLeft: 10,
      // dropdownList: ["选项1", "选项2", "选项3"],
      dropdownList: [
        { text: '选项1', background: '#ff0000' },
        { text: '选项2', background: '#00ff00' },
        { text: '选项3', background: '#0000ff' },
      ],
    },
  },
];

export const icons_chart = [
  {
    key: 't-line-chart',
    title: '折线图',
    data: {
      name: 'lineChart',
      width: 400,
      height: 200,
      chartsColor: [
        '#1890ff',
        '#2FC25B',
        '#FACC14',
        '#c23531',
        '#2f4554',
        '#61a0a8',
        '#d48265',
      ],
      xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      smooth: false,
      data: [
        [1820, 1932, 1901, 1934, 1990, 1830, 1920],
        [1710, 1932, 1901, 1834, 1700, 1830, 1720],
      ],
    },
  },
  {
    key: 't-bar-chart',
    title: '柱状图',
    data: {
      name: 'histogram',
      width: 400,
      height: 200,
      disableAnchor: true,
      specialProp: 'charts',
      chartsColor: [
        '#1890ff',
        '#2FC25B',
        '#FACC14',
        '#c23531',
        '#2f4554',
        '#61a0a8',
        '#d48265',
      ],
      xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [
        [120, 200, 150, 80, 70, 110, 130],
        [140, 250, 150, 80, 60, 10, 30],
        [40, 50, 180, 210, 60, 70, 30],
      ],
    },
  },
  {
    key: 't-pie-chart',
    title: '饼图',
    data: {
      name: 'pieChart',
      width: 400,
      height: 200,
      chartsColor: [
        '#1890ff',
        '#36CBCB',
        '#2FC25B',
        '#FACC14',
        '#F2637B',
        '#fc8452',
        '#9a60b4',
        '#ea7ccc',
      ],
      data: [
        [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
        [
          { value: 1548, name: 'Search' },
          { value: 775, name: 'Direct' },
          { value: 679, name: 'Market' },
        ],
      ],
      chartsRadius: [
        ['60%', '70%'],
        ['0%', '50%'],
      ],
    },
  },
  {
    key: 't-dashboard-chart',
    title: '仪表盘',
    data: {
      name: 'gauge',
      width: 400,
      height: 400,
      disableAnchor: true,
      value: 90,
      unit: 'm/s',
      axisLine: [
        [0.3, '#67e0e3'],
        [0.7, '#37a2da'],
        [1, '#fd666d'],
      ],
      animateCycle: 1,
      keepAnimateState: 0,
    },
  },
  {
    key: 't-bar-chart',
    title: '柱状图-echarts格式',
    data: {
      name: 'histogram',
      width: 400,
      height: 200,
      disableAnchor: true,
      echarts: {
        option: {
          color: ['#1890ff'],
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
            },
          ],
        },
      },
    },
  },
  {
    key: 't-bar-chart',
    title: '柱状图-echarts格式',
    data: {
      name: 'echarts',
      width: 400,
      height: 200,
      echarts: {
        option: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
            },
          ],
        },
      },
    },
  },
];

export const ICON_TAB = [
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
  {
    name: '表单',
    key: 'form',
    list: icons_form,
    fontFamily: 't-icon',
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
];

export const chart_gauge = [
  {
    key: 'l-dashboard-chart',
    useSvg: true,
    title: '仪表盘',
    data: {
      name: 'echarts',
      externElement: true,
      width: 265,
      height: 235,
      disableAnchor: true,
      echarts: {
        option: {
          fontSize: 10,
          series: [
            {
              name: '最外部进度条',
              type: 'gauge',
              radius: '96%',
              splitNumber: 10,
              axisLine: {
                lineStyle: {
                  color: [[1, 'rgba(107,157,215,.25)']],
                  width: 8,
                },
              },
              progress: {
                show: true,
                width: 8,
              },
              axisTick: {
                distance: 8,
                splitNumber: 5,
                lineStyle: {
                  color: '#42E5FB',
                  width: 1,
                },
                length: 8,
              },
              splitLine: {
                distance: 8,
                length: 15,
                lineStyle: {
                  width: 2,
                  color: '#42E5FB',
                },
              },
              axisLabel: {
                show: false,
                fontSize: 12,
              },
              itemStyle: {
                show: false,
              },
              detail: {
                color: '#ACCFFF',
                fontSize: 16,
                offsetCenter: [0, 50],
              },
              data: [
                {
                  value: 50,
                },
              ],
              pointer: {
                length: '40%',
                radius: '20%',
                width: 4,
                itemStyle: {
                  color: '#45CAED',
                  borderWidth: 0,
                },
              },
            },
            {
              name: '指针上的圆',
              type: 'pie',
              z: 5,
              hoverAnimation: false,
              legendHoverLink: false,
              radius: ['0%', '6%'],
              center: ['50%', '50%'],
              label: {
                normal: {
                  show: false,
                },
              },
              labelLine: {
                normal: {
                  show: false,
                },
              },
              data: [
                {
                  value: 10,
                  itemStyle: {
                    normal: {
                      color: '#45CAED',
                      borderWidth: 0,
                    },
                  },
                },
              ],
            },
            {
              name: '外层透明圆',
              type: 'pie',
              radius: '60%',
              startAngle: 0,
              endAngle: 360,
              hoverAnimation: false,
              center: ['50%', '50%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
              data: [
                {
                  value: 1,
                },
              ],
              itemStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#17A1FF',
                      },
                      {
                        offset: 1,
                        color: 'rgba(17, 90, 233, 0.16)',
                      },
                    ],
                  },
                  opacity: 0.2,
                },
              },
            },
            {
              name: '内圆',
              type: 'pie',
              radius: '48%',
              center: ['50%', '50%'],
              startAngle: 0,
              endAngle: 360,
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
              data: [
                {
                  value: 1,
                },
              ],
              itemStyle: {
                color: {
                  colorStops: [
                    {
                      offset: 0,
                      color: '#23A6FF',
                    },
                    {
                      offset: 1,
                      color: 'rgba(17, 90, 233, 0.21)  ',
                    },
                  ],
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  type: 'linear',
                  global: false,
                },
                opacity: 0.5,
                borderWidth: 0,
              },
            },
          ],
        },
        replaceMode: 1,
        theme: 'le-dark',
      },
    },
  },
  {
    key: 'l-dashboard-chart',
    useSvg: true,
    title: '仪表盘',
    data: {
      name: 'echarts',
      width: 265,
      height: 235,
      disableAnchor: true,
      echarts: {
        option: {
          fontSize: 10,
          series: [
            {
              type: 'gauge',
              radius: '100%',
              axisLine: {
                roundCap: true,
                lineStyle: {
                  color: [[1, 'rgba(107,157,215,.25)']],
                  width: 8,
                },
              },
              axisTick: {
                distance: 4,
                length: 8,
                lineStyle: {
                  color: '#6B9DD7',
                },
              },
              splitLine: {
                distance: 4,
                length: 10,
                lineStyle: {
                  width: 2,
                  color: 'rgb(107,157,215)',
                },
              },
              detail: {
                color: '#0c56eb',
                fontSize: 16,
              },
              progress: {
                show: true,
                roundCap: true,
                width: 8,
              },
              axisLabel: {
                color: '#ddd',
                fontSize: 12,
                distance: 15,
              },
              itemStyle: {
                color: '#0c56eb',
              },
              pointer: {
                length: 100,
                width: 6,
                itemStyle: {
                  borderWidth: 0,
                },
              },
              data: [
                {
                  value: 68,
                },
              ],
            },
          ],
        },
        // replaceMode: 1,
        // theme: 'le-dark',
      },
    },
  },
];
