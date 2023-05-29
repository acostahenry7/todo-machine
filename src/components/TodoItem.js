import "./css/TodoItem.css";
import { IoCheckmarkSharp, IoClose } from "react-icons/io5";

function TodoItem({ text, completed }) {
  return (
    <li className="todo-list-item">
      <div className="todo-list-text-container">
        <p className={`text ${completed && "text-complete"}`}>{text}</p>
      </div>

      <div className="actions">
        <IoCheckmarkSharp className={`check ${completed && "complete"}`} />
        <IoClose className="delete" />
      </div>
    </li>
  );
}

export { TodoItem };
