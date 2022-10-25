import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: red;
  width: 200px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  background-color: red;
`;

function Modal({ open, onClose, deleit, id }) {
  if (!open) return null;

  return (
    <Div>
      <p onClick={onClose}>x</p>
     
      <button onClick={() => deleit(id)}>deleit</button>\
    </Div>
  );
}

export default Modal;
