import React, { useContext } from "react";
import { TodoCounter } from "../TodoCounter/";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItemSkeleton } from "../TodoItemSkeleton";
import { TodoErrorSkeleton } from "../TodoErrorSkeleton";
import { TodoWelcomeMsg } from "../TodoWelcomeMsg";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoContext } from "../TodoContext";

function AppUI() {
  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  /*Tambien se puede consumir el context con una render function con la sintaxis
  <Context.Consumer>
  {({props}) => (//To render component)}
  </Context.Consumer>*/

  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && (
          <>
            <TodoItemSkeleton />
            <TodoItemSkeleton />
            <TodoItemSkeleton />
            <TodoItemSkeleton />
          </>
        )}
        {!loading && error && <TodoErrorSkeleton />}
        {!loading && searchedTodos?.length == 0 && <TodoWelcomeMsg />}
        {searchedTodos.map((todo, i) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </div>
  );
}

export { AppUI };
