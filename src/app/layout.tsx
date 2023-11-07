import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import DarkThemeProvider from './provider/ThemeProvider';
import ToggleButton from './themeToggleButton/ThemeToggleButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ToDo Sentinel',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={`flex bg-slate-200 text-slate-950 dark:bg-slate-950 dark:text-slate-200 flex-col min-h-screen ${inter.className} w-full`}>
        <DarkThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <main className='flex flex-1 w-full h-full'>
            {children}
          </main>
        </DarkThemeProvider>
      </body>
    </html>
  )
};
