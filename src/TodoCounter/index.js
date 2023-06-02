import { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h1 className="main-title">
      Haz completado <br /> <b>{completedTodos}</b> de <b>{totalTodos}</b> TODOS
    </h1>
  );
}

export { TodoCounter };
