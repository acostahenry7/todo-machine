import "./TodoItem.css";
import {
  IoCheckmarkSharp as CompleteIcon,
  IoClose as DeleteIcon,
} from "react-icons/io5";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="todo-list-item">
      <div className="todo-list-text-container">
        <p className={`text ${completed && "text-complete"}`}>{text}</p>
      </div>

      <div className="actions">
        <CompleteIcon
          onClick={onComplete}
          className={`icon check ${completed && "complete"}`}
        />
        <DeleteIcon className="icon delete" onClick={onDelete} />
      </div>
    </li>
  );
}

export { TodoItem };
