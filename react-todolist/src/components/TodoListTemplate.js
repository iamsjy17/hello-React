import React from "react";
import "./TodoListTemplate.css";

const TodoListTemplate = ({ palette, form, children }) => {
  return (
    <main className="todo-list-template">
      <div className="title">Nothing Todo</div>
      <section className="palette-wrapper">{palette}</section>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default TodoListTemplate;
