/* eslint-disable @typescript-eslint/no-unused-expressions */
function he(t, e) {
  const { shadowColor: i, blur: o } = e;
  (t.shadowBlur = o), (t.shadowColor = i);
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

function Nt(t, e, i, o, a) {
  a && (t.font = Tt(a));
  const { x: s, y: r } = i;
  for (let [l, n] of Object.entries(o)) t[l] = n;
  t.fillText(e, s, r);
}
export default function Ru(t, e) {
  let {
    x: i,
    y: o,
    width: a,
    height: s,
    ex: r,
    ey: l,
  } = e.calculative.worldRect;
  if (!e.data || !Array.isArray(e.data)) return;
  let n = e.calculative.borderRadius || 0,
    c = n;
  n < 1 && ((n = a * n), (c = s * c));
  let h = n < c ? n : c;
  a < 2 * h && (h = a / 2), s < 2 * h && (h = s / 2);
  let d = s / e.data.length;
  const {
      fontStyle: u,
      fontWeight: f,
      fontSize: g,
      fontFamily: v,
      lineHeight: m,
    } = e.calculative,
    T = {
      fontStyle: u,
      fontWeight: f,
      fontFamily: v || e.calculative.canvas.parent.store.options.fontFamily,
      fontSize: g,
      lineHeight: m,
    },
    A = e.borderWidth,
    p = 'start';
  let C = e.calculative.canvas.store.data.scale,
    x = 10,
    F;
  e.data.forEach((L, S) => {
    let H = o + d * S,
      $ = d - x * C;
    t.beginPath(),
      (t.fillStyle = e.background || '#282E3B'),
      (t.strokeStyle = e.borderColor || '#424B61'),
      t.moveTo(i + h, H),
      t.arcTo(r, H, r, H + $, h),
      t.arcTo(r, H + $, i, H + $, h),
      t.arcTo(i, H + $, i, H, h),
      t.arcTo(i, H, r, H, h),
      A && t.stroke(),
      he(t, {
        blur: 30,
        shadowColor: '#0000000D',
      }),
      t.fill(),
      he(t, {
        blur: 0,
      });
    let O = 10,
      V = 20;
    if ((e.iconSize || 40 * C, L.image, t.beginPath(), L.title)) {
      F = e.headingColor || e.textColor || e.color || '#FFFFFFE6';
      let N = {
        fontStyle: u,
        fontWeight: f,
        fontFamily: v || e.calculative.canvas.parent.store.options.fontFamily,
        fontSize: (e.headingSize || g) * C,
        lineHeight: m,
      };
      Nt(
        t,
        L.title,
        {
          x: i + O * C,
          y: H + V * C,
        },
        {
          textAlign: p,
          textBaseline: 'middle',
          fillStyle: F,
        },
        N,
      ),
        (V += (e.headingSize || g) * m);
    }
    t.beginPath(),
      L.description &&
        ((F = jt(e) || '#FFFFFF99'),
        Nt(
          t,
          L.description,
          {
            x: i + O * C,
            y: H + V * C,
          },
          {
            textAlign: p,
            textBaseline: 'middle',
            fillStyle: F,
          },
          T,
        ));
  });
}
