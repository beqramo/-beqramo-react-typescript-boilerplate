import { Radio } from 'antd';
import { RadioChangeEvent, RadioProps } from 'antd/lib/radio';
import { Text } from 'components/styles';
import React, { forwardRef, useContext } from 'react';
import { BaseRadioGroupStyled } from './BaseRadioGroup.styled';
import { ThemeContext } from 'styled-components';

type BaseRadioGroupProps = {
  itemsArray?: {
    label: string;
    value: string;
  }[];
} & RadioProps;

// eslint-disable-next-line react/display-name
const BaseRadioGroup = forwardRef(
  ({ itemsArray, ...props }: BaseRadioGroupProps, ref) => {
    const { fontFamilies } = useContext(ThemeContext);

    const onChange = (e: RadioChangeEvent) => {
      props.onChange?.(e.target.value);
    };
    return (
      <BaseRadioGroupStyled
        {...props}
        ref={ref}
        onChange={onChange}
        className={'flex flex-row radio-group-container'}
      >
        {itemsArray?.map(({ value, label }, index) => (
          <Radio key={index} value={value}>
            <Text
              color={'#000000'}
              fontSize={16}
              fontFamily={fontFamilies.semiBold}
            >
              {label}
            </Text>
          </Radio>
        ))}
        {itemsArray?.length === 2 ? <div style={{ flex: 1 }}></div> : null}
      </BaseRadioGroupStyled>
    );
  },
);

export default BaseRadioGroup;
