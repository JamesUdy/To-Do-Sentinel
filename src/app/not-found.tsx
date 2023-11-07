'use client';

import { useRouter } from 'next/navigation';
import { dark404, light404 } from '@/assets';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ThemeToggleButton from './themeToggleButton/ThemeToggleButton';

export default function NotFound() {
  const router = useRouter();
  const { theme } = useTheme();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if(countdown < 1) {
      router.push('/');
    };

    const countdownInterval = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => {
      clearTimeout(countdownInterval);
    };
  }, [router, countdown]);

  const errorImage = theme === 'dark' ? dark404 : light404;

  return (
    <section className='flex flex-col items-center font-semibold justify-center max-w-full text-center space-y-2 sm:space-y-4 lg:space-y-6 container font-mono px-8'>
      <h2 className="text-xl sm:text-4xl font-bold text-red-950 dark:text-red-500">Oops! The Task Has Gone on an Adventure</h2>
      <p className="text-sm sm:text-xl text-gray-950 dark:text-gray-600">The to-do task you&apos;re seeking seems to have embarked on an exciting journey, but we&apos;re here to assist you.</p>
      <div className="my-4">
        <Image src={errorImage} alt="Task not Found" className='w-48 sm:w-64 h-48 sm:h-64' />
      </div>
      <p className="text-sm sm:text-xl text-blue-950 dark:text-blue-500">Fear not! We&apos;re redirecting you to the sign-in page in {countdown} seconds.</p>
      <ThemeToggleButton />
    </section>
  )
};
