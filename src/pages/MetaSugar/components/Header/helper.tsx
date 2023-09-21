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
    oComp: true,
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
    name: '自适应',
    toolKey: 'fitView',
    oComp: true,
  },
  {
    isSplit: true,
  },
  {
    name: '预览',
    toolKey: 'attention',
  },
];

export let previewData: string = '{}';
export const savePreviewData = (data: string) => {
  previewData = data;
};
