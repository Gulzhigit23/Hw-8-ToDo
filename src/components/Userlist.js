import React from "react";
import UserItem from "./UserItem";

function Userlist({ todo, deleit }) {
  return (
    <div>
      {todo.map((item) => {
        return (
          <UserItem
            key={item.id}
            id={item.id}
            title={item.title}
            input={item.input}
            deleit={deleit}
          />
        );
      })}
    </div>
  );
}

export default Userlist;
