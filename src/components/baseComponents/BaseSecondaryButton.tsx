import { ButtonProps } from 'antd/lib/button';
import React from 'react';
import { BaseSecondaryButtonStyled } from './BaseSecondaryButton.styled';

type BaseSecondaryButtonProps = ButtonProps & {
  title?: string;
  className?: string;
  backgroundColor?: string;
  color?: string;
  active?: boolean;
  withArrow?: boolean;
};

const BaseSecondaryButton = ({
  title,
  className,
  type,
  size,
  withArrow,
  backgroundColor,
  active,
  ...props
}: BaseSecondaryButtonProps): React.ReactElement => {
  return (
    <BaseSecondaryButtonStyled
      className={`btn ${className ?? ''}`}
      {...props}
      $backgroundColor={backgroundColor}
      $withArrow={withArrow}
      $active={active}
      type={type ?? 'ghost'}
      size={size ?? 'large'}
    >
      {title} {withArrow}
    </BaseSecondaryButtonStyled>
  );
};

export default BaseSecondaryButton;
