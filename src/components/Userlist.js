import React, { useState } from "react";
import UserItem from "./userItem";
function Userlist({ todo, deleit }) {
  const [openModal, setOpenMadal] = useState(false);
  return (
    <div>
      {todo.map((item) => {
        return (
          <>
            <UserItem key={item.id}
              id={item.id}
              title={item.title}
              input={item.input}
              openModal={openModal}
              setOpenMadal={setOpenMadal}
              deleit={deleit}
            />
          </>
        );
      })}
    </div>
  );
}

export default Userlist;
