import { Pen, deepClone } from '@meta2d/core';
import { Modal } from 'antd';
import { DragEvent } from 'react';
import { IMeta } from './../../../context';

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
      // 偏移量
      const { x, y, scale } = meta2d.store.data;
      const offsetX = Math.round(e.nativeEvent.offsetX) - x;
      const offsetY = Math.round(e.nativeEvent.offsetY) - y;
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
