import React from 'react';
import { Typography } from 'antd';
import { BaseCopyableStyled } from './BaseCopyable.styled';

const { Paragraph } = Typography;

const BaseCopyable = ({ value }: { value?: string }) => {
  return (
    <BaseCopyableStyled>
      <Paragraph
        copyable={{
          icon: <div />,
          text: value,
          tooltips: ['', 'Copied!'],
        }}
      >
        {value}
      </Paragraph>
    </BaseCopyableStyled>
  );
};

export default BaseCopyable;
