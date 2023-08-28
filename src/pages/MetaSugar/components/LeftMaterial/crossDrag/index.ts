import { deepClone } from '@meta2d/core';
import { IMeta } from './../../../context';
import { Pen } from '@meta2d/core';
import _ from 'lodash';
import { DragEvent } from 'react';
import { Modal } from 'antd';

export let currentDrag: Pen | null = null;
export const dragEventResolve = function (meta2d: IMeta, item: Pen) {
  const sugar = document.getElementById('iMeta2d');
  return {
    draggable: true,
    onDragStart: (e) => {
      currentDrag = item;
      if (sugar) {
        sugar.setAttribute('data-mark', 'move');
      }
    },
    onDragOver: (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    },
    onDrop: () => {},
    onDragEnd: () => {
      if (sugar) {
        sugar.setAttribute('data-mark', 'noMove');
      }
    },
    onDoubleClick: (e: React.MouseEvent) => {},
  };
};

export const setDragData = (item: any) => {
  currentDrag = item;
};

export const containerDragResolve = (meta2d: IMeta) => {
  return {
    onDragStart: () => {},
    onDragOver: (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    },
    onDrop: (e: DragEvent<HTMLDivElement>) => {
      console.log('eee', meta2d, currentDrag);
      // 偏移量
      const { x, y, scale } = meta2d.store.data;
      const offsetX = Math.round(e.nativeEvent.offsetX) - x;
      const offsetY = Math.round(e.nativeEvent.offsetY) - y;
      console.log(offsetX, offsetY);
      const { width, height } = currentDrag;
      Modal.confirm({
        content: 'xxxx',
        onOk: () => {
          meta2d.addPen(
            deepClone({
              ...currentDrag,
              width: width * scale,
              height: height * scale,
              x: offsetX - (width * scale) / 2,
              y: offsetY - (height * scale) / 2,
            }),
          );
        },
      });
    },
    onDragEnd: () => {},
  };
};
