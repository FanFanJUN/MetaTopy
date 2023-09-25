/* eslint-disable @typescript-eslint/no-unused-expressions */
function ug(t) {
  const e = parseInt,
    n = Math.round;
  let r = t.length,
    a = {};
  if (r > 9) {
    const [o, i, l, s] = (t = t.split(','));
    if (((r = t.length), r < 3 || r > 4)) return null;
    (a.r = e(o[3] == 'a' ? o.slice(5) : o.slice(4))),
      (a.g = e(i)),
      (a.b = e(l)),
      (a.a = s ? parseFloat(s) : -1);
  } else {
    if (r == 8 || r == 6 || r < 4) return null;
    r < 6 &&
      (t =
        '#' +
        t[1] +
        t[1] +
        t[2] +
        t[2] +
        t[3] +
        t[3] +
        (r > 4 ? t[4] + t[4] : '')),
      (t = e(t.slice(1), 16)),
      r == 9 || r == 5
        ? ((a.r = (t >> 24) & 255),
          (a.g = (t >> 16) & 255),
          (a.b = (t >> 8) & 255),
          (a.a = n((t & 255) / 0.255) / 1e3))
        : ((a.r = t >> 16),
          (a.g = (t >> 8) & 255),
          (a.b = t & 255),
          (a.a = -1));
  }
  return a;
}

function Uve(t, e, n, r) {
  let a,
    o,
    i,
    l,
    s,
    c,
    u,
    f = Math.round,
    d = typeof n == 'string';
  return typeof t != 'number' ||
    t < -1 ||
    t > 1 ||
    typeof e != 'string' ||
    (e[0] != 'r' && e[0] != '#') ||
    (n && !d) ||
    ((u = e.length > 9),
    (u = d ? (n.length > 9 ? !0 : n == 'c' ? !u : !1) : u),
    (s = ug(e)),
    (l = t < 0),
    (c =
      n && n != 'c'
        ? ug(n)
        : l
        ? {
            r: 0,
            g: 0,
            b: 0,
            a: -1,
          }
        : {
            r: 255,
            g: 255,
            b: 255,
            a: -1,
          }),
    (t = l ? t * -1 : t),
    (l = 1 - t),
    !s || !c)
    ? null
    : (r
        ? ((a = f(l * s.r + t * c.r)),
          (o = f(l * s.g + t * c.g)),
          (i = f(l * s.b + t * c.b)))
        : ((a = f((l * s.r ** 2 + t * c.r ** 2) ** 0.5)),
          (o = f((l * s.g ** 2 + t * c.g ** 2) ** 0.5)),
          (i = f((l * s.b ** 2 + t * c.b ** 2) ** 0.5))),
      (d = s.a),
      (c = c.a),
      (s = d >= 0 || c >= 0),
      (d = s ? (d < 0 ? c : c < 0 ? d : d * l + c * t) : 0),
      u
        ? 'rgb' +
          (s ? 'a(' : '(') +
          a +
          ',' +
          o +
          ',' +
          i +
          (s ? ',' + f(d * 1e3) / 1e3 : '') +
          ')'
        : '#' +
          (
            4294967296 +
            a * 16777216 +
            o * 65536 +
            i * 256 +
            (s ? f(d * 255) : 0)
          )
            .toString(16)
            .slice(1, s ? void 0 : -2));
}

export default function Ua(t, e) {
  const { x: i, y: o, height: a, ex: s, ey: r } = e.calculative.worldRect,
    l = a / 7;
  t.beginPath(),
    t.moveTo(i, r - l),
    t.bezierCurveTo(i, (r - l * 2.5) | 0, s, (r - l * 2.5) | 0, s, r - l),
    t.stroke();
  const n = (e.calculative.progress || 0) * (a - 2 * l),
    c = r - l - n;
  return (
    e.calculative.progress &&
      (t.save(),
      t.beginPath(),
      (t.fillStyle = e.calculative.progressColor),
      t.moveTo(i, c),
      t.bezierCurveTo(i, (c + (l * 3) / 2) | 0, s, (c + (l * 3) / 2) | 0, s, c),
      t.lineTo(s, r - l),
      t.bezierCurveTo(s, (r + l / 2) | 0, i, (r + l / 2) | 0, i, r - l),
      t.closePath(),
      t.fill(),
      t.restore()),
    t.beginPath(),
    (t.fillStyle = Uve(-0.4, e.calculative.progressColor)),
    t.moveTo(i, c),
    t.bezierCurveTo(i, (c - (l * 3) / 2) | 0, s, (c - (l * 3) / 2) | 0, s, c),
    t.bezierCurveTo(s, (c + (l * 3) / 2) | 0, i, (c + (l * 3) / 2) | 0, i, c),
    t.closePath(),
    t.fill(),
    t.beginPath(),
    t.moveTo(i, o + l),
    t.bezierCurveTo(i, (o - l / 2) | 0, s, (o - l / 2) | 0, s, o + l),
    t.lineTo(s, r - l),
    t.bezierCurveTo(s, (r + l / 2) | 0, i, (r + l / 2) | 0, i, r - l),
    t.closePath(),
    t.stroke(),
    t.beginPath(),
    t.moveTo(s, o + l),
    t.bezierCurveTo(s, (o + l * 2.5) | 0, i, (o + l * 2.5) | 0, i, o + l),
    t.stroke(),
    !1
  );
}
