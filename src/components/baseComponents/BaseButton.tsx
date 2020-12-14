import { ButtonProps } from 'antd/lib/button';
import React from 'react';
import { BaseButtonStyled } from './BaseButton.styled';

type BaseButtonProps = ButtonProps & {
  text?: string;
  className?: string;
  backgroundColor?: string;
  color?: string;
  active?: boolean;
};

const BaseButton = ({ text, className, ...props }: BaseButtonProps) => {
  return (
    <BaseButtonStyled className={`btn--add-new ${className ?? ''}`} {...props}>
      {text}
    </BaseButtonStyled>
  );
};

export default BaseButton;
