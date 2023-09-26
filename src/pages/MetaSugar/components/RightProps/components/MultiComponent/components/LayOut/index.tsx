import { useMeta } from '@/pages/MetaSugar/context';
import { useSetState } from 'ahooks';
import { Button, InputNumber } from 'antd';
import React from 'react';
import styles from './index.less';

const LayOut: React.FunctionComponent = () => {
  const { meta2d } = useMeta();
  const [state, setState] = useSetState({
    width: undefined,
    space: 30,
  });
  const layoutList = [
    {
      name: '最大宽度',
      type: 'inputNumber',
      toolKey: 'width',
    },
    {
      name: '间距',
      type: 'inputNumber',
      toolKey: 'space',
    },
  ];

  const _handleChange = (value: any, item: any) => {
    //@ts-ignore
    setState({ [item.toolKey]: value });
  };
  return (
    <div className={styles.layout}>
      <div className={styles.layout_content}>
        {layoutList.map((item) => {
          return (
            <div data-item key={item.toolKey}>
              <span>{item.name}</span>
              <InputNumber
                value={state[item.toolKey]}
                onChange={(value: any) => _handleChange(value, item)}
              />
            </div>
          );
        })}
      </div>
      <Button
        type="primary"
        onClick={() => {
          meta2d.layout(undefined, state.width, state.space);
          meta2d.render();
        }}
      >
        开始排版
      </Button>
    </div>
  );
};

export default LayOut;
