import React, { forwardRef, useCallback, useContext } from 'react';
import { BaseCheckboxStyled } from './BaseCheckbox.styled';
import { CheckboxProps } from 'antd/lib/checkbox';
import { Text } from 'components/styles';
import { ThemeContext } from 'styled-components';

// eslint-disable-next-line react/display-name
const BaseCheckbox = forwardRef(
  ({ value, label, ...props }: CheckboxProps & { label?: string }, ref) => {
    const { fontFamilies } = useContext(ThemeContext);

    const onChange = useCallback(
      (e) => {
        props.onChange?.(e.target.checked);
      },
      [props.onChange],
    );
    return (
      <BaseCheckboxStyled
        {...props}
        className={'flex flex-center flex-row checkbox'}
        defaultChecked={value}
        onChange={onChange}
        ref={ref}
      >
        <Text color={'#000000'} fontFamily={fontFamilies.semiBold}>
          {label ?? 'check'}{' '}
        </Text>
      </BaseCheckboxStyled>
    );
  },
);

export default BaseCheckbox;
