
import useAuth from '@/app/hooks/useAuth';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

const Constants = () => {
  const { setTheme, theme } = useTheme();
  const { handleAuth, isLoggedIn, loading, setIsLoggedIn, setUser, user } = useAuth();
  const scrollBar = theme === 'dark' ? 'to-do-list-dark' : 'to-do-list-light';
  const spinnerColor = theme === 'dark' ? 'dark-submission-button-loader' : 'light-submission-button-loader';

  const router = useRouter();

  const handleDarkThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return {
    handleAuth,
    handleDarkThemeChange,
    isLoggedIn,
    loading,
    router,
    scrollBar,
    setIsLoggedIn,
    setUser,
    spinnerColor,
    theme,
    user,
  };
};

export default Constants;
