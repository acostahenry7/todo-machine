import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { setOpenModal } = useContext(TodoContext);

  return (
    <form className="todoform-container">
      <label>Crea un TODO</label>
      <textarea placeholder="Aprender a programar" rows={6} />
      <div className="todoform-button-container">
        <button
          className="todoform-button todoform-button--cancel"
          onClick={(e) => {
            e.preventDefault();
            setOpenModal((state) => !state);
          }}
        >
          Cancelar
        </button>
        <button
          className="todoform-button todoform-button--create"
          onClick={(e) => {
            e.preventDefault();
            console.log("click");
            console.log("hi");
          }}
        >
          Crear
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
