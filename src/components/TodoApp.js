import React, { useState } from "react";
import { Todo } from "./Todo";

export const TodoApp = () => {
  const [title, setTitle] = useState("hello");
  const [todos, setTodos] = useState([]);

  //otra forma de hacer el handleClick
  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     setTitle("Robert");
  //   };
  //   function handleClick(e) {
  //     e.preventDefault();
  //     setTitle("Robert");
  //   }

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setTitle(value);
  };
  //Segunda forma de hacer el handleChange
  //   function handleChange(e) {
  //     const value = e.target.value;
  //     console.log(value);
  //     setTitle(value);
  //   }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    //otra forma
    // const temp = [...todos];
    // temp.unshift(newTodo)
    // setTodos(temp);
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input className="todoInput" value={title} onChange={handleChange} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create todo"
          className="buttonCreate"
        />
      </form>
      <div className="todosContainer">
        {todos.map((item) => (
          <div>
            <Todo
              item={item}
              key={item.id}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
