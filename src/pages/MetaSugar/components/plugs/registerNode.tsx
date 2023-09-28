/* eslint-disable @typescript-eslint/no-use-before-define */
import type { Pen } from '@meta2d/core';
import { deepClone, setElemPosition } from '@meta2d/core';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import type { IMeta } from '../../context';

export let reactNodesData = {};

export const clearNodes = () => {
  reactNodesData = {};
};

const registerNode = (Comp: any, meta2d?: IMeta) => (pen: Pen) => {
  function value() {
    const penId = getPenId(pen);
    if (!reactNodesData[penId]) {
      return;
    }
    if (pen.data === reactNodesData[penId].tempData) return;
    reactNodesData[penId].tempData = deepClone(pen.data);
    const Comp = reactNodesData[penId]?.component;
    ReactDOM.render(
      <Comp
        pen={pen}
        data={pen?.data ?? {}}
        meta2d={meta2d}
        style={{ height: `${100}%`, width: `${100}%` }}
      />,
      reactNodesData[penId]?.div,
    );
  }
  if (pen.id.includes('-moving')) return;
  if (!pen.onDestroy) {
    pen.onDestroy = destory;
    pen.onMove = move;
    pen.onResize = resize;
    pen.onRotate = move;
    pen.onValue = value;
    pen.onChangeId = changeId;
  }
  const path = new Path2D();
  const worldRect = pen.calculative.worldRect;
  const penId = getPenId(pen);
  if (!reactNodesData[penId] || !reactNodesData[penId].div) {
    // 1. 创建父容器
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.outline = 'none';
    div.style.left = '-9999px';
    div.style.top = '-9999px';
    div.style.width = worldRect.width + 'px';
    div.style.height = worldRect.height + 'px';
    if (!['battery'].includes(pen.name)) {
      div.style.overflow = 'hidden';
    }
    div.id = pen.id;
    document.body.appendChild(div);
    reactNodesData[penId] = {
      div: div,
      component: Comp,
      tempData: pen?.data,
    };
    ReactDOM.render(
      <Comp
        pen={pen}
        data={pen?.data ?? {}}
        meta2d={meta2d}
        style={{ height: `${100}%`, width: `${100}%` }}
      />,
      div,
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    pen.calculative.canvas.externalElements &&
      pen.calculative.canvas.externalElements.appendChild(div);
    setElemPosition(pen, div);
  }
  path.rect(worldRect.x, worldRect.y, worldRect.width, worldRect.height);

  if (pen.calculative.dirty && reactNodesData[penId]) {
    setElemPosition(pen, reactNodesData[penId].div);
  }
  return path;
};

export default registerNode;

function getPenId(pen) {
  return pen.id;
}

function destory(pen) {
  const penId = getPenId(pen);
  reactNodesData[penId]?.div?.remove();
  reactNodesData = _.omit(reactNodesData, [penId]);
}
function move(pen) {
  const penId = getPenId(pen);
  if (!reactNodesData[penId]) {
    return;
  }
  setElemPosition(pen, reactNodesData[penId].div);
}
function resize(pen) {
  const penId = getPenId(pen);
  if (!reactNodesData[penId]) {
    return;
  }
  setElemPosition(pen, reactNodesData[penId].div);
}
function changeId(pen, oldId, newId) {
  if (!reactNodesData[oldId]) {
    return;
  }
  reactNodesData[oldId].div.id = newId;
  reactNodesData[newId] = reactNodesData[oldId];
  delete reactNodesData[oldId];
}
