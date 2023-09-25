/* eslint-disable @typescript-eslint/no-unused-expressions */
function Tt({
  fontStyle: t = 'normal',
  textDecoration: e = 'normal',
  fontWeight: i = 'normal',
  fontSize: o = 12,
  fontFamily: a = 'Arial',
  lineHeight: s = 1,
} = {}) {
  return `${t} ${e} ${i} ${o}px/${s} ${a}`;
}
function ce(t, e) {
  const { textColor: i, color: o } = t.calculative,
    { data: a, options: s } = e;
  return i || o || a.textColor || a.color || s.textColor || s.color;
}
function jt(t) {
  let e;
  const i = t.calculative.canvas.parent.store;
  return (
    t.calculative.hover
      ? (e = t.hoverTextColor || t.hoverColor || i.options.hoverColor)
      : t.calculative.active &&
        (e = t.activeTextColor || t.activeColor || i.options.activeColor),
    e || ce(t, i)
  );
}

function ls(t) {
  let e = 0;
  return (
    t.interval && clearInterval(t.interval),
    (i) => {
      e = i || 0;
      let o = t.calculative.textH ? Math.floor(t.calculative.textH) : 0,
        a = 20,
        s = 0;
      t.interval = setInterval(() => {
        e >= o
          ? s >= a
            ? ((e = 0), (s = 0))
            : (s += 1)
          : ((t.offset -= 1), (e += 1), t.calculative.canvas.render());
      }, t.timeout || 50);
    }
  );
}
function pd(t) {
  t.direction === 'vertical'
    ? ls(t)(0)
    : (t.interval = setInterval(() => {
        (t.offset -= 1), t.calculative.canvas.render();
      }, t.timeout || 10));
}
function Cd(t) {
  t.interval && (clearInterval(t.interval), (t.interval = void 0));
}
function Sd(t, e) {
  return (
    e.timeout &&
      setTimeout(() => {
        t.onDestroy(t), t.onAdd(t);
      }),
    e
  );
}
function Fd(t) {
  var e;
  (e = t.onDestroy) == null || e.call(t, t);
}
function Id(t) {
  var e;
  (e = t.onAdd) == null || e.call(t, t);
}

export default function Ad(t, e) {
  var u;
  e.onAdd ||
    ((e.onAdd = pd),
    (e.onDestroy = Cd),
    (e.onBeforeValue = Sd),
    (e.onMouseEnter = Fd),
    (e.onMouseLeave = Id),
    e.interval && (e.onDestroy(e), e.onAdd(e)));
  let i = e.calculative.worldRect.x,
    o = e.calculative.worldRect.y,
    a = e.calculative.worldRect.height,
    s = e.calculative.worldRect.width;
  e.offset == null && (e.offset = 5);
  let r = 100;
  const {
    fontStyle: l,
    fontWeight: n,
    fontSize: c,
    fontFamily: h,
    lineHeight: d,
  } = e.calculative;
  if (
    ((t.font = Tt({
      fontStyle: l,
      fontWeight: n,
      fontFamily: h || e.calculative.canvas.parent.store.options.fontFamily,
      fontSize: c,
      lineHeight: d,
    })),
    (t.textAlign = 'left'),
    e.direction === 'vertical')
  ) {
    t.save(),
      (t.fillStyle = '#fff0'),
      t.rect(i, o, s, a),
      t.fill(),
      t.clip(),
      t.beginPath(),
      (t.fillStyle = jt(e));
    let f = Math.floor(c * d);
    e.calculative.textH = f;
    let g = e.data.length * f;
    for (let m = 0; m < e.data.length; m++) {
      let T = Math.floor(o + f / 2 + f * m + e.offset);
      t.fillText(e.data[m], i + 10, T);
    }
    let v = 2;
    for (let m = 1; m < v; m++)
      for (let T = 0; T < e.data.length; T++) {
        let A = Math.floor(o + f / 2 + f * T + e.offset + m * g);
        t.fillText(e.data[T], i + 10, A);
      }
    e.offset + g * v < f &&
      e.offset + g * v > -f &&
      ((e.offset = -g * (v - 1) + f), ls(e)(0)),
      t.restore();
  } else {
    t.save(),
      (t.fillStyle = '#fff0'),
      t.rect(i, o, s, a),
      t.fill(),
      t.clip(),
      t.beginPath(),
      (t.fillStyle = jt(e));
    let f = (u = e.data) == null ? void 0 : u.join('       ');
    t.fillText(f, i + e.offset, o + a / 2);
    let g = t.measureText(f).width;
    for (let v = 0; v < 3; v++)
      t.fillText(f, i + e.offset + (g + r) * v, o + a / 2);
    g + r + e.offset < 5 && g + r + e.offset > -5 && (e.offset = -5),
      t.restore();
  }
}
