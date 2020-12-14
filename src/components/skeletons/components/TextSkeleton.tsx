import React from 'react';
import { TextSkeletonStyled } from './TextSkeleton.styled';

type TextSkeletonProps = {
  width?: string;
};
const TextSkeleton = ({ width }: TextSkeletonProps) => {
  return <TextSkeletonStyled active={true} size={'small'} width={width} />;
};

export default TextSkeleton;
