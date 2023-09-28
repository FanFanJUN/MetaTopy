import styles from './index.less';

const _renderLine = (name: string, icon: string) => {
  return (
    <div className={styles.lineWrap}>
      {name || ''} <li className={icon} />
    </div>
  );
};

export const ArrowOption = (dir: 'from' | 'to') => [
  {
    label: _renderLine('', `t-icon t-line`),
    key: '',
  },
  {
    label: _renderLine('', `t-icon t-${dir}-triangle`),
    key: 'triangle',
  },
  {
    label: _renderLine('', `t-icon t-${dir}-diamond`),
    key: 'diamond',
  },
  {
    label: _renderLine('', `t-icon t-${dir}-circle`),
    key: 'circle',
  },
  {
    label: _renderLine('', `t-icon t-${dir}-lineDown`),
    key: 'lineDown',
  },
  {
    label: _renderLine('', `t-icon t-${dir}-lineUp`),
    key: 'lineUp',
  },
  {
    label: _renderLine('', `t-icon t-${dir}-triangleSolid`),
    key: 'triangleSolid',
  },
  {
    label: _renderLine('', `t-icon t-${dir}-diamondSolid`),
    key: 'diamondSolid',
  },
  {
    label: _renderLine('', `t-icon t-${dir}-circleSolid`),
    key: 'circleSolid',
  },
  {
    label: _renderLine('', `t-icon t-${dir}-line`),
    key: 'line',
  },
];

export const SelectOption = [
  {
    label: _renderLine('曲线', `t-icon t-curve2`),
    key: 'curve',
    iconKey: 'curve2',
  },
  {
    label: _renderLine('线段', `t-icon t-polyline`),
    key: 'polyline',
  },
  {
    label: _renderLine('直线', `t-icon t-line`),
    key: 'line',
  },
  {
    label: _renderLine('脑图曲线', `t-icon t-mind`),
    key: 'mind',
  },
];

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
    name: '大屏',
    toolKey: 'screen',
    icon: 'meta icon-erji-dapingjianguan',
  },
  {
    name: '保存',
    toolKey: 'save',
  },
  {
    isSplit: true,
  },
  {
    name: '新建',
    toolKey: 'newFile',
    oComp: true,
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
    toolKey: 'fromArrow',
    dropdown: {
      type: 'menu',
      items: ArrowOption('from'),
    },
    oComp: true,
  },
  {
    name: '终点',
    toolKey: 'toArrow',
    dropdown: {
      type: 'menu',
      items: ArrowOption('to'),
    },
    oComp: true,
  },
  {
    name: '连线',
    toolKey: 'curve2',
    dropdown: {
      type: 'menu',
      items: SelectOption,
    },
    oComp: true,
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
    name: '视图',
    toolKey: 'view',
    dropdown: {
      type: 'view',
    },
    oComp: true,
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
    name: '编辑',
    toolKey: 'lockStatus',
    oComp: true,
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
