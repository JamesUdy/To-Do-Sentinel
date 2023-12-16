import useAuth from '@/app/hooks/useAuth';
import React from 'react';

const Constants = () => {
  const { user } = useAuth();

  return {user};
};

export default Constants;
