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
      <body className={`flex flex-col min-h-screen ${inter.className} w-full`}>
        <DarkThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <main className='flex flex-1 w-full h-full'>
            <ToggleButton />
            {children}
          </main>
        </DarkThemeProvider>
      </body>
    </html>
  )
};
