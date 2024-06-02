import React from 'react';
import styled from 'styled-components';
import Form from './Form';

const Modal = ({ handleClose }) => {
  return (
    <ModalBackground>
      <ModalContent>
        <button className="close-button" onClick={handleClose}>×</button>
        <Form handleClose={handleClose} />
      </ModalContent>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  position: relative;
  width: 80%;
  max-width: 500px;
  animation: slideIn 0.5s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @keyframes slideIn {
    from { transform: translateY(-20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #000;
  }
`;

export default Modal;
