
import "./App.css";
import Todo from "./components/Todo.jsx";

function App() {

  return (
    <div className="container">
      {/* Todo title */}
      <h1>Bishal Todo Web App</h1>

      {/* Input field to enter todo task name */}
      <div id="task-field-container">
        <input type="text" name="" id="" placeholder="Enter task" />
        <button>Add</button>
      </div>

      {/* Todo task will be displayed here */}
      <div id="todos">
        <Todo/>
      </div>
    </div>
  );
}

export default App;
