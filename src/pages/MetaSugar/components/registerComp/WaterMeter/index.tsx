/* eslint-disable @typescript-eslint/no-unused-expressions */
function Xt(t, e, i) {
  const { x: o, y: a, r: s } = e,
    {
      startAngle: r = 0,
      endAngle: l = 2 * Math.PI,
      strokeStyle: n,
      fillStyle: c,
    } = i;
  t.arc(o, a, s, r, l),
    n && ((t.strokeStyle = n), t.stroke()),
    c && ((t.fillStyle = c), t.fill());
}

function fh(t, e) {
  const i = e.calculative.worldRect.width,
    o = e.calculative.worldRect.height,
    a = i > o ? i : o,
    s = i > o ? o - 4 : i - 4;
  let r;
  i >= o ? (r = s) : (r = a);
  const l = 0.2,
    n = 1,
    c = Math.floor(Math.random() * 10),
    h = (e.value / 100) * s;
  let d = 0,
    u = 0,
    f = 0,
    g = Math.abs(h - s / 2);
  h / (s / 2) >= 1
    ? ((d =
        e.calculative.worldRect.x +
        i / 2 -
        Math.sqrt((s / 2) * (s / 2) - g * g)),
      e.calculative.worldRect.y + o / 2 - g,
      (u =
        e.calculative.worldRect.x +
        i / 2 +
        Math.sqrt((s / 2) * (s / 2) - g * g)),
      (f = Math.asin(g / (s / 2))))
    : ((d =
        e.calculative.worldRect.x +
        i / 2 -
        Math.sqrt((s / 2) * (s / 2) - g * g)),
      e.calculative.worldRect.y + o / 2 + g,
      (u =
        e.calculative.worldRect.x +
        i / 2 +
        Math.sqrt((s / 2) * (s / 2) - g * g)),
      (f = -Math.asin(g / (s / 2)))),
    t.beginPath(),
    (t.fillStyle = e.background),
    e.value > e.max && (t.fillStyle = e.maxBackground || '#f5222d'),
    e.value < e.min && (t.fillStyle = e.minBackground || '#52c41a'),
    t.arc(
      e.calculative.worldRect.x + i / 2,
      e.calculative.worldRect.y + o / 2,
      s / 2,
      -f,
      Math.PI + f,
    );
  for (let v = d; v < u; v += 20 / (u - d)) {
    const m =
      n * Math.sin((d + v) * l + c) + e.calculative.worldRect.y + s / 2 - h;
    t.lineTo(v, r / 2 + m);
  }
  t.fill(), t.closePath();
}
function vh(t, e) {
  const i = e.calculative.worldRect.x,
    o = e.calculative.worldRect.y,
    a = e.calculative.worldRect.width,
    s = e.calculative.worldRect.height,
    r = a > s ? a : s,
    l = a > s ? s : a,
    n = Math.floor(l / 2),
    c = 7,
    h = l,
    d = e.max,
    u = e.min;
  let f,
    g,
    v,
    m,
    T,
    A,
    p = 0;
  e.maxText || (e.maxText = 'max'),
    e.minText || (e.minText = 'min'),
    u &&
      (a > s
        ? ((f = Math.abs(o + ((100 - u) / 100) * h - (o + h / 2))),
          (g = Math.sqrt(Math.pow(n, 2) - Math.pow(f, 2))),
          (v = n - g + i + r / 2 - l / 2))
        : (a < s,
          (f = Math.abs(o + ((100 - u) / 100) * h - (o + h / 2))),
          (g = Math.sqrt(Math.pow(n, 2) - Math.pow(f, 2))),
          (v = n - g + i))),
    d &&
      (a > s
        ? ((m = Math.abs(o + ((100 - d) / 100) * h - (o + h / 2))),
          (T = Math.sqrt(Math.pow(n, 2) - Math.pow(m, 2))),
          (A = n - T + i + r / 2 - l / 2))
        : (a < s,
          (m = Math.abs(o + ((100 - d) / 100) * h - (o + h / 2))),
          (T = Math.sqrt(Math.pow(n, 2) - Math.pow(m, 2))),
          (A = n - T + i))),
    t.beginPath(),
    (t.fillStyle = '#000');
  let C = l / 10;
  (t.font = C + 'px Arial'),
    u && d
      ? v > A
        ? ((p = v - A),
          a >= s
            ? (t.moveTo(v, o + ((100 - u) / 100) * h),
              t.lineTo(v - c - p, o + ((100 - u) / 100) * h),
              (t.direction = 'rtl'),
              t.fillText(e.minText, v - c - p, o + ((100 - u) / 100) * h + 3),
              t.fillText(u, v - c - p, o + ((100 - u) / 100) * h + C),
              t.moveTo(A, o + ((100 - d) / 100) * h),
              t.lineTo(A - c, o + ((100 - d) / 100) * h),
              (t.direction = 'rtl'),
              t.fillText(e.maxText, A - c, o + ((100 - d) / 100) * h + 3),
              t.fillText(d, A - c, o + ((100 - d) / 100) * h + C))
            : (t.moveTo(v, o + ((100 - u) / 100) * h + r / 2 - l / 2),
              t.lineTo(v - c - p, o + ((100 - u) / 100) * h + r / 2 - l / 2),
              (t.direction = 'rtl'),
              t.fillText(
                e.minText,
                v - c - p,
                o + ((100 - u) / 100) * h + r / 2 - l / 2 + 3,
              ),
              t.fillText(
                u,
                v - c - p,
                o + ((100 - u) / 100) * h + r / 2 - l / 2 + C,
              ),
              t.moveTo(A, o + ((100 - d) / 100) * h + r / 2 - l / 2),
              t.lineTo(A - c, o + ((100 - d) / 100) * h + r / 2 - l / 2),
              (t.direction = 'rtl'),
              t.fillText(
                e.maxText,
                A - c,
                o + ((100 - d) / 100) * h + r / 2 - l / 2 + 3,
              ),
              t.fillText(
                d,
                A - c,
                o + ((100 - d) / 100) * h + r / 2 - l / 2 + C,
              )))
        : ((p = A - v),
          a >= s
            ? (t.moveTo(v, o + ((100 - u) / 100) * h),
              t.lineTo(v - c, o + ((100 - u) / 100) * h),
              (t.direction = 'rtl'),
              t.fillText(e.minText, v - c, o + ((100 - u) / 100) * h + 3),
              t.fillText(u, v - c, o + ((100 - u) / 100) * h + 15),
              t.moveTo(A, o + ((100 - d) / 100) * h),
              t.lineTo(A - c - p, o + ((100 - d) / 100) * h),
              (t.direction = 'rtl'),
              t.fillText(e.maxText, A - c - p, o + ((100 - d) / 100) * h + 3),
              t.fillText(d, A - c - p, o + ((100 - d) / 100) * h + 15))
            : (t.moveTo(v, o + ((100 - u) / 100) * h + r / 2 - l / 2),
              t.lineTo(v - c, o + ((100 - u) / 100) * h + r / 2 - l / 2),
              (t.direction = 'rtl'),
              t.fillText(
                e.minText,
                v - c,
                o + ((100 - u) / 100) * h + r / 2 - l / 2 + 3,
              ),
              t.fillText(
                u,
                v - c,
                o + ((100 - u) / 100) * h + r / 2 - l / 2 + C,
              ),
              t.moveTo(A, o + ((100 - d) / 100) * h + r / 2 - l / 2),
              t.lineTo(A - c - p, o + ((100 - d) / 100) * h + r / 2 - l / 2),
              (t.direction = 'rtl'),
              t.fillText(
                e.maxText,
                A - c - p,
                o + ((100 - d) / 100) * h + r / 2 - l / 2 + 3,
              ),
              t.fillText(
                d,
                A - c - p,
                o + ((100 - d) / 100) * h + r / 2 - l / 2 + C,
              )))
      : u && !d
      ? a >= s
        ? (t.moveTo(v, o + ((100 - u) / 100) * h),
          t.lineTo(v - c, o + ((100 - u) / 100) * h),
          (t.direction = 'rtl'),
          t.fillText(e.minText, v - c, o + ((100 - u) / 100) * h + 3),
          t.fillText(u, v - c, o + ((100 - u) / 100) * h + 15))
        : (t.moveTo(v, o + ((100 - u) / 100) * h + r / 2 - l / 2),
          t.lineTo(v - c, o + ((100 - u) / 100) * h + r / 2 - l / 2),
          (t.direction = 'rtl'),
          t.fillText(
            e.minText,
            v - c,
            o + ((100 - u) / 100) * h + r / 2 - l / 2 + 3,
          ),
          t.fillText(u, v - c, o + ((100 - u) / 100) * h + r / 2 - l / 2 + C))
      : d &&
        !u &&
        (a >= s
          ? (t.moveTo(A, o + ((100 - d) / 100) * h),
            t.lineTo(A - c, o + ((100 - d) / 100) * h),
            (t.direction = 'rtl'),
            t.fillText(e.maxText, A - c, o + ((100 - d) / 100) * h + 3),
            t.fillText(d, A - c, o + ((100 - d) / 100) * h + 15))
          : (t.moveTo(A, o + ((100 - d) / 100) * h + r / 2 - l / 2),
            t.lineTo(A - c, o + ((100 - d) / 100) * h + r / 2 - l / 2),
            (t.direction = 'rtl'),
            t.fillText(
              e.maxText,
              A - c,
              o + ((100 - d) / 100) * h + r / 2 - l / 2 + 3,
            ),
            t.fillText(
              d,
              A - c,
              o + ((100 - d) / 100) * h + r / 2 - l / 2 + C,
            ))),
    t.stroke(),
    t.closePath();
}
export default function uh(t, e) {
  const { x: i, y: o, width: a, height: s } = e.calculative.worldRect,
    r = a > s ? s / 2 : a / 2;
  return (
    fh(t, e),
    e.scaleShow && vh(t, e),
    Xt(
      t,
      {
        x: i + a / 2,
        y: o + s / 2,
        r,
      },
      {
        strokeStyle: '#4583FF',
      },
    ),
    !1
  );
}
