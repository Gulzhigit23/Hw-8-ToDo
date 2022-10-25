import React from "react";
import "./type.css"

function Modal({ onClose, deleit, id }) {
  return (
    <div className="Div">
      <p onClick={onClose}>{id}</p>
      <button onClick={deleit}>deleit</button>\
    </div>
  );
}


export default Modal;
