import React, { useEffect, useState } from 'react';
import { Input, Button } from 'antd';
import Dropdown from 'antd/lib/dropdown';
import { SketchPicker } from 'react-color';
import styles from './index.less';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
interface IColorProps {
  onChange?: Function;
  value?: string;
  size?: SizeType;
  placeholder?: string;
}

export default function ColorPicker(props: IColorProps) {
  const { value, onChange, size, placeholder } = props;

  const [visible, setVisible] = useState(false);

  const handleChange = (color: { hex: React.SetStateAction<string> }) => {
    onChange?.(color.hex);
  };

  useEffect(() => {}, []);

  const overlay = (
    <section>
      <SketchPicker
        color={value}
        enableAlpha={false}
        onChangeComplete={handleChange}
        width={260}
      />
    </section>
  );

  const _handleVisibleChange = (
    flag: boolean | ((prevState: boolean) => boolean),
  ) => {
    setVisible(flag);
  };

  return (
    <section className={styles.selectwrap}>
      <Input
        size={size}
        readOnly
        value={value}
        onChange={(e) => handleChange({ hex: e.target.value })}
        placeholder={placeholder}
        suffix={
          <Dropdown
            trigger={['click']}
            overlay={overlay}
            visible={visible}
            onVisibleChange={_handleVisibleChange}
          >
            <Button
              style={{ background: value, width: '30px', height: '22px' }}
              size={size}
            >
              {' '}
            </Button>
          </Dropdown>
        }
      />
    </section>
  );
}
