import { deepClone } from '@meta2d/core';
import { IMeta } from './../../../context';
import { Pen } from '@meta2d/core';
import _ from 'lodash';

export let currentDrag: Pen | null = null;
export const dragEventResolve = function (meta2d: IMeta, item: Pen) {
  return {
    draggable: true,
    onDragStart: (e) => {
      currentDrag = item;
      e.dataTransfer.setData('Meta2d', JSON.stringify(currentDrag));
    },
    onDragOver: (e) => {
      console.log('over');
    },
    onDrop: () => {},
    onDragEnd: (e) => {
      // meta2d.addPen({ ...cloneData });
    },
    onDoubleClick: (e) => {},
  };
};

export const setDragData = (item: any) => {
  currentDrag = item;
};
