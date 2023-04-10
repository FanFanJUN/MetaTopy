export interface FloatMenuProps {
  left: string;
  right: string;
  id: string;
  type: string;
  noDrop: boolean;
}

export const FLOAT_ID_ENUM: any = {
  top: 'top',
  bottom: 'bottom',
  up: 'up',
  down: 'down',
  combine: 'combine',
  uncombine: 'uncombine',
  makeupStatus: 'makeupStatus',
  lock: 'lock',
  delete: 'delete',
  undo: 'undo',
  redo: 'redo',
  cut: 'cut',
  copy: 'copy',
  paste: 'paste',
};

export const FLOAT_ENUM = [
  {
    left: '置顶',
    right: '',
    type: 'text',
    id: FLOAT_ID_ENUM.top,
  },
  {
    left: '置底',
    right: '',
    type: 'text',
    id: FLOAT_ID_ENUM.bottom,
  },
  {
    left: '上一个图层',
    right: '',
    type: 'text',
    id: FLOAT_ID_ENUM.up,
  },
  {
    left: '下一个图层',
    right: '',
    type: 'text',
    id: FLOAT_ID_ENUM.down,
  },
  {
    type: 'line',
  },
  {
    left: '组合',
    right: '',
    type: 'text',
    id: FLOAT_ID_ENUM.combine,
  },
  {
    left: '组合为状态',
    right: '',
    type: 'text',
    id: FLOAT_ID_ENUM.makeupStatus,
  },
  {
    left: '锁定',
    right: '',
    type: 'text',
    id: FLOAT_ID_ENUM.lock,
  },
  {
    type: 'line',
  },
  {
    left: '删除',
    right: '',
    type: 'text',
    id: FLOAT_ID_ENUM.delete,
  },
  {
    type: 'line',
  },
  {
    left: '撤销',
    right: 'Ctrl + Z',
    type: 'text',
    id: FLOAT_ID_ENUM.undo,
  },
  {
    left: '恢复',
    right: 'Ctrl + Shift + Z',
    type: 'text',
    id: FLOAT_ID_ENUM.redo,
  },
  {
    type: 'line',
  },
  {
    left: '剪切',
    right: 'Ctrl + X',
    type: 'text',
    id: FLOAT_ID_ENUM.cut,
  },
  {
    left: '复制',
    right: 'Ctrl + C',
    type: 'text',
    id: FLOAT_ID_ENUM.copy,
  },
  {
    left: '粘贴',
    right: 'Ctrl + V',
    type: 'text',
    id: FLOAT_ID_ENUM.paste,
  },
];

export const PACKAGE_ENUM = [
  {
    left: '置顶',
    right: '',
    type: 'text',
    id: FLOAT_ID_ENUM.top,
  },
  {
    left: '置底',
    right: '',
    type: 'text',
    id: FLOAT_ID_ENUM.bottom,
  },
  {
    left: '上一个图层',
    right: '',
    type: 'text',
    id: FLOAT_ID_ENUM.up,
  },
  {
    left: '下一个图层',
    right: '',
    type: 'text',
    id: FLOAT_ID_ENUM.down,
  },
  {
    type: 'line',
  },
  {
    left: '删除',
    right: '',
    type: 'text',
    id: FLOAT_ID_ENUM.delete,
  },
  {
    type: 'line',
  },
  {
    left: '撤销',
    right: '',
    type: 'text',
    id: FLOAT_ID_ENUM.undo,
  },
  {
    left: '恢复',
    right: '',
    type: 'text',
    id: FLOAT_ID_ENUM.redo,
  },
];

export const FLOAT_CANVAS = [FLOAT_ID_ENUM.paste];
export const FLOAT_ONE = [
  ...FLOAT_CANVAS,
  FLOAT_ID_ENUM.top,
  FLOAT_ID_ENUM.bottom,
  FLOAT_ID_ENUM.down,
  FLOAT_ID_ENUM.up,
  FLOAT_ID_ENUM.lock,
  FLOAT_ID_ENUM.delete,
  FLOAT_ID_ENUM.undo,
  FLOAT_ID_ENUM.cut,
  FLOAT_ID_ENUM.copy,
];
export const FLOAT_OR = [...FLOAT_ONE, FLOAT_ID_ENUM.combine, FLOAT_ID_ENUM.makeupStatus];
