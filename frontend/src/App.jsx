
import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo.jsx";
import axios from "axios";

function App() {

  const [task, setTask] = useState();

  let url = import.meta.env.VITE_APP_URI;

  const createTodo = async() => {
    const response = await axios.post(`${url}api/todo`, {
      todo: task,
      isCompleted: false
    });
    console.log("Added todo:", response.data);
  }

  return (
    <div className="container">
      {/* Todo title */}
      <h1>Bishal Todo Web App</h1>

      {/* Input field to enter todo task name */}
      <div id="task-field-container">
        <input type="text" name="" id="" placeholder="Enter task" value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={createTodo}>Add</button>
      </div>

      {/* Todo task will be displayed here */}
      <div id="todos">
        <Todo/>
      </div>
    </div>
  );
}

export default App;
