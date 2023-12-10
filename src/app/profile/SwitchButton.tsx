import { Switch } from '@headlessui/react';
import React from 'react';

interface SwitchButtonProps {
  isDarkTheme: boolean | undefined;
  handleDarkThemeChange: () => void;
};

const SwitchButton: React.FC<SwitchButtonProps> = ({isDarkTheme, handleDarkThemeChange}) => {
  return (
    <>
        <section className='flex items-center w-2/3 justify-between'>
            <span className='text-md'>Dark Theme:</span>
            <Switch
              checked={isDarkTheme}
              onChange={() => handleDarkThemeChange()}
              className={`${isDarkTheme ? "bg-slate-50" : "bg-slate-950"} relative justify-between items-center inline-flex h-7 w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out outline-none`}
            >
                <span className='scale-110'>🌜</span>
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                    className={`${isDarkTheme ? 'translate-x-9 bg-slate-950' : 'translate-x-0 bg-white'} absolute z-10 top-0
                      pointer-events-none inline-block h-6 w-6 transform rounded-full shadow-lg ring-0 transition duration-500 ease-in-out`}
              />
              <span className='scale-110'>🌞</span>
            </Switch>
        </section>
    </>
  );
};

export default SwitchButton;
