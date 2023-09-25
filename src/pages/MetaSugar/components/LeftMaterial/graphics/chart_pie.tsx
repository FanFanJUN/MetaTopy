export const chart_pie = [
  {
    key: 'icon-tubiao-bingtu',
    title: '饼图',
    data: {
      name: 'echarts',
      externElement: true,
      width: 400,
      height: 200,
      disableAnchor: true,
      realTimes: [
        {
          key: 'echarts.option.series.0.data.0.value',
          label: '2D',
          type: 'integer',
          enableMock: true,
          mock: '300-1000',
        },
        {
          key: 'echarts.option.series.0.data.1.value',
          label: '3D',
          type: 'integer',
          enableMock: true,
          mock: '300-1000',
        },
        {
          key: 'echarts.option.series.0.data.2.value',
          label: '大屏',
          type: 'integer',
          enableMock: true,
          mock: '300-1000',
        },
        {
          key: 'echarts.option.series.0.data.3.value',
          label: '物联网平台',
          type: 'integer',
          enableMock: true,
          mock: '300-1000',
        },
        {
          key: 'echarts.option.series.0.data.4.value',
          label: '图形库',
          type: 'integer',
          enableMock: true,
          mock: '300-1000',
        },
      ],
      echarts: {
        option: {
          tooltip: {
            trigger: 'item',
          },
          series: [
            {
              type: 'pie',
              radius: '50%',
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    fontSize: 12,
                    color: '#ffffff',
                  },
                },
              },
              labelLine: {
                length: 25,
                length2: 15,
              },
              data: [
                {
                  value: 507,
                  name: '2D',
                },
                {
                  value: 680,
                  name: '3D',
                },
                {
                  value: 386,
                  name: '大屏',
                },
                {
                  value: 556,
                  name: '物联网平台',
                },
                {
                  value: 886,
                  name: '图形库',
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
    key: 'icon-bingtu_xuanzhong',
    title: '环图',
    data: {
      name: 'echarts',
      externElement: true,
      width: 400,
      height: 200,
      disableAnchor: true,
      realTimes: [
        {
          key: 'echarts.option.series.0.data.0.value',
          label: '2D',
          type: 'integer',
          enableMock: true,
          mock: '300-1000',
        },
        {
          key: 'echarts.option.series.0.data.1.value',
          label: '3D',
          type: 'integer',
          enableMock: true,
          mock: '300-1000',
        },
        {
          key: 'echarts.option.series.0.data.2.value',
          label: '大屏',
          type: 'integer',
          enableMock: true,
          mock: '300-1000',
        },
        {
          key: 'echarts.option.series.0.data.3.value',
          label: '物联网平台',
          type: 'integer',
          enableMock: true,
          mock: '300-1000',
        },
        {
          key: 'echarts.option.series.0.data.4.value',
          label: '图形库',
          type: 'integer',
          enableMock: true,
          mock: '300-1000',
        },
      ],
      echarts: {
        option: {
          tooltip: {
            trigger: 'item',
          },
          series: [
            {
              type: 'pie',
              radius: ['50%', '70%'],
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    fontSize: 12,
                    color: '#ffffff',
                  },
                },
              },
              labelLine: {
                length: 25,
                length2: 15,
              },
              data: [
                {
                  value: 791,
                  name: '2D',
                },
                {
                  value: 579,
                  name: '3D',
                },
                {
                  value: 675,
                  name: '大屏',
                },
                {
                  value: 970,
                  name: '物联网平台',
                },
                {
                  value: 499,
                  name: '图形库',
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
    key: 'icon-icon_keshihua',
    title: '圆角环图',
    data: {
      name: 'echarts',
      externElement: true,
      width: 400,
      height: 200,
      disableAnchor: true,
      realTimes: [
        {
          key: 'echarts.option.series.0.data.0.value',
          label: '2D',
          type: 'integer',
          enableMock: true,
          mock: '300-1000',
        },
        {
          key: 'echarts.option.series.0.data.1.value',
          label: '3D',
          type: 'integer',
          enableMock: true,
          mock: '300-1000',
        },
        {
          key: 'echarts.option.series.0.data.2.value',
          label: '大屏',
          type: 'integer',
          enableMock: true,
          mock: '300-1000',
        },
        {
          key: 'echarts.option.series.0.data.3.value',
          label: '物联网平台',
          type: 'integer',
          enableMock: true,
          mock: '300-1000',
        },
        {
          key: 'echarts.option.series.0.data.4.value',
          label: '图形库',
          type: 'integer',
          enableMock: true,
          mock: '300-1000',
        },
      ],
      echarts: {
        option: {
          tooltip: {
            trigger: 'item',
          },
          series: [
            {
              type: 'pie',
              radius: ['50%', '70%'],
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    fontSize: 12,
                    color: '#ffffff',
                  },
                },
              },
              itemStyle: {
                borderRadius: 4,
                borderWidth: 1,
              },
              labelLine: {
                length: 25,
                length2: 15,
              },
              data: [
                {
                  value: 854,
                  name: '2D',
                },
                {
                  value: 778,
                  name: '3D',
                },
                {
                  value: 344,
                  name: '大屏',
                },
                {
                  value: 322,
                  name: '物联网平台',
                },
                {
                  value: 647,
                  name: '图形库',
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
];
