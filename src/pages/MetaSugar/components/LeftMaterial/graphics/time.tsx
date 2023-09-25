export const time_graphics = [
  {
    key: 'icon-shijian',
    title: '时间',
    data: {
      name: 'time',
      timeFormat:
        '`${year}-${month}-${day} ${hours}:${minutes}:${seconds} 星期${week}`',
      fillZero: true,
      width: 218,
      height: 32,
      text: '2023-09-21 09:14:45 星期四',
      interval: 4166,
      lineWidth: 0,
      form: [
        {
          key: 'timeFormat',
          name: '显示格式',
          type: 'text',
        },
        {
          key: 'fillZero',
          name: '是否补0',
          type: 'switch',
        },
      ],
    },
  },
  {
    key: 'icon-daojishi1',
    title: '倒计时',
    data: {
      name: 'countdown',
      deadline: '2024/1/1 00:00:00',
      width: 266,
      height: 32,
      lineWidth: 0,
      props: {
        custom: [
          {
            key: 'timeFormat',
            label: '显示格式',
            type: 'string',
          },
          {
            key: 'deadline',
            label: '截止时间',
            type: 'string',
          },
        ],
        text: true,
      },
      text: '距离2024年还有：101天13时11分34秒',
      timeFormat:
        '`距离2024年还有：${day}天${hours}时${minutes}分${seconds}秒`',
    },
  },
  {
    key: 'icon-rili',
    title: '日历',
    data: {
      width: 280,
      height: 326,
      hiddenText: !0,
      name: 'calendar',
      background: '#fff0',
      hoverTextColor: '#fff',
      dbInput: !0,
      text: '8月',
    },
  },
];
