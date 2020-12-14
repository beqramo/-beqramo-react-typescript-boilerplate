import React, { useMemo } from 'react';
import { ModalCustomStyled } from './ModalCustom.styled';
import { ModalProps } from 'antd/lib/modal';

export enum ModalTypeEnum {
  DEFAULT,
}

type ModalCustomPropsType = {
  children?: React.ReactNode;
  type: ModalTypeEnum;
  data: CommonModalPropsType;
} & ModalProps;

const ModalCustom = ({
  children,
  type,
  data,
  ...props
}: ModalCustomPropsType): React.ReactElement => {
  const renderChildren = useMemo(() => {
    switch (type) {
      case ModalTypeEnum.DEFAULT:
        data as CommonModalPropsType;
        return <div>modal</div>;

      default:
        return <div> not supported{children}</div>;
    }
  }, [type, data, children]);

  return (
    <ModalCustomStyled
      destroyOnClose
      footer={null}
      closeIcon={<></>}
      {...props}
    >
      {renderChildren}
    </ModalCustomStyled>
  );
};

export default ModalCustom;
