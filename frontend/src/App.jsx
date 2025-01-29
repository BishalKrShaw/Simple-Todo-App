import "./App.css";

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
        <div className="todo">
          <input type="checkbox" name="" id="" />
          <p>Become and Stay Wealthy</p>
          <div className="btns">
            <span class="material-symbols-outlined">edit</span>
            <span class="material-symbols-outlined">delete</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
