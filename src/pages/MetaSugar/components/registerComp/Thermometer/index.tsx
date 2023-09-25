/* eslint-disable @typescript-eslint/no-unused-expressions */
function Kt(t, e, i) {
  const { x: r, y: n, r: o } = e,
    {
      startAngle: a = 0,
      endAngle: s = 2 * Math.PI,
      strokeStyle: l,
      fillStyle: c,
    } = i;
  t.arc(r, n, o, a, s),
    l && ((t.strokeStyle = l), t.stroke()),
    c && ((t.fillStyle = c), t.fill());
}

function xr(t, e, i) {
  const { x: r, y: n, centerX: o, centerY: a, x1: s, y1: l, r: c } = e,
    {
      strokeStyle: u,
      startAngle: h = 0,
      endAngle: d = 2 * Math.PI,
      direction: f = !1,
      fillStyle: v,
      lineWidth: g = 1,
    } = i;
  t.moveTo(r, n),
    t.arc(o, a, c, h, d, f),
    t.lineTo(s, l),
    (t.lineWidth = g),
    u && ((t.strokeStyle = u), t.stroke()),
    v && ((t.fillStyle = v), t.fill());
}
function J2(t, e, i, r, n, o, a, s) {
  const { strokeStyle: l } = s;
  t.beginPath(),
    xr(
      t,
      {
        x: e + a,
        y: r,
        centerX: e + o,
        centerY: i + a,
        x1: e + 3 * a,
        y1: r,
        r: a,
      },
      {
        strokeStyle: l,
        startAngle: Math.PI,
        direction: !1,
      },
    ),
    Kt(
      t,
      {
        x: e + o,
        y: i + n - o,
        r: o,
      },
      {
        strokeStyle: l,
        startAngle: (-1 / 3) * Math.PI,
        endAngle: (4 / 3) * Math.PI,
      },
    ),
    t.closePath();
}

function G2(t, e, i, r, n, o, a, s) {
  const { min: l, max: c, strokeStyle: u, fontSize: h } = s;
  (e += o + n), (i += o);
  const d = (r - n - o - (Math.sqrt(3) / 2) * n) / (c - l);
  (t.fillStyle = u || '#FFFFFFB3'),
    (t.font = h + 'px Arial'),
    (t.textBaseline = 'middle'),
    (t.textAlign = 'left');
  for (let f = c; f >= l; f--)
    t.beginPath(),
      t.moveTo(e, i),
      f % 10 == 0
        ? ((t.lineWidth = 2),
          t.lineTo(e + o, i),
          t.fillText(f, e + o + h / 2, i))
        : ((t.lineWidth = 1),
          f % 5 == 0 ? t.lineTo(e + (o * 2) / 3, i) : t.lineTo(e + o / 3, i)),
      (i += d),
      t.stroke();
}

function Q2(t, e, i, r, n, o, a, s) {
  let { background: l, activeBackground: c, value: u, min: h, max: d } = s;
  const f = 0.3 * o,
    v = a - f,
    g = o - f,
    m = e + 3 * a - f,
    b = e + a + f;
  if (
    (t.beginPath(),
    xr(
      t,
      {
        x: b,
        y: r,
        centerX: e + o,
        centerY: i + a,
        x1: m,
        y1: r,
        r: v,
      },
      {
        startAngle: Math.PI,
        direction: !1,
      },
    ),
    u < h)
  )
    Kt(
      t,
      {
        x: e + o,
        y: i + n - o,
        r: g,
      },
      {
        fillStyle: l,
        startAngle: (-1 / 3) * Math.PI,
        endAngle: (4 / 3) * Math.PI,
      },
    ),
      t.closePath(),
      t.beginPath();
  else if (u <= d) {
    const w = ((u - h) / (d - h)) * (r - i - a);
    (t.fillStyle = l),
      t.fill(),
      t.closePath(),
      t.beginPath(),
      t.moveTo(b, r),
      t.lineTo(b, r - w),
      t.lineTo(m, r - w),
      t.lineTo(m, r);
  }
  Kt(
    t,
    {
      x: e + o,
      y: i + n - o,
      r: g,
    },
    {
      fillStyle: c,
      startAngle: (-1 / 3) * Math.PI,
      endAngle: (4 / 3) * Math.PI,
    },
  ),
    t.closePath();
}

export default function X2(t, e) {
  const { x: i, y: r, width: n, height: o } = e.calculative.worldRect;
  let a = n / 2 <= o / 6 ? n / 2 : o / 6,
    s = a / 2;
  const l = r + o - a - Math.cos(Math.asin(0.5)) * a,
    c = e.max || 20,
    u = e.min || -20;
  return (
    G2(t, i, r, o, a, s, n, {
      strokeStyle: e.textColor || '#4583FF',
      min: e.min,
      max: e.max,
      fontSize: e.calculative.fontSize,
    }),
    J2(t, i, r, l, o, a, s, {
      strokeStyle: e.color,
      fillStyle: e.background,
    }),
    t.beginPath(),
    Q2(t, i, r, l, o, a, s, {
      value: e.value,
      min: u,
      max: c,
      background: e.background || '#FF5D3C33',
      activeBackground: e.activeBackground || '#FF5D3C',
    }),
    t.closePath(),
    !1
  );
}
