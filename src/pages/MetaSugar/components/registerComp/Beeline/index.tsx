// @ts-nocheck
import { Pen } from '@meta2d/core';

export default function Beeline(ctx: CanvasRenderingContext2D, pen: Pen): void {
  const { height = 30, width = 150, x, y } = pen;
  ctx.save();
  ctx.moveTo(x, y + height / 2);
  ctx.lineTo(x + width, y + height / 2);
  ctx.stroke();
  ctx.restore();
}
