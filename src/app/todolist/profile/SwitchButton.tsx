import { Switch } from '@headlessui/react';
import React from 'react';

interface SwitchButtonProps {
  isDarkTheme: boolean | undefined;
  handleDarkThemeChange: () => void;
};

const SwitchButton: React.FC<SwitchButtonProps> = ({isDarkTheme, handleDarkThemeChange}) => {
  return (
    <>
        <section className='flex items-center space-x-2'>
            <span>Dark Theme:</span>
            <Switch
              checked={isDarkTheme}
              onChange={() => handleDarkThemeChange()}
              className={`${isDarkTheme ? "bg-slate-50" : "bg-slate-950"} relative justify-between items-center inline-flex h-7 w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
            >
                <span className='scale-125'>🌜</span>
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                    className={`${isDarkTheme ? 'translate-x-9 bg-slate-950' : 'translate-x-0 bg-white'} absolute z-10
                      pointer-events-none inline-block h-6 w-6 transform rounded-full shadow-lg ring-0 transition duration-500 ease-in-out`}
              />
              <span className='scale-125'>🌞</span>
            </Switch>
        </section>
    </>
  );
};

export default SwitchButton;
