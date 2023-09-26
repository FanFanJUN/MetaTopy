export enum EventAction {
  Link = 0,
  SetProps = 1,
  StartAnimate = 2,
  PauseAnimate = 3,
  StopAnimate = 4,
  JS = 5,
  GlobalFn = 6,
  Emit = 7,
  StartVideo = 8,
  PauseVideo = 9,
  StopVideo = 10,
  SendPropData = 11,
  SendVarData = 12,
  Navigator = 13,
  Dialog = 14,
  SendData = 15,
  PostMessage = 16,
  PostMessageToParent = 17,
}

export type EventName =
  | 'enter'
  | 'leave'
  | 'active'
  | 'inactive'
  | 'click'
  | 'mousedown'
  | 'mouseup'
  | 'dblclick'
  | 'valueUpdate'
  | 'message';

export const EventHelper = [
  {
    name: '事件类型',
    toolKey: 'name',
    type: 'select',
    options: [
      {
        label: '单击',
        value: 'click',
      },
      {
        label: '选中',
        value: 'active',
      },
      {
        label: '双击',
        value: 'dblclick',
      },
      {
        label: '鼠标移入',
        value: 'enter',
      },
      {
        label: '鼠标移出',
        value: 'leave',
      },
      {
        label: '取消选中',
        value: 'inactive',
      },
      {
        label: '鼠标按下',
        value: 'mousedown',
      },
      {
        label: '鼠标弹起',
        value: 'mouseup',
      },
      {
        label: '值变化',
        value: 'valueUpdate',
      },
    ],
  },
  {
    name: '事件行为',
    toolKey: 'action',
    type: 'select',
    options: [
      {
        label: '发送消息',
        value: EventAction.Emit,
      },
      {
        label: '打开链接',
        value: EventAction.Link,
      },
      {
        label: '更改属性',
        value: EventAction.SetProps,
      },
      {
        label: '执行动画',
        value: EventAction.StartAnimate,
      },
      {
        label: '暂停动画',
        value: EventAction.PauseAnimate,
      },
      {
        label: '停止动画',
        value: EventAction.StopAnimate,
      },
      {
        label: '播放视频',
        value: EventAction.StartVideo,
      },
      {
        label: '暂停视频',
        value: EventAction.PauseVideo,
      },
      {
        label: '停止视频',
        value: EventAction.StopVideo,
      },
      {
        label: '执行JavaScript',
        value: EventAction.JS,
      },
      {
        label: '执行window函数',
        value: EventAction.GlobalFn,
      },
      {
        label: '发送图元数据',
        value: EventAction.SendPropData,
      },
      {
        label: '发送绑定数据',
        value: EventAction.SendVarData,
      },
    ],
  },
  {
    name: '消息名',
    toolKey: 'value',
    type: 'input',
    uiHidden: (value: any) => {
      return value !== 7;
    },
  },
  {
    name: '链接地址',
    toolKey: 'value',
    type: 'input',
    uiHidden: (value: any) => {
      return value !== 0;
    },
  },
  {
    name: '打开方式',
    toolKey: 'params',
    type: 'select',
    options: [
      {
        label: '打开新窗口',
        value: '_blank',
      },
      {
        label: '覆盖当前窗口',
        value: '_self',
      },
    ],
    uiHidden: (value: any) => {
      return value !== 0;
    },
  },
];
