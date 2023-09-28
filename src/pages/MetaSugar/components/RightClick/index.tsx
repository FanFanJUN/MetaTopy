import type { Pen } from '@meta2d/core';
import { useClickAway } from 'ahooks';
import { useEffect, useRef, useState } from 'react';
import { useMeta } from '../../context';
import type { FloatMenuProps } from './helper';
import {
  FLOAT_CANVAS,
  FLOAT_ENUM,
  FLOAT_ID_ENUM,
  FLOAT_ONE,
  FLOAT_OR,
} from './helper';
import styles from './index.less';

function RightClickFloat(props) {
  const [isShow, setShow] = useState(false);
  const [bounds, setBounds] = useState<any>({});
  const [float, setFloat] = useState([]);
  const infoRef = useRef<HTMLDivElement>(null);

  const { meta2d } = useMeta();

  const showContextMenu = (e) => {
    let floatArr: any = [];
    floatArr = [...FLOAT_ENUM];
    const activeArr = meta2d?.store?.active || [];
    const activeLen = activeArr?.length;
    const activeChildrenL = meta2d?.store?.active?.[0]?.children?.length > 1;
    const floatMenuEnum = !activeLen
      ? FLOAT_CANVAS
      : activeLen === 1
      ? activeChildrenL
        ? [...FLOAT_ONE, FLOAT_ID_ENUM.combine]
        : FLOAT_ONE
      : FLOAT_OR;

    if (activeLen < 2) {
      if (activeChildrenL)
        floatArr = floatArr?.filter(
          (f: FloatMenuProps) => ![FLOAT_ID_ENUM.makeupStatus].includes(f?.id),
        );
      else
        floatArr = floatArr?.filter(
          (f: FloatMenuProps) =>
            ![FLOAT_ID_ENUM.combine, FLOAT_ID_ENUM.makeupStatus].includes(
              f?.id,
            ),
        );
    }
    floatArr?.forEach((f: FloatMenuProps) => {
      f.noDrop = false;
      // @ts-ignore
      if (f?.id === FLOAT_ID_ENUM.combine || f?.name === FLOAT_ID_ENUM.combine)
        f.left = activeChildrenL ? '取消组合' : '组合';
      if (activeLen && f?.id === FLOAT_ID_ENUM.lock)
        f.left = activeArr[0]?.locked ? '解锁' : '锁定';
      if (
        floatMenuEnum?.includes(f?.id) ||
        (Object.keys(meta2d?.store?.pens)?.length &&
          f?.id === FLOAT_ID_ENUM.undo) ||
        (meta2d?.store?.histories?.length && f?.id === FLOAT_ID_ENUM.redo)
      )
        f.noDrop = true;
    });
    setFloat(floatArr);
    setBounds(e?.e || {});
    setShow(true);
  };

  const hideContextMenu = () => {
    setShow(false);
  };

  useEffect(() => {
    if (meta2d) {
      // 右键菜单
      meta2d.on('contextmenu', showContextMenu);
      // 点击画布
      meta2d.on('click', hideContextMenu);
    }
  }, []);

  const pensList = async (type: string = '', propsType: string = '') => {
    const { config } = props;
    const topology: any = meta2d;
    let pens: Pen[] = topology?.store?.data?.pens || [];
    if (
      [
        FLOAT_ID_ENUM.uncombinem,
        FLOAT_ID_ENUM.combine,
        FLOAT_ID_ENUM.lock,
        FLOAT_ID_ENUM.delete,
        FLOAT_ID_ENUM.top,
        FLOAT_ID_ENUM.bottom,
        FLOAT_ID_ENUM.up,
        FLOAT_ID_ENUM.down,
        FLOAT_ID_ENUM.cut,
        FLOAT_ID_ENUM.copy,
      ].includes(type)
    ) {
      pens = topology?.store?.active || [];
    }
    if (!pens?.length) return;
    if (propsType === 'many') {
      if (type === FLOAT_ID_ENUM.delete) {
        for (const item of pens) {
          item.locked = 0;
        }
      }
      topology[type](pens);
    } else if (propsType === 'single') {
      for (const item of pens) {
        topology[type](item);
      }
    } else if (propsType === 'attribute') {
      const lockInfo: FloatMenuProps = float?.filter(
        (f: FloatMenuProps) => f?.id === FLOAT_ID_ENUM.lock,
      )[0];
      for (const item of pens) {
        const LockState =
          config?.globalStaticData?.projectType === '光伏' ? 10 : 2;
        switch (type) {
          case FLOAT_ID_ENUM.lock:
            item.locked = lockInfo?.left === '解锁' ? 0 : LockState;
            break;
        }
      }
    } else {
      topology[type]();
    }
  };

  const menuClick = (slide: FloatMenuProps) => {
    const activeChildrenL = meta2d?.store?.active[0]?.children?.length > 1,
      activeL = meta2d?.store?.active?.length < 2;
    const activePens = meta2d?.store?.active || [];
    switch (slide?.id) {
      case FLOAT_ID_ENUM.top:
        pensList(FLOAT_ID_ENUM.top, 'single');
        break;
      case FLOAT_ID_ENUM.bottom:
        pensList(FLOAT_ID_ENUM.bottom, 'single');
        break;
      case FLOAT_ID_ENUM.up:
        pensList(FLOAT_ID_ENUM.up, 'single');
        break;
      case FLOAT_ID_ENUM.down:
        pensList(FLOAT_ID_ENUM.down, 'single');
        break;
      case FLOAT_ID_ENUM.delete:
        pensList(FLOAT_ID_ENUM.delete, 'many');
        break;
      case FLOAT_ID_ENUM.undo:
        pensList(FLOAT_ID_ENUM.undo);
        break;
      case FLOAT_ID_ENUM.redo:
        pensList(FLOAT_ID_ENUM.redo);
        break;
      case FLOAT_ID_ENUM.paste:
        pensList(FLOAT_ID_ENUM.paste);
        break;
      case FLOAT_ID_ENUM.cut:
        pensList(FLOAT_ID_ENUM.cut, 'many');
        break;
      case FLOAT_ID_ENUM.copy:
        pensList(FLOAT_ID_ENUM.copy, 'many');
        break;
      case FLOAT_ID_ENUM.combine:
        pensList(
          activeL && activeChildrenL
            ? FLOAT_ID_ENUM.uncombine
            : FLOAT_ID_ENUM.combine,
          activeL && activeChildrenL ? 'single' : 'many',
        );
        break;
      case FLOAT_ID_ENUM.lock:
        pensList(FLOAT_ID_ENUM.lock, 'attribute');
        break;
      case FLOAT_ID_ENUM.makeupStatus:
        meta2d.combine(activePens, 0); // meta2d.combine(pens, showChild)若组合成状态，showChild 必填
        break;
      default:
        break;
    }
    setShow(false);
  };
  useClickAway(
    () => {
      setShow(false);
    },
    () => document.getElementById('right-click-float'),
  );

  return isShow ? (
    <div className={styles.float}>
      <div
        id={'right-click-float'}
        ref={infoRef}
        className={styles.float_info}
        style={{
          top: bounds?.clientY - 50 || 0,
          left: bounds?.clientX - 220 || 0,
        }}
      >
        {float.map((f: FloatMenuProps, i) => {
          switch (f?.type) {
            case 'line':
              return <div key={i} className={styles.float_info_line} />;
            case 'text':
              return (
                <div
                  key={i}
                  onClick={() => menuClick(f)}
                  data-type={f?.type}
                  className={`${styles.float_info_slide} ${
                    f?.noDrop ? styles.float_info_slide_noDrop : ''
                  }`}
                >
                  {f?.left ? <span>{f?.left}</span> : null}
                  {f?.right ? <span>{f?.right}</span> : null}
                </div>
              );
            default:
              break;
          }
          return null;
        })}
      </div>
    </div>
  ) : null;
}

export default RightClickFloat;
