import { useState } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import "./App.css";

const defaultTodos = [
  { text: "Terminar el curso de React", completed: false },
  { text: "Terminar el curso de Node", completed: false },
  {
    text: "Continuar la escuela de desarrollo web.",
    completed: true,
  },
  { text: "Cortar cebolla", completed: false },
  { text: "Cortar cebolla", completed: false },
  { text: "Cortar cebolla", completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchedValue, setSearchedValue] = useState("");
  console.log(searchedValue);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchedValue.toLowerCase())
  );

  return (
    <div className="App test">
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchedValue={searchedValue}
        setSearchedValue={setSearchedValue}
      />
      <TodoList>
        {searchedTodos.map((todo, i) => (
          <TodoItem key={i} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
