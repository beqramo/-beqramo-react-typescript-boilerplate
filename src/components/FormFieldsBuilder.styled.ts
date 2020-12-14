import { Row } from 'antd';
import styled, { css } from 'styled-components';

const getProperWidth = ({ index, length }: FieldRowWrapperType) => {
  if (length === 1) return '100%';
  else if (length === 2 && index === 1) {
    return 'auto';
  } else return `${100 / Math.max(length, 3)}%`;
};

const getProperStyles = ({
  $customType,
  index,
  length,
}: FieldRowWrapperType) => {
  if ($customType === 'twoInputInRow') {
    if (index === 0)
      return css`
        padding-right: 0.5rem;
        width: 50%;
      `;
    else if (index === 1)
      return css`
        padding-left: 0.5rem;
        width: 50%;
      `;
  }
  if ($customType === 'twoField2/5') {
    if (index === 0)
      return css`
        padding-right: 0.5rem;
        width: 30%;
      `;
    else if (index === 1)
      return css`
        padding-left: 0.5rem;
        width: 70%;
      `;
  } else {
    return css`
      width: ${getProperWidth({ index, length })};
    `;
  }
};

type FieldRowWrapperType = {
  index: number;
  length: number;
  $customType?: 'twoInputInRow' | 'twoField2/5';
};

export const FieldRowWrapper = styled(Row)<FieldRowWrapperType>`
  ${({ index, length, $customType }) =>
    getProperStyles({ index, length, $customType })};

  .ant-input-textarea {
    width: 100%;
  }
`;
