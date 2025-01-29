import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Todo() {

  const [todos, setTodos] = useState([]);

  const fetchTodo = async () => {
    try {
      let url = import.meta.env.VITE_APP_URI;
      const rawData = await axios.get(`${url}api/todo`);
      setTodos(rawData.data.todos);
      console.log(rawData.data.todos);
    } catch (error) {
      console.log("Error fetching todos:", error);
      setTodos([]);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div>
      {todos.map(todo => (
        <div className="todo" key={todo._id}>
          <input type="checkbox" name="" id="" />
          <p>{todo.todo}</p>
          <div className="btns">
            <span className="material-symbols-outlined">edit</span>
            <span className="material-symbols-outlined">delete</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
