import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContentWrapper = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-height: 80%;
  overflow-y: auto;
  border-radius: 10px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 10px;
`;

const ModalTitle = styled.h2`
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
  transform: translateX(2217px);

`;

const ModalBody = styled.div`
  padding-top: 10px;
  h3 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  h4, h5 {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
  }
  p {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }
  strong {
    display: inline-block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  ul {
    padding-left: 1.5rem;
  }
`;

const Modal = ({ show, onClose, title, children }) => (
  <ModalWrapper show={show}>
    <ModalContentWrapper>
      <ModalHeader>
        {/* <ModalTitle>{title}</ModalTitle> */}
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
    </ModalContentWrapper>
  </ModalWrapper>
);

export default Modal;
