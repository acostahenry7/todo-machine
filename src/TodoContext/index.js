import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

// const defaultTodos = [
//   { text: "Terminar el curso de React", completed: false },
//   { text: "Terminar el curso de Node", completed: false },
//   {
//     text: "Continuar la escuela de desarrollo web.",
//     completed: true,
//   },
//   { text: "Cortar cebolla", completed: false },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    storeItem: storeTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchedValue, setSearchedValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchedValue.toLowerCase())
  );

  const completeTodo = (key) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.text == key);
    newTodos[index].completed = true;
    storeTodos(newTodos);
  };

  const deleteTodo = (key) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.text == key);
    newTodos.splice(index, 1);
    storeTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchedValue,
        setSearchedValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
