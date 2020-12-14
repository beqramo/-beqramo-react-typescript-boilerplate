import { Col } from 'antd';
import TextSkeleton from './components/TextSkeleton';
import React from 'react';
import { HomePageTableHeadStyled } from './HomePageTableHead.styled';

const HomePageTableHead = () => {
  return (
    <HomePageTableHeadStyled align={'middle'}>
      <Col offset={4} span={4}>
        <TextSkeleton />
      </Col>
      <Col xxl={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 1 }}>
        <TextSkeleton />
      </Col>
      <Col xxl={{ span: 2, offset: 1 }} lg={{ span: 3, offset: 1 }}>
        <TextSkeleton />
      </Col>
      <Col offset={2} span={2}>
        <TextSkeleton width={'100%'} />
      </Col>
    </HomePageTableHeadStyled>
  );
};

export default HomePageTableHead;
