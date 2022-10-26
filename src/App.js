import { useState } from "react";
import styled from "styled-components";
import FormInput from "./components/FormInput";
import FormItems from "./components/FormItems";
import { elments } from "./helpers/general";

function App() {
  const [todos, setTodos] = useState(elments);

  const addTodo = (task) => {
    setTodos([
      ...todos,

      {
        title: task,
        id: Math.random(),
        completed: false,
      },
    ]);
  };

  return (
    <div className="App">
      <FormInput getTodo={addTodo} />
      {todos.length > 0 ? (
        <FormItems todos={todos} setTodos={setTodos} />
      ) : (
        <Paragraph> No todos</Paragraph>
      )}
    </div>
  );
}

export default App;

const Paragraph = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  width: 405px;
  height: 45px;
  background: lightgreen;
  text-align: center;
  border-radius: 10px;
  margin: auto;
  margin-top: 20px;
  padding-top: 10px;
`;
