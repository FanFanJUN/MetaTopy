/* eslint-disable @typescript-eslint/no-unused-expressions */
function Yd(t, e) {
  t.calculative.canvas.render();
}

function qd(t, e, i) {
  let o = [],
    a = [],
    s = [];
  for (let r = 0; r < 7; r++) {
    let l = t - 3 + r;
    l > 23 || l < 0 ? (l = '') : (l = (l + '').padStart(2, '0')), o.push(l);
  }
  for (let r = 0; r < 7; r++) {
    let l = e - 3 + r;
    l > 59 || l < 0 ? (l = '') : (l = (l + '').padStart(2, '0')), a.push(l);
  }
  for (let r = 0; r < 7; r++) {
    let l = i - 3 + r;
    l > 59 || l < 0 ? (l = '') : (l = (l + '').padStart(2, '0')), s.push(l);
  }
  return [o, a, s];
}

function Vd(t, e) {
  (t = t || new Date().getFullYear()), (e = e || new Date().getMonth() + 1);
  var i = new Date(t, e - 1, 0),
    o = i.getDate(),
    a = i.getDay(),
    s = new Date(t, e, 0),
    r = s.getDate(),
    l = new Date().getDate(),
    n = new Date().getFullYear(),
    c = new Date().getMonth() + 1,
    h = o - a,
    d = 1;
  let u = [];
  u.push(['日', '一', '二', '三', '四', '五', '六']);
  let f = 0,
    g = -1,
    v = -1,
    m = [];
  for (var T = 0; T <= 6; T++)
    T <= a
      ? m.push(h++)
      : (n == t && c == e && l == d && v < 0 && (v = f), m.push(d++)),
      f++;
  u.push(m);
  for (var A = 6 - a + 1, p = 1, C = 1; C <= 5; C++) {
    let F = [];
    for (var x = 0; x < 7; x++)
      A <= r
        ? (n == t && c == e && l == A && v < 0 && (v = f), F.push(A++))
        : (g < 0 && (g = f), F.push(p++)),
        f++;
    u.push(F);
  }
  return {
    data: u,
    start: a + 7,
    end: g + 7,
    current: v + 7,
  };
}

function Kd(t, e) {
  if (t.calculative.hoverType === 'year') {
    (t.calculative.text = t.year), (t.text = t.year);
    let i = [],
      o = parseInt(t.year);
    for (let a = o - 20; a < o + 20; a++)
      i.push({
        text: a,
      });
    t.dropdownList = i;
  } else
    t.calculative.hoverType === 'month' &&
      ((t.calculative.text = t.month + '月'),
      (t.text = t.month + '月'),
      (t.dropdownList = [
        {
          text: '1月',
        },
        {
          text: '2月',
        },
        {
          text: '3月',
        },
        {
          text: '4月',
        },
        {
          text: '5月',
        },
        {
          text: '6月',
        },
        {
          text: '7月',
        },
        {
          text: '8月',
        },
        {
          text: '9月',
        },
        {
          text: '10月',
        },
        {
          text: '11月',
        },
        {
          text: '12月',
        },
      ]));
  t.calculative.day &&
    ((t.day = t.calculative.day), (t.value = `${t.year}-${t.month}-${t.day}`)),
    (t.calculative.yearActive = !1),
    (t.calculative.monthActive = !1),
    (t.calculative.activeMousePos = {
      x: e.x,
      y: e.y,
    }),
    ((t.calculative.hoverIndex > 0 && t.calculative.calendardata) ||
      t.calculative.hoverBtn) &&
      ((t.calculative.hoverIndex >= 7 &&
        t.calculative.hoverIndex <= t.calculative.calendardata.start) ||
      t.calculative.hoverBtn === 'last'
        ? ((t.month -= 1), t.month < 1 && ((t.month = 12), (t.year -= 1)))
        : t.calculative.hoverIndex >= t.calculative.calendardata.end ||
          t.calculative.hoverBtn === 'next'
        ? ((t.month += 1), t.month > 12 && ((t.month = 1), (t.year += 1)))
        : t.calculative.hoverBtn === 'current' &&
          ((t.year = new Date().getFullYear()),
          (t.month = new Date().getMonth() + 1))),
    t.calculative.hoverBtn === 'ok' &&
      (t.calendarType === 'time'
        ? (t.value = `${t.year}-${t.month}-${t.day} ${t.hour}:${t.minutes}:${t.seconds}`)
        : (t.value = `${t.year}-${t.month}-${t.day}`)),
    t.calculative.canvas.render();
}

function Xd(t, e) {
  e === 'ArrowUp' || e === 'ArrowLeft'
    ? (t.calculative.yearActive &&
        ((t.year += 1), t.calculative.canvas.render()),
      t.calculative.monthActive &&
        ((t.month += 1),
        t.month > 12 && (t.month = 1),
        t.calculative.canvas.render()))
    : (e === 'ArrowRight' || e === 'ArrowDown') &&
      (t.calculative.yearActive &&
        ((t.year -= 1), t.calculative.canvas.render()),
      t.calculative.monthActive &&
        ((t.month -= 1),
        t.month < 1 && (t.month = 12),
        t.calculative.canvas.render()));
}

function Ud(t, e) {
  t.calculative.canvas.showInput(t, t.calculative.worldTextRect, '#ffffff');
}
function jd(t, e) {
  t.calculative.hoverType === 'year'
    ? (t.year = parseInt(e))
    : t.calculative.hoverType === 'month' &&
      (t.month = parseInt(e.slice(0, -1))),
    t.calculative.canvas.render();
}

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

function Gt(t, e) {
  const { x: i, y: o, width: a, height: s } = e;
  return t.x >= i && t.x <= i + a && t.y >= o && t.y <= o + s;
}

function io(t) {
  return {
    x: t.x,
    y: t.y,
    width: t.width,
    height: t.height,
    ex: t.x + t.width,
    ey: t.y + t.height,
  };
}

function Ot(t, e, i, o, a) {
  t.save(), t.beginPath(), (t.fillStyle = o), (t.strokeStyle = i);
  let s = a || 5;
  t.beginPath(),
    t.moveTo(e.x + s, e.y),
    t.arcTo(e.x + e.width, e.y, e.x + e.width, e.y + e.height, s),
    t.arcTo(e.x + e.width, e.y + e.height, e.x, e.y + e.height, s),
    t.arcTo(e.x, e.y + e.height, e.x, e.y, s),
    t.arcTo(e.x, e.y, e.x + e.width, e.y, s),
    o && t.fill(),
    i && t.stroke(),
    t.restore();
}

function Se(t, e) {
  t.save(),
    (t.fillStyle = e.color),
    (t.textAlign = 'center'),
    (t.textBaseline = 'middle'),
    (t.font = Tt({
      fontWeight: e.fontWeight,
      fontFamily: e.iconFamily,
      fontSize: e.fontSize,
    })),
    t.fillText(e.icon, e.x, e.y),
    t.restore();
}

export default function Calendar(t, e) {
  let {
    x: i,
    y: o,
    width: a,
    height: s,
    ex: r,
    ey: l,
  } = e.calculative.worldRect;
  const {
    fontStyle: n,
    fontWeight: c,
    fontSize: h,
    fontFamily: d,
    lineHeight: u,
  } = e.calculative;
  e.onMouseMove ||
    ((e.onMouseMove = Yd),
    (e.onKeyDown = Xd),
    (e.onMouseDown = Kd),
    (e.onShowInput = Ud),
    (e.onInput = jd)),
    e.calculative.hoverType === 'hour' && (e.onWheel || (e.onWheel = Gd)),
    t.save(),
    (t.fillStyle = e.background || '#fff'),
    (t.strokeStyle = e.color || '#4583FF');
  let f = e.calculative.borderRadius || 5,
    g = f;
  f < 1 && ((f = a * f), (g = s * g));
  let v = f < g ? f : g;
  a < 2 * v && (v = a / 2),
    s < 2 * v && (v = s / 2),
    t.beginPath(),
    t.moveTo(i + v, o),
    t.arcTo(r, o, r, l, v),
    t.arcTo(r, l, i, l, v),
    t.arcTo(i, l, i, o, v),
    t.arcTo(i, o, r, o, v),
    t.fill(),
    t.stroke(),
    t.restore();
  let m = a;
  e.calendarType === 'time' && (m = (280 / 496) * a);
  let T = (12 / 326) * s,
    A = (12 / 280) * m,
    p = (40 / 326) * s,
    C = (48 / 326) * s;
  const x = e.calculative.canvas.mousePos;
  !e.year && (e.year = new Date().getFullYear()),
    !e.month && (e.month = new Date().getMonth() + 1),
    (e.calculative.day = void 0),
    (e.calculative.hoverBtn = void 0);
  let F = e.year,
    L = e.month;
  t.save(),
    (t.fillStyle = '#FFFFFFFF'),
    (t.font = Tt({
      fontStyle: n,
      fontWeight: '700',
      fontFamily: d || e.calculative.canvas.parent.store.options.fontFamily,
      fontSize: h + 3,
      lineHeight: u,
    })),
    (t.textAlign = 'start'),
    (t.textBaseline = 'middle');
  let S = {
      x: i + A,
      y: o + T,
      width: (80 / 280) * m,
      height: (32 / 326) * s,
    },
    H = '#313740';
  Gt(x, S) &&
    e.calculative.canvas.inputDiv.dataset.penId !== e.id &&
    ((H = '#4583FF'),
    (e.calculative.worldTextRect = io(S)),
    (e.calculative.hoverType = 'month')),
    Ot(t, S, H, void 0),
    t.fillText(`${L}月`, i + A + (8 / 280) * m, o + T + (16 / 326) * s),
    t.beginPath();
  let $ = {
      x: i + A + (8 / 280) * m + (80 / 280) * m,
      y: o + T,
      width: (80 / 280) * m,
      height: (32 / 326) * s,
    },
    O = '#313740';
  Gt(x, $) &&
    e.calculative.canvas.inputDiv.dataset.penId !== e.id &&
    ((O = '#4583FF'),
    (e.calculative.worldTextRect = io($)),
    (e.calculative.hoverType = 'year')),
    Ot(t, $, O, void 0),
    t.fillText(
      `${F}`,
      i + A + (8 / 280) * m + (80 / 280) * m + (8 / 280) * m,
      o + T + (16 / 326) * s,
    ),
    t.restore();
  let V = e.calculative.fontSize;
  Se(t, {
    icon: '',
    x: i + A + (8 / 280) * m + (56 / 280) * m,
    y: o + T + (16 / 326) * s,
    color: '#ffffff',
    iconFamily: 'l-icon',
    fontSize: V,
  }),
    Se(t, {
      icon: '',
      x:
        i + A + (8 / 280) * m + (8 / 280) * m + (80 / 280) * m + (56 / 280) * m,
      y: o + T + (16 / 326) * s,
      color: '#ffffff',
      iconFamily: 'l-icon',
      fontSize: V,
    });
  let N = {
    x: i + (208 / 280) * m - V,
    y: o + T + (16 / 326) * s - V,
    width: V * 2,
    height: V * 2,
  };
  Gt(x, N) &&
    (Ot(t, N, '#00000000', '#313740'), (e.calculative.hoverBtn = 'last')),
    Se(t, {
      icon: '',
      x: i + (208 / 280) * m,
      y: o + T + (16 / 326) * s,
      color: '#ffffff',
      iconFamily: 'l-icon',
      fontSize: V,
    });
  let ut = {
    x: i + (232 / 280) * m - V,
    y: o + T + (16 / 326) * s - V,
    width: V * 2,
    height: V * 2,
  };
  Gt(x, ut) &&
    (Ot(t, ut, '#00000000', '#313740'), (e.calculative.hoverBtn = 'current')),
    Se(t, {
      icon: '',
      x: i + (232 / 280) * m,
      y: o + T + (16 / 326) * s,
      color: '#ffffff',
      iconFamily: 'l-icon',
      fontSize: V,
    });
  let dt = {
    x: i + (256 / 280) * m - V,
    y: o + T + (16 / 326) * s - V,
    width: V * 2,
    height: V * 2,
  };
  Gt(x, dt) &&
    (Ot(t, dt, '#00000000', '#313740'), (e.calculative.hoverBtn = 'next')),
    Se(t, {
      icon: '',
      x: i + (256 / 280) * m,
      y: o + T + (16 / 326) * s,
      color: '#ffffff',
      iconFamily: 'l-icon',
      fontSize: V,
    }),
    t.save(),
    t.beginPath();
  let tt = Vd(F, L);
  e.calculative.calendardata = tt;
  let E = (m - A * 2) / 7,
    D = (s - T * 2 - p - C) / tt.data.length,
    st = 0,
    yt = e.textColor || e.color || '#fff';
  (t.font = Tt({
    fontStyle: n,
    fontWeight: c,
    fontFamily: d || e.calculative.canvas.parent.store.options.fontFamily,
    fontSize: h,
    lineHeight: u,
  })),
    (e.calculative.hoverIndex = -1);
  for (let nt = 0; nt < tt.data.length; nt++)
    for (let bt = 0; bt < 7; bt++) {
      let pt = i + A + bt * E,
        Ct = o + T + p + nt * D,
        Wt = pt + E / 2,
        et = Ct + D / 2;
      (t.fillStyle = yt),
        (st <= tt.start || st >= tt.end) &&
          globalThis.pSBC &&
          (t.fillStyle = '#FFFFFF42'),
        st < 7 && (t.fillStyle = '#FFFFFF66'),
        st >= 7 &&
          st === tt.current &&
          (Ot(
            t,
            {
              x: pt,
              y: Ct,
              width: E,
              height: D,
            },
            '#4583FF00',
            '#001B52',
          ),
          (t.fillStyle = '#4583FF'));
      const { x: xt, y: Ht } = e.calculative.canvas.mousePos;
      st >= 7 &&
        xt > pt &&
        xt < pt + E &&
        Ht > Ct &&
        Ht < Ct + D &&
        (Ot(
          t,
          {
            x: pt,
            y: Ct,
            width: E,
            height: D,
          },
          '#4583FF',
          void 0,
        ),
        (e.calculative.hoverIndex = st),
        (e.calculative.day = tt.data[nt][bt]),
        (e.calculative.hoverType = 'day')),
        e.value === `${e.year}-${e.month}-${tt.data[nt][bt]}` &&
          Ot(
            t,
            {
              x: pt,
              y: Ct,
              width: E,
              height: D,
            },
            '#4583FF',
            void 0,
          ),
        (t.textAlign = 'center'),
        t.fillText(tt.data[nt][bt], Wt, et),
        st++;
    }
  if ((t.restore(), e.calendarType === 'time')) {
    e.hour === void 0 && (e.hour = new Date().getHours()),
      e.minutes === void 0 && (e.minutes = new Date().getMinutes()),
      e.seconds === void 0 && (e.seconds = new Date().getSeconds()),
      t.moveTo(i + m + (a - m) / 2, o + (29 / 326) * s),
      (t.textAlign = 'center'),
      (t.textBaseline = 'middle'),
      (t.font = Tt({
        fontStyle: n,
        fontWeight: c,
        fontFamily: d || e.calculative.canvas.parent.store.options.fontFamily,
        fontSize: h + 3,
        lineHeight: u,
      })),
      (t.fillStyle = '#ffffff'),
      t.fillText(
        `${(e.hour + '').padStart(2, '0')} : ${(e.minutes + '').padStart(
          2,
          '0',
        )} : ${(e.seconds + '').padStart(2, '0')}`,
        i + m + (a - m) / 2,
        o + (29 / 326) * s,
      ),
      (t.font = Tt({
        fontStyle: n,
        fontWeight: c,
        fontFamily: d || e.calculative.canvas.parent.store.options.fontFamily,
        fontSize: h,
        lineHeight: u,
      }));
    let nt = (a - m) / 3,
      bt = qd(e.hour, e.minutes, e.seconds),
      pt = {
        x: i + A + m + nt / 2 - (31 / 496) * m,
        y: o + T + p,
        width: (62 / 496) * m,
        height: s - T - p - C,
      };
    Gt(x, pt) && (e.calculative.hoverType = 'hour');
    let Ct = {
      x: i + A + m + nt / 2 + nt - (31 / 496) * m,
      y: o + T + p,
      width: (62 / 496) * m,
      height: s - T - p - C,
    };
    Gt(x, Ct) && (e.calculative.hoverType = 'minutes');
    let Wt = {
      x: i + A + m + nt / 2 + 2 * nt - (31 / 496) * m,
      y: o + T + p,
      width: (62 / 496) * m,
      height: s - T - p - C,
    };
    Gt(x, Wt) && (e.calculative.hoverType = 'seconds');
    for (let et = 0; et < 3; et++)
      for (let xt = 0; xt < 7; xt++) {
        let Ht = i + A + m + nt / 2 + et * nt,
          ae = o + T + p + xt * D + D / 2;
        (t.fillStyle = '#FFFFFF99'),
          xt === 3 &&
            (Ot(
              t,
              {
                x: Ht - (31 / 496) * m,
                y: ae - (12 / 326) * s,
                width: (62 / 496) * m,
                height: (24 / 326) * s,
              },
              '#ffffff00',
              '#001B52FF',
            ),
            (t.fillStyle = '#4583FFFF')),
          t.fillText(bt[et][xt], Ht, ae);
      }
  }
  t.save(),
    t.beginPath(),
    (t.strokeStyle = '#FFFFFF42'),
    t.moveTo(i, o + s - C),
    t.lineTo(i + a, o + s - C),
    t.stroke();
  let Q = {
      x: i + a - (44 / 280) * m,
      y: o + s - (36 / 326) * s,
      width: (32 / 280) * m,
      height: (24 / 326) * s,
    },
    rt = '#4583FF';
  Gt(x, Q) && ((rt = '#7DA4FF'), (e.calculative.hoverBtn = 'ok')),
    Ot(t, Q, '#00000000', rt),
    (t.fillStyle = '#ffffff'),
    (t.textAlign = 'center'),
    (t.textBaseline = 'middle'),
    (t.font = Tt({
      fontStyle: n,
      fontWeight: c,
      fontFamily: d || e.calculative.canvas.parent.store.options.fontFamily,
      fontSize: h,
      lineHeight: u,
    })),
    t.fillText('确定', i + a - (28 / 280) * m, o + s - (24 / 326) * s),
    e.calendarType === 'time' &&
      ((t.fillStyle = '#4583FF'),
      t.fillText('时间', i + a - (82 / 280) * m, o + s - (24 / 326) * s)),
    t.restore();
}
