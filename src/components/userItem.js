import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import ReactDOM from "react-dom";

function UserItem({ id, title, input, deleit }) {
  const [openModal, setOpenMadal] = useState(false);
  return (
    <div>
      <span>{title}</span>
      <span>{input}</span>
      {openModal &&
        ReactDOM.createPortal(
          <Modal
            id={title}
            onClose={() => setOpenMadal(false)}
            deleit={() => deleit(id)}
          />,
          document.getElementById("portal")
        )}
      <button onClick={() => setOpenMadal((prevState) => !prevState)}>
        modal
      </button>
    </div>
  );
}

export default UserItem;
