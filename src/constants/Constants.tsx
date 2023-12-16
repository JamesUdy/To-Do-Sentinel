import useAuth from '@/app/hooks/useAuth';
import { useTheme } from 'next-themes';

const Constants = () => {
  const { theme } = useTheme();
  const { user } = useAuth();

  return {theme, user};
};

export default Constants;
