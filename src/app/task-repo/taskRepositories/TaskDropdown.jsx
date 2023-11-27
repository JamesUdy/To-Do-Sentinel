import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

const TaskDropdown = ({keys, onChange, selectField}) => {
  console.log(selectField);

  const isCategory = selectField.some(item => 'label' in item);

  return (
    <Dropdown className='min-w-40 w-44'>
      <DropdownTrigger>
        <Button variant="bordered" className="w-1/2 border-2 bg-white dark:bg-slate-900 border-slate-500/50 dark:border-slate-600 flex mx-auto px-4 py-2 capitalize">
          {isCategory ? 'Category' : 'Progress'}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Static Actions" 
        className=''
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
              <DropdownItem className='w-full' key={keyValue}>{keyValue}</DropdownItem>
            );
          })
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default TaskDropdown;
