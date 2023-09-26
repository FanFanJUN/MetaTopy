import { useMeta } from '@/pages/MetaSugar/context';
import { ArrowDownOutlined, ArrowRightOutlined } from '@ant-design/icons';
import type { Event } from '@meta2d/core';
import { useSetState } from 'ahooks';
import { Button, Input, Select } from 'antd';
import { cloneDeep, omit } from 'lodash';
import React from 'react';
import { EventAction, EventHelper } from './helper';
import styles from './index.less';

interface IAppProps {}

interface Ev extends Event {
  index: number;
}

const Events: React.FunctionComponent<IAppProps> = (props) => {
  const { meta2d } = useMeta();
  const [state, setState] = useSetState({
    eventList: meta2d?.store?.active?.[0]?.events || [],
    expandKeys: [],
  });

  const _handleOp = (eType: string, value?: Ev) => {
    let cloneEvents = cloneDeep(state.eventList);
    let cloneKeys = cloneDeep(state.expandKeys);
    switch (eType) {
      case 'add':
        cloneEvents.push({
          name: 'click',
          action: EventAction.Emit,
        });
        cloneKeys.push(cloneEvents.length - 1);
        break;
      case 'down':
        cloneKeys.push(value.index);
        break;
      case 'up':
        cloneKeys = cloneKeys.filter((item) => item !== value.index);
        break;
      case 'del':
        cloneEvents = cloneEvents.filter((item, i) => i !== value.index);
        break;
      case 'change':
        cloneEvents[value.index] = omit(
          { ...cloneEvents[value.index], ...value },
          'index',
        );
        break;
      default:
        break;
    }
    setState({ eventList: cloneEvents, expandKeys: cloneKeys });
    meta2d.setValue({ id: meta2d?.store.active?.[0].id, events: cloneEvents });
    meta2d.render();
  };

  const _renderComp = (value: Event, item: any) => {
    if (item.type === 'input') {
      return (
        <Input
          value={value.value}
          onChange={(e: any) =>
            _handleOp('change', { ...value, [item.toolKey]: e.target.value })
          }
        />
      );
    } else if (item.type === 'select') {
      return (
        <Select
          value={value[item.toolKey]}
          options={item.options}
          onChange={(val: any) =>
            _handleOp('change', { ...value, [item.toolKey]: val })
          }
        />
      );
    }
  };

  const _renderContent = (value: Ev) => {
    return EventHelper.map((item) => {
      if (item.uiHidden) {
        const uiHidden = item.uiHidden(value.action);
        if (uiHidden) {
          return null;
        }
      }
      return (
        <div data-event-item key={item.toolKey}>
          <span data-name>{item.name}</span>
          <span data-comp>{_renderComp(value, item)}</span>
        </div>
      );
    });
  };

  return (
    <div className={styles.events}>
      <Button type="primary" onClick={() => _handleOp('add')}>
        添加事件
      </Button>
      <div className={styles.events_list}>
        {state.eventList.map((item, index) => {
          const isShow = state.expandKeys.some((s) => s === index);
          return (
            <div key={index} data-event>
              <header>
                {`事件${index + 1}`}
                <div className={styles.headerRight}>
                  <i
                    className="t-icon t-shanchu"
                    title="删除"
                    onClick={() => _handleOp('del', { ...item, index })}
                  />
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      _handleOp(!isShow ? 'down' : 'up', { ...item, index })
                    }
                  >
                    {isShow ? <ArrowDownOutlined /> : <ArrowRightOutlined />}
                  </span>
                </div>
              </header>
              {isShow && _renderContent({ ...item, index })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
