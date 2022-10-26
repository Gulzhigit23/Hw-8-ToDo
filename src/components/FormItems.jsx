import React, { useState } from "react";
import styled from "styled-components";
import classes from "./checked.module.css";
function FormItems({ todos, setTodos }) {
  

  const removeTaskHandler = (id) => {
    const newTodos = todos.filter((items) => items.id !== id);
    setTodos(newTodos);
  };

  const isCompleted = (id) => {
    const newCompleted = todos.map((item) => {
      return item.id === id
        ? { ...item, completed: !item.completed }
        : { ...item };
    });
    setTodos(newCompleted);
  };

  return (
    <Ulcontent>
      {todos.map((item) => {
        return (
          <>
            <li onClick={() => isCompleted(item.id)} key={item.id}>
              <span
                className={item.completed ? classes.checked : classes.nochecked}
              >
                {item.title}
                
              </span>
            </li>
            <Button onClick={() => removeTaskHandler(item.id)}></Button>
          </>
        );
      })}
    </Ulcontent>
  );
}

export default FormItems;

const Ulcontent = styled.ul`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  & li {
    list-style-type: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    width: 405px;
    height: 45px;
    background: lightgray;
    text-align: center;
    border-radius: 10px;
    padding-top: 8px;
  }
  & button:hover {
    background: red;
  }

  &span {
    text-decoration: ${(props) =>
      props.completed ? "" : " text-decoration: line-through;"};
  }
`;

const Button = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: green;
  position: relative;
  left: 250px;
  bottom: 40px;
`;
