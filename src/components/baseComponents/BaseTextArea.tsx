import React from 'react';
import { BaseTextAreaStyled } from './BaseTextArea.styled';
import { TextAreaProps } from 'antd/lib/input';

const BaseTextArea = (props: TextAreaProps) => {
  return <BaseTextAreaStyled bordered={false} {...props} />;
};

export default BaseTextArea;
