import { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const { setOpenModal } = useContext(TodoContext);

  return (
    <div
      className="create-todo-container"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      <button className="create">+</button>
    </div>
  );
}

export { CreateTodoButton };
