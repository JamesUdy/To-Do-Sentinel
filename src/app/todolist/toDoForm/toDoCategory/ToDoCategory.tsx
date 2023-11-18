import React from 'react';
import { Listbox } from '@headlessui/react';
import { categories } from './Categories';
import { useFormik } from 'formik';

interface ToDoFormValues {
  taskTitle: string;
  taskDescription: string;
  taskPriority: string;
  taskProgress: string;
  taskDueDate: string;
};

interface ToDoCategoryProps {
  formikForm: ReturnType<typeof useFormik<ToDoFormValues>>,
};

const ToDoCategory: React.FC<ToDoCategoryProps> = ({ formikForm }) => {

  return (
    <>    
        <span className='w-full text-slate-700 dark:text-slate-400 font-semibold text-start text-md'>🚀 Priority Dropdown</span>
        <Listbox value={formikForm.values.taskPriority} onChange={(value: string) => formikForm.setFieldValue('taskPriority', value)}>
          {({open}) => (
            <div className='relative w-full'>
              <Listbox.Button
                as="button"
                className='py-2 px-3 text-sm bg-slate-300 dark:bg-slate-900 text-slate-700 dark:text-slate-400 w-full rounded-md outline outline-2 outline-slate-400 dark:outline-slate-800 focus:outline-blue-500 focus:ease-in duration-200 flex flow-row justify-between'
              >
                {formikForm.values.taskPriority}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  />
                </svg>
              </Listbox.Button>
              <Listbox.Options
                className="absolute outline outline-2 mt-2 w-full z-10 text-sm bg-slate-300 dark:bg-slate-900 outline-slate-400 overflow-y-auto dark:outline-slate-800 rounded-md shadow-lg shadow-slate-600 dark:shadow-black/60"
              >
                {categories.map((category) => (
                  <Listbox.Option key={category.id} value={category.label}>
                    {({active, selected}) => (
                      <div
                        className={`${
                          active ? 'text-slate-100 bg-blue-500' : 'text-slate-800 dark:text-slate-300'
                        } cursor-pointer select-none relative px-4 py-2`}
                      >
                        {category.label}
                        {selected && (
                          <span
                            className={`${
                              active ? 'text-slate-800 dark:text-slate-300' : 'text-blue-500'
                            } absolute inset-y-0 left-0 flex items-center pl-3`}
                          ></span>
                        )}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          )}
        </Listbox>
    </>
  );
};

export default ToDoCategory;
