import type { Pen } from '@meta2d/core';
import type { IMeta } from '../../context';

export { default as AntdButton } from './AntdButton';
export { default as BatteryCanvas } from './BatteryCanvas';
export { default as Beeline } from './Beeline';
export { default as Calendar } from './Calendar';
export { default as List } from './List';
export { default as Swiperline } from './Swiperline';
export { default as Thermometer } from './Thermometer';
export { default as WaterMeter } from './WaterMeter';
export { default as WaterTank } from './WaterTank';

interface IRPen extends Pen {
  customAttribute: object;
}
export interface ICommon {
  mata2d: IMeta;
  pen: IRPen;
  data: any;
}
