export const FILE_LIST = [
  {
    label: '新建文件',
    key: 'newFile',
  },
  {
    label: '打开本地文件',
    key: 'openLocalFile',
  },
  {
    label: (
      <div
        style={{
          height: '1px',
          overflow: 'hidden',
          lineHeight: '0',
          backgroundColor: '#f0f0f0',
        }}
      />
    ),
    key: 'divider_T',
  },
  {
    label: '下载JSON文件',
    key: 'downLoadJson',
  },
  {
    label: '下载为png',
    key: 'downloadPng',
  },
  /* {
    label: '下载为svg',
    key: 'downloadSvg',
  }, */
];
export const TOOL_LIST = [
  {
    name: '文件',
    toolKey: 'folder',
    dropdown: {
      type: 'menu',
      items: FILE_LIST,
      hasDivider: true,
    },
  },
  {
    name: '保存',
    toolKey: 'save',
  },
  {
    isSplit: true,
  },
  {
    name: '钢笔',
    toolKey: 'curve',
  },
  {
    name: '铅笔',
    toolKey: 'qianbi',
  },
  {
    name: '放大镜',
    toolKey: 'fangdajing',
  },
  {
    name: '缩略图',
    toolKey: 'ditu',
  },
  {
    name: '起点',
    toolKey: 'line',
  },
  {
    name: '终点',
    toolKey: 'line',
  },
  {
    name: '连线',
    toolKey: 'curve2',
  },
  {
    name: '线宽',
    toolKey: 'xiankuan',
    dropdown: {
      type: 'input',
    },
    showValue: true,
  },
  {
    name: '自动描点',
    toolKey: 'maodian',
  },
  {
    name: '禁用描点',
    toolKey: 'jinzhimiaodian',
  },
  {
    isSplit: true,
  },
  {
    name: '预览',
    toolKey: 'attention',
  },
  {
    name: '社区',
    toolKey: 'shequ',
    dropdown: {
      type: 'menu',
      items: [
        {
          label: (
            <a href="https://github.com/le5le-com" target="_blank">
              Github
            </a>
          ),
          key: 'Github',
        },
        {
          label: (
            <a href="https://github.com/le5le-com/meta2d.js" target="_blank">
              核心库
            </a>
          ),
          key: 'core',
        },
        {
          label: (
            <a href="https://t.le5le.com/" target="_blank">
              产品
            </a>
          ),
          key: 'product',
        },
      ],
    },
  },
  {
    name: '帮助',
    toolKey: 'help-circle',
    dropdown: {
      type: 'menu',
      items: [
        {
          label: (
            <a
              href="http://developer.le5le.com/topology-documents/tutorial/introduction.html"
              target="_blank"
            >
              使用教程
            </a>
          ),
          key: 'use',
        },
        {
          label: (
            <a
              href="http://developer.le5le.com/topology-documents/api/core.html"
              target="_blank"
            >
              开发文档
            </a>
          ),
          key: 'devDoc',
          link: '',
        },
        {
          label: (
            <a
              href="http://developer.le5le.com/topology-documents/api/core.html"
              target="_blank"
            >
              用户手册
            </a>
          ),
          key: 'useBook',
        },
        {
          label: (
            <a
              href="http://developer.le5le.com/topology-documents/tutorial/keyboards.html"
              target="_blank"
            >
              快捷键
            </a>
          ),
          key: 'keyboard',
        },
      ],
    },
  },
];
