import React from "react";
import Modal from "./Modal";
import ReactDOM from "react-dom";
import useState from "react";

function UserItem({ id, title, openModal, setOpenMadal, input, deleit }) {
  // function UserItem({ id, title, input,  deleit }) {
  // const [openModal, setOpenMadal] = useState(false);

  return (
    <div>
      <span>{title}</span>
      <span>{input}</span>
      {/* <button onClick={()=>deleit(item.id)}>deleit</button> */}
      {ReactDOM.createPortal(
        <Modal
          open={openModal}
          onClose={() => setOpenMadal(false)}
          id={id}
          deleit={deleit}
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
