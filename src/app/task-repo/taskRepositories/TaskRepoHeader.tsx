import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Delete, Edit, Info, LeftArrow } from '@/assets';
import { useTheme } from 'next-themes';

const TaskRepoHeader = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const handleClose = () => {
    setIsOpen(false);
  };

  const scrollBar = theme === 'dark' ? 'to-do-list-dark' : 'to-do-list-light';

  return (
    <div className='text-md w360:text-lg sm:text-xl font-semibold text-center flex items-center justify-center space-x-4'>
        <span>🗂️ Task Repository</span>
        <span className='relative ease-in duration-200' onClick={() => setIsOpen(true)} onMouseEnter={() => setIsPopoverOpen(true)} onMouseLeave={() => setIsPopoverOpen(false)}>
            <Info/>
            <span className={`absolute hidden ${isPopoverOpen ? 'sm:block' : 'sm:hidden'} left-10 top-0 bg-slate-950 dark:bg-slate-200 text-slate-300 dark:text-slate-950 px-2 py-1 text-xs ease-in duration-200 rounded-md`}>User&nbsp;Guide</span>
            <span className={`absolute hidden ${isPopoverOpen ? 'sm:block' : 'sm:hidden'} left-6 top-0`}><LeftArrow/></span>
        </span>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative h-fit z-10 top-[50%]" onClose={() => handleClose()}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full border-2 text-slate-700 dark:text-slate-400 border-slate-500/50 dark:border-slate-600/10 max-w-md transform rounded-2xl bg-white dark:bg-slate-950 py-4 sm:py-6 px-8 text-left align-middle shadow-xl transition-all space-y-4">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-bold w-full"
                    >
                      User Guide
                    </Dialog.Title>
                    <div className='relative h-72 w360:h-96 overflow-hidden'>
                      <ol className={`overflow-y-scroll h-full list-decimal space-y-4 ${scrollBar}`}>
                        <li>
                          1. <strong>Orange, Green, and Grey Balls:</strong>
                          <ul className='flex flex-col space-y-2 py-2 px-2 text-sm'>
                            <li className='flex space-x-2 items-center'>
                              <span className='bg-gray-600 dark:bg-gray-300 animate-bounce w-4 h-4 px-2 rounded-full'></span>
                              <span> - Represents tasks not yet started.</span>  
                            </li>
                            <li className='flex space-x-2 items-center'>
                              <span className='bg-orange-600 animate-pulse w-4 h-4 px-2 rounded-full'></span>
                              <span> - Denotes tasks in a pending state.</span>
                            </li>
                            <li className='flex space-x-2 items-center'>
                              <span className='bg-green-600 animate-pulse w-4 h-4 px-2 rounded-full'></span>
                              <span> and </span>
                              <span className='text-sm font-normal line-through'>striked text</span>
                              <span> - Indicates completed tasks.</span>
                            </li>
                          </ul>
                        </li>

                        <li>
                          2. <strong>Edit and Delete Buttons:</strong>
                          <ul className='flex flex-col space-y-2 py-2 px-2 text-sm'>
                            <li className='flex space-x-2 items-center'><Edit/><span> - Allows you to update the task.</span></li>
                            <li className='flex space-x-2 items-center'><Delete/><span> - Enables task deletion.</span></li>
                          </ul>
                        </li>

                        <li>
                          3. <strong>Span with Category Names:</strong>
                          <ul className='flex flex-col space-y-2 py-2 px-2 text-sm'>
                            <li><span className='bg-slate-950 dark:bg-white py-1 px-2 rounded-md font-semibold text-xs text-white dark:text-slate-950 shadow-md shadow-slate-700 dark:shadow-slate-950'>Category</span>
                            <span> -  Denotes the category of tasks.</span></li>
                          </ul>
                        </li>

                        <li>
                          4. <strong>Ctrl + F or Cmd + F:</strong>
                          <ul className='flex flex-col space-y-2 py-2 px-2 text-sm'>
                            <li><em>Ctrl + F or Cmd + F:</em> Use these keyboard shortcuts to focus on the search bar.</li>
                          </ul>
                        </li>

                        <li>
                          5. <strong>Date Format:</strong>
                          <ul className='flex flex-col space-y-2 py-2 px-2 text-sm'>
                            <li><em>DD-MM-YYYY Date Format:</em> Displays the task creation date.</li>
                          </ul>
                        </li>
                      </ol>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => handleClose()}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
    </div>
  );
};

export default TaskRepoHeader;
