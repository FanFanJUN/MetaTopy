export const icons_common = [
  {
    key: 't-text',
    title: '文本',
    fontFamily: 't-icon',
    data: {
      name: 'text',
      text: '文本',
      width: 100,
      height: 20,
    },
  },
  {
    key: 't-line',
    title: '直线',
    fontFamily: 't-icon',
    data: {
      name: 'line',
      lineName: 'line',
      dash: 0,
      lineWidth: 2,
      width: 200,
      height: 0,
      lineHeight: 1.5,
      rotate: 0,
      length: 200,
      bkType: 0,
      type: 1,
      anchors: [
        {
          x: 1,
          y: 0,
        },
        {
          x: 0,
          y: 1,
        },
      ],
    },
  },
  {
    key: 't-line',
    title: '直线',
    fontFamily: 't-icon',
    data: {
      name: 'beeline',
      width: 200,
      height: 10,
      x: 100,
      y: 100,
    },
  },
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
  {
    key: 't-02',
    title: 'iframe',
    fontFamily: 't-icon',
    data: {
      name: 'iframe',
      width: 800,
      height: 400,
      iframe: 'https://ditu.amap.com/',
      externElement: true,
    },
  },
  {
    key: 'icon-jian_sekuai',
    title: '区域块',
    fontFamily: 'meta',
    data: {
      name: 'rectangle',
      width: 80,
      height: 20,
      lineHeight: 1.5,
      lineWidth: 0,
      background: 'green',
      borderRadius: 20,
    },
  },
];

export const icons_basic = [
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

export const icons_form = [
  {
    key: 't-biaoge',
    title: '表格',
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
    key: 't-biaoge',
    title: '表格2',
    data: {
      activeColor: '#278df8',
      bordered: false,
      children: [],
      colPos: [
        80.66223842652893, 161.32447685305786, 241.9867152795868,
        322.6489537061157,
      ],
      colWidth: 90,
      color: '#bdc7db',
      dash: 0,
      data: [
        ['序号', '时间', '事件内容', '处理状态'],
        ['1', '2023/07/10', '设备A告警', '已完成'],
        [
          '2',
          '2023/07/10',
          '设备B告警',
          {
            text: '处理中',
            textColor: '#faad14',
          },
        ],
        ['3', '2023/07/09', '设备告警', '已完成'],
        ['4', '2023/07/08', '设备告警', '已完成'],
        [
          '5',
          '2023/07/08',
          '事件内容',
          {
            text: '待处理',
            textColor: '#f50000',
          },
        ],
        ['6', '2023/07/07', '设备告警', '已完成'],
        ['7', '2023/07/07', '设备告警', '已完成'],
        [
          '8',
          '2023/07/06',
          '事件内容',
          {
            text: '待处理',
            textColor: '#f50000',
          },
        ],
        ['9', '2023/07/06', '设备告警', '已完成'],
        ['10', '2023/07/06', '设备告警', '已完成'],
        ['11', '2023/07/06', '事件内容', '已完成'],
        ['12', '2023/07/05', '事件内容', '已完成'],
        ['13', '2023/07/05', '事件内容', '已完成'],
        ['14', '2023/07/04', '事件内容', '已完成'],
        ['15', '2023/07/03', '事件内容', '已完成'],
      ],
      disableAnchor: true,
      fontSize: 12,
      globalAlpha: 1,
      hLine: false,
      height: 200,
      hoverColor: 'rgba(39,141,248,0.50)',
      isFirstTime: false,
      lineHeight: 1.5,
      lineWidth: 1,
      name: 'table2',
      props: {
        custom: [
          {
            key: 'stripe',
            label: '显示斑马纹',
            type: 'bool',
          },
          {
            key: 'stripeColor',
            label: '斑马纹颜色',
            type: 'color',
          },
          {
            key: 'bordered',
            label: '外边框',
            type: 'bool',
          },
          {
            key: 'hLine',
            label: '水平线',
            type: 'bool',
          },
          {
            key: 'vLine',
            label: '垂直线',
            type: 'bool',
          },
          {
            key: 'hasHeader',
            label: '有无头部',
            type: 'bool',
          },
          {
            key: 'data',
            label: '数据',
            type: 'code',
          },
          {
            key: 'styles',
            label: '样式',
            type: 'code',
          },
        ],
      },
      rotate: 0,
      rowHeight: 32,
      rowPos: [
        28.679906996099177, 57.359813992198355, 86.03972098829753,
        114.71962798439671, 143.3995349804959, 172.0794419765951,
        200.75934897269428, 229.43925596879347, 258.11916296489267,
        286.79906996099186, 315.47897695709105, 344.15888395319024,
        372.83879094928943, 401.5186979453886, 430.1986049414878,
        458.878511937587,
      ],
      shadow: false,
      stripe: true,
      stripeColor: '#407FFF1F',
      styles: [
        {
          row: 0,
          textColor: '#ffffff66',
        },
        {
          col: 3,
          pens: [
            {
              disableAnchor: true,
              fontSize: 0.6,
              height: 20,
              lineWidth: 0,
              name: 'rectangle',
              width: 56,
            },
          ],
        },
      ],
      tableHeight: 458.878511937587,
      tableWidth: 322.6489537061157,
      textColor: '#FFFFFF',
      timer: 4658,
      vLine: false,
      width: 700,
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
      width: 200,
      height: 200,
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
    key: 't-07',
    title: '时钟',
    data: {
      clockInterval: 1043,
      color: '#1890ff',
      disableAnchor: true,
      max: 12,
      min: 0,
      name: 'gauge',
      endAngle: -270,
      startAngle: 90,
      splitNumber: 12,
      width: 200,
      height: 200,
      hourvalue: 11.649722222222222,
      minutevalue: 38.983333333333334,
      secondvalue: 59,
      background: '#3A3A3A',
      isClock: true,
    },
  },
];

export const chart_gauge = [
  {
    key: 'icon-gongyezujian-yibiaopan',
    title: '基础仪表盘',
    data: {
      name: 'echarts',
      width: 200,
      height: 200,
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
        replaceMode: 1,
        theme: 'le-dark',
      },
    },
  },
  {
    key: 'icon-gongyezujian-yibiaopan',
    title: '圆盘仪表盘',
    data: {
      name: 'echarts',
      externElement: true,
      width: 200,
      height: 200,
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
                  value: 68,
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
    key: 'icon-yibiaopan1',
    title: '进度仪表盘',
    data: {
      name: 'echarts',
      externElement: true,
      width: 200,
      height: 200,
      disableAnchor: true,
      echarts: {
        option: {
          fontSize: 10,
          series: [
            {
              name: '最外部环',
              type: 'gauge',
              radius: '96%',
              splitNumber: 10,
              axisLine: {
                lineStyle: {
                  color: [[1, '#33507A']],
                  width: 8,
                },
              },
              axisTick: {
                distance: 8,
                splitNumber: 10,
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
                show: false,
                fontSize: 16,
              },
              title: {
                show: false,
              },
              data: [],
              pointer: {
                show: false,
              },
            },
            {
              name: '仪表盘',
              type: 'gauge',
              radius: '70%',
              z: 4,
              axisLine: {
                lineStyle: {
                  color: [[1, 'rgba(0,0,0,0)']],
                  width: 20,
                },
              },
              axisLabel: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                show: false,
              },
              itemStyle: {
                color: 'rgba(0,191,194,0.5)',
              },
              progress: {
                width: 20,
                show: true,
              },
              detail: {
                offsetCenter: [0, 50],
                textStyle: {
                  padding: [0, 0, 0, 0],
                  fontSize: 30,
                  color: '#468EFD',
                },
              },
              data: [
                {
                  value: 47,
                },
              ],
              pointer: {
                width: 3,
                itemStyle: {
                  borderWidth: 0,
                },
              },
            },
          ],
        },
        replaceMode: 1,
        theme: 'le-dark',
      },
    },
  },
];

export const brainMap = [
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
];
