'use client';

import { useRouter } from 'next/navigation';
import { dark404, light404 } from '@/assets';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function NotFound() {
  const router = useRouter();
  const { theme } = useTheme();

  // useEffect(() => {
  //   const redirectTimeout = setTimeout(() => {
  //     router.push('/');
  //   }, 4000);

  //   return () => {
  //     clearTimeout(redirectTimeout);
  //   };
  // }, [router]);

  const errorImage = theme === 'dark' ? dark404 : light404;

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h2 className="text-4xl font-bold text-red-500">Uh-oh! Task Not Found</h2>
      <p className="text-xl text-gray-600">The to-do task you're looking for appears to be off on an adventure.</p>
      <div className="my-4">
        <Image src={errorImage} alt="Task not Found" className='w-64 h-64' />
      </div>
      <button onClick={() => router.push('/')}>Go to home page</button>
    </div>
  )
};
