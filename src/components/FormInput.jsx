import React, { useState } from "react";
import styled from "styled-components";
import { elments } from "../helpers/general";

function FormInput({ getTodo}) {
  const [task, setTask] = useState("");

  const getInputValueHandler = (event) => {
    setTask(event.target.value);
  };
  

  const addTodo = () => {
    if (task.trim().length > 0) {
      getTodo(task);
    }
    
    setTask("");
  };

  

  return (
    <DivContainer>
      <FormControl>
        <input
          type="text"
          placeholder="Some text..."
          value={task}
          onChange={getInputValueHandler}
        />
        <button onClick={addTodo}>click</button>
      </FormControl>
    </DivContainer>
  );
}

export default FormInput;

const DivContainer = styled.div`
  width: 500px;
  height: 300px;
  background: whitesmoke;
  border: solid 1px lightblue;
  border-radius: 35px;
  box-shadow: 1px 1px 3px;
  margin: auto;
  padding: 100px;

  & input {
    width: 300px;
    height: 35px;
    outline: none;
    border-radius: 5px;
    border: solid lightblue;
  }
  & button {
    width: 85px;
    height: 35px;
    font-size: 15px;
    background: lightgray;
    border-radius: 10px;
    color: white;
    border: lightskyblue;
    box-shadow: lightseagreen 1px 1px 3px 1px;
  }
  & button:hover {
    background: lightsalmon;
  }
`;

const FormControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
