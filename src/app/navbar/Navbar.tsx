import { darkThemeLogo, lightThemeLogo } from '@/assets';
import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  handleShowProfile: () => void;
  userDp: string | null;
};

const Navbar: React.FC<NavbarProps> = ({handleShowProfile, userDp}) => {
  const links = [
    { 
      href: '/', 
      label: 'Home' 
    },
    { 
      href: '/todo-list', 
      label: 'Form' 
    },
    { 
      href: '/task-repo', 
      label: 'Repositories' 
    },
  ];

  const pathName = usePathname();

  return (
    <section className='flex w-full justify-between items-center px-4'>
      <section className='flex items-center'>
        <div>
          <Image loading="lazy" src={lightThemeLogo} alt="ToDo Sentinel Logo" className="w-16 w360:w-20 inline-block dark:hidden"/>
          <Image loading="lazy" src={darkThemeLogo} alt="ToDo Sentinel Logo" className="w-16 w360:w-20 hidden dark:inline-block"/>
        </div>
        <span className="text-xl w360:text-2xl sm:text-2xl xl:text-3xl font-bold website-name">To Do Sentinel</span>
      </section>
      <div className='flex items-center space-x-12'>
        <section className='text-sm font-bold space-x-4 profile-page-font'>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={`ease-in duration-200 ${pathName === link.href ? 'underline underline-offset-2' : 'hover:underline hover:underline-offset-2'}`}>
                {link.label}
              </span>
            </Link>
          ))}
        </section>
        <div onClick={() => handleShowProfile()}>
          {userDp && <Image src={userDp} alt='User Dp' width={40} height={40} className='rounded-full cursor-pointer' priority={true} />}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
