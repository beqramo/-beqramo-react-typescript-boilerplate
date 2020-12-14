import styled from 'styled-components';
import { Skeleton } from 'antd';

type TextSkeletonStyledProps = {
  width?: string;
};

export const TextSkeletonStyled = styled(
  Skeleton.Button,
)<TextSkeletonStyledProps>`
  width: ${({ width }) => width ?? '8rem'};
  span {
    width: 100% !important;
  }
`;
