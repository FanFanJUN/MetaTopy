import _ from 'lodash';

const batterXOffset = {};
const batterCurrent = {};
const speed = 0.05;
const batteryFill = {
  充电: {
    color: '#fa752bcc',
    batteryColor: '#fa752b',
  },
  放电: {
    color: '#30d485cc',
    batteryColor: '#30d485',
  },
  非充非放: {
    color: '#ffffffcc',
    batteryColor: '#ffffff',
  },
};

async function drawLightning(ctx, x, y, width, height, status) {
  const lW = width / 10;
  const lH = height / 10;
  const centerX = x + width / 2;
  const centerY = y + 2 * lH;
  ctx.fillStyle = batteryFill[status].batteryColor;
  ctx.lineWidth = 1;
  ctx.lineJoin = 'round';
  // // 开始绘制闪电路径
  ctx.beginPath();
  // // 移动到起始点
  ctx.moveTo(centerX - lW / 4, centerY);
  ctx.bezierCurveTo(
    centerX - lW * 1.1,
    centerY + lH * 1.4,
    centerX - lW * 1.1,
    centerY + lH * 1.4,
    centerX - lW * 1.1,
    centerY + lH * 1.4,
  );
  ctx.lineTo(centerX - lW, centerY + lH * 1.5);
  ctx.lineTo(centerX - lW / 2.2, centerY + lH * 1.5);
  ctx.bezierCurveTo(
    centerX - lW * 1.1,
    centerY + lH * 3,
    centerX - lW * 1.1,
    centerY + lH * 3,
    centerX - lW * 1.1,
    centerY + lH * 3,
  );
  ctx.lineTo(centerX - lW, centerY + lH * 3);
  ctx.bezierCurveTo(
    centerX + lW * 1.1,
    centerY + lH * 0.9,
    centerX + lW * 1.1,
    centerY + lH * 0.9,
    centerX + lW * 1.1,
    centerY + lH * 0.9,
  );
  ctx.lineTo(centerX + lW, centerY + lH);
  ctx.lineTo(centerX + lW * 0.3, centerY + lH);
  ctx.lineTo(centerX + lW, centerY);
  ctx.lineTo(centerX, centerY);
  ctx.fill(); // 填充形状x
  ctx.closePath();
}

const BatteryCanvas = (ctx, pen, meta2d) => {
  const {
    id,
    height = 30,
    width = 150,
    x,
    y,
    data: { value = 50, status = '放电' } = {},
  } = pen;
  if (!['充电', '放电', '非充非放'].some((item) => item === status)) {
    return;
  }
  if (meta2d.isPreView && !pen.animateType) {
    meta2d?.setValue({
      id: pen.id,
      animateType: 'waterpolo',
      autoPlay: true,
      frames: [
        {
          speed: 0.1,
          xOffset: 0,
        },
      ],
      linear: true,
      keepAnimateState: true,
      linePlay: true,
    });
    setTimeout(() => meta2d?.render());
  }
  let batteryPower = Math.min(
    10,
    Math.max(0, _.floor(_.divide(Number(value), 10))),
  );
  if (status === '放电') {
    batteryPower = Math.max(batteryPower, 1);
  }
  const batteryHeight = height / 10;

  const batteryEmpty = '#transparent';
  const intervalHeight = batteryHeight / 10;
  const numBatteryCells = 10; // Number of battery cells
  if (status === '充电') {
    if (batterXOffset[id] > 1) {
      batterXOffset[id] = 0;
      batterCurrent[id] =
        batterCurrent[id] >= numBatteryCells
          ? batteryPower
          : (batterCurrent[id] ?? batteryPower) + 1;
    } else {
      batterXOffset[id] = (batterXOffset[id] ?? 0) + speed;
    }
  } else if (status === '放电') {
    if (batterXOffset[id] > 1) {
      batterXOffset[id] = 0;
      batterCurrent[id] =
        batterCurrent[id] < batteryPower
          ? batteryPower
          : (batterCurrent[id] ?? batteryPower) - 1;
    } else {
      batterXOffset[id] = (batterXOffset[id] ?? 0) + speed;
    }
  } else {
    batterCurrent[id] = batteryPower;
  }

  ctx.clearRect(x, y, width, height);

  ctx.strokeStyle = batteryFill[status].color;
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, width, height);

  const batteryWidth = width * 0.8;
  const cellX = x + width * 0.1;
  if (status === '充电') {
    for (let i = 0; i < numBatteryCells; i++) {
      const cellY =
        y +
        height * ((numBatteryCells - i - 1) / numBatteryCells) +
        intervalHeight;
      if (i < batteryPower) {
        ctx.fillStyle = batteryFill[status].color;
        ctx.fillRect(
          cellX,
          cellY,
          batteryWidth,
          batteryHeight - intervalHeight,
        );
      } else if (i < batterCurrent[id] ?? batteryPower) {
        ctx.strokeStyle = batteryFill[status].color;
        ctx.lineWidth = 1;
        ctx.strokeRect(
          cellX,
          cellY,
          batteryWidth,
          batteryHeight - intervalHeight,
        );
      } else {
        ctx.fillStyle = batteryEmpty;
        ctx.strokeStyle = batteryEmpty;
      }
    }
  } else if (status === '放电') {
    for (let i = 0; i < numBatteryCells; i++) {
      const cellY =
        y +
        height * ((numBatteryCells - i - 1) / numBatteryCells) +
        intervalHeight;
      if (i < batterCurrent[id] ?? batteryPower) {
        ctx.fillStyle = batteryFill[status].color;
        ctx.fillRect(
          cellX,
          cellY,
          batteryWidth,
          batteryHeight - intervalHeight,
        );
      } else {
        ctx.fillStyle = batteryEmpty;
        ctx.strokeStyle = batteryEmpty;
      }
    }
  } else {
    for (let i = 0; i < numBatteryCells; i++) {
      const cellY =
        y +
        height * ((numBatteryCells - i - 1) / numBatteryCells) +
        intervalHeight;
      if (i < batterCurrent[id] ?? batteryPower) {
        ctx.fillStyle = batteryFill[status].color;
        ctx.fillRect(
          cellX,
          cellY,
          batteryWidth,
          batteryHeight - intervalHeight,
        );
      } else {
        ctx.fillStyle = batteryEmpty;
        ctx.strokeStyle = batteryEmpty;
      }
    }
  }
  drawLightning(ctx, x, y, width, height, status);
  return '';
};

export default BatteryCanvas;
