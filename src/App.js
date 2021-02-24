import "bootstrap/dist/css/bootstrap.min.css";
import uuidv4 from "uuid";
import TodoInput from "./Components/TodoInput";
import TodoItem from "./Components/TodoItem";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
