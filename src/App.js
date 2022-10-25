import React, { useState } from "react";
import UserForm from "./components/UserForm";
import Userlist from "./components/Userlist";
// import Modal from "./components/Modal";
import UserItem from "./components/UserItem";
// import AitemInfo from "./components/AitemInfo";

function App() {
  const [todo, setTodo] = useState([]);

  function addTask(input, input2) {
    setTodo([
      ...todo,
      {
        input: input2,
        title: input,
        id: Math.random(),
      },
    ]);
  }

  function deleit(idData) {
    setTodo(todo.filter((id) => id.id !== idData));
  }

  return (
    <div>
      <UserForm addTask={addTask} />
      <Userlist todo={todo} deleit={deleit} />
      {/* <Modal deleit={deleit} todo={todo}/> */}
      {/* <AitemInfo /> */}
    </div>
  );
}

export default App;
