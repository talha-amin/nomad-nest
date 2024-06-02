import React from "react";
import styled from "styled-components";

export default function Button({ text, onClick }) {
  return <Btn onClick={onClick}>{text}</Btn>;
}

const Btn = styled.button`
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  border: none;
  font-size: 1.1rem;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: var(--primary-color-hover); /* assuming you have a hover color variable */
  }
`;
