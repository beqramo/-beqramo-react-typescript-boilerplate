import React, { forwardRef } from 'react';
import { InputProps } from 'antd/lib/input';
import { BaseInput } from 'components/baseComponents';
import { Text } from 'components/styles';
import { FieldError } from 'react-hook-form';
import { AuthInputStyled } from './AuthInput.styled';

type AuthInputPropsType = InputProps & {
  Icon?: React.ReactNode;
  label: string;
  error: FieldError | undefined;
};
// eslint-disable-next-line react/display-name
const AuthInput = forwardRef(
  (
    { name, label, error, ...props }: AuthInputPropsType,
    ref,
  ): React.ReactElement => {
    return (
      <AuthInputStyled>
        <label htmlFor={name}>
          <Text fontSize={16} color={error ? '#f81d22' : '#C1C9D6'}>
            {label}
          </Text>
          <BaseInput
            id={name}
            name={name}
            inputTitle={false}
            {...props}
            ref={ref}
            error={error}
          />
        </label>
      </AuthInputStyled>
    );
  },
);

export default AuthInput;
