import { Button } from 'antd';
import type { CSSProperties } from 'react';
import React from 'react';
import type { ICommon } from '../index';

interface IAppProps extends ICommon {
  style: CSSProperties;
}

const AntdButton: React.FunctionComponent<IAppProps> = (props) => {
  const { pen } = props;
  const { customAttribute = {} } = pen;
  return (
    <Button
      {...customAttribute}
      style={{
        width: '100%',
        height: '100%',
        color: pen?.textColor,
        background: pen.background,
      }}
    >
      {customAttribute.text ?? '-'}
    </Button>
  );
};

export default AntdButton;
