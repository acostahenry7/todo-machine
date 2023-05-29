import "./css/CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <div
      className="create-todo-container"
      onClick={(e) => {
        console.log("diste click");
      }}
    >
      <button className="create">+</button>
    </div>
  );
}

export { CreateTodoButton };
