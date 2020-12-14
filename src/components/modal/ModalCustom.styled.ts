import styled from 'styled-components';
import Modal from 'antd/lib/modal/Modal';

export const ModalCustomStyled = styled(Modal)`
  .ant-modal-content {
    border-radius: 10px;
    box-shadow: 0px 0px 20px #543fc84f;
    .ant-modal-body {
      padding: 2.3rem 0;
    }
  }
`;
