import useAuth from '@/app/hooks/useAuth';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

const Constants = () => {
  const { theme } = useTheme();
  const { isLoggedIn, loading, setIsLoggedIn, setUser, user } = useAuth();
  const router = useRouter();
  const scrollBar = theme === 'dark' ? 'to-do-list-dark' : 'to-do-list-light';

  return {isLoggedIn, loading, router, scrollBar, setIsLoggedIn, setUser, theme, user};
};

export default Constants;
