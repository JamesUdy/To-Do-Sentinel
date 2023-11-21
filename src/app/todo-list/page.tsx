
import React from 'react';
import './index.css';
import ToDoFormPage from "@/app/todo-list/ToDoFormPage";

const ToDoList = () => {
  return (
    <section className='flex flex-col place-content-center w-full max-h-screen'>
      <ToDoFormPage/>
    </section>
  );
};

export default ToDoList;
