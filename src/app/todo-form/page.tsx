
import React from 'react';
import './index.css';
import ToDoFormPage from './ToDoFormPage';

const ToDoList = () => {
  return (
    <section className='flex flex-col place-content-start w-full max-h-screen'>
      <ToDoFormPage/>
    </section>
  );
};

export default ToDoList;
