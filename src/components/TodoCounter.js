import "./css/TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h1 className="main-title">
      Haz completado <br /> <b>{completed}</b> de <b>{total}</b> TODOS
    </h1>
  );
}

export { TodoCounter };
