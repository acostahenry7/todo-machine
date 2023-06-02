import "./TodoItemSkeleton.css";
import {
  IoCheckmarkSharp as CompleteIcon,
  IoClose as DeleteIcon,
} from "react-icons/io5";

function TodoItemSkeleton({}) {
  return (
    <li className="skeleton-todo-list-item">
      <div className="skeleton-todo-list-text-container">
        <p className="text"></p>
      </div>

      <div className="actions">
        <p className={`icon check`}></p>
        <p className={`icon delete`}></p>
      </div>
    </li>
  );
}

export { TodoItemSkeleton };
