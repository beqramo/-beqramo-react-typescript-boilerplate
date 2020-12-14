import React, { forwardRef } from 'react';
import { BaseInputStyled } from './BaseInput.styled';
import Input, { InputProps } from 'antd/lib/input';
import { FieldError } from 'react-hook-form';
import { Text } from 'components/styles';

type BaseInputStyledProps = InputProps & {
  inputTitle: boolean;
  Icon?: React.ReactNode;
  inputRef?: React.MutableRefObject<Input | undefined>;
  error?: FieldError | undefined;
};
// eslint-disable-next-line react/display-name
const BaseInput = forwardRef(
  (
    { Icon, error, inputTitle, ...props }: BaseInputStyledProps,
    ref,
  ): React.ReactElement => {
    return (
      <BaseInputStyled
        $error={!!error?.message}
        $inputTitle={inputTitle}
        className={'input-container'}
      >
        <Input
          bordered={false}
          {...props}
          error={error?.message}
          prefix={Icon ? Icon : undefined}
          ref={ref}
        />
        <div className={'input__input-error-container'}>
          <Text fontSize={12} className={'input-error__text'}>
            {error?.message}
          </Text>
          <div>asd</div>
        </div>
      </BaseInputStyled>
    );
  },
);

export default BaseInput;
