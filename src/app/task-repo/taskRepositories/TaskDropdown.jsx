import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { DownArrow } from '@/assets';

const TaskDropdown = ({keys, onChange, selectField}) => {
  const isCategory = selectField.some(item => 'label' in item);

  return (
    <Dropdown className='min-w-40 w-72 w360:w-80 sm:w-64 lg:w-80 z-10 bg-white dark:bg-slate-900 border-2 border-slate-500/50 dark:border-slate-600/10'>
      <DropdownTrigger>
        <Button variant="bordered" className="w-full border-2 bg-white dark:bg-slate-900 border-slate-500/50 dark:border-slate-600 flex py-2 justify-between capitalize">
          <span>{isCategory ? 'Category' : 'Progress'}</span>
          <DownArrow/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Static Actions" 
        className='z-10'
        variant='flat' 
        closeOnSelect={false} 
        selectionMode='multiple' 
        selectedKeys={keys} 
        onSelectionChange={onChange}
      >
        {selectField && (
          selectField.map((field) => {
            const keyValue = isCategory ? field.label : field.status;

            return (
              <DropdownItem className='w-full hover:bg-slate-300 dark:hover:bg-slate-950 focus:bg-slate-300 dark:focus:bg-slate-950' key={keyValue}>{keyValue}</DropdownItem>
            );
          })
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default TaskDropdown;
