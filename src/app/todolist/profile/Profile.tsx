import React from 'react';
import Image from 'next/image';

interface ProfileProps {
    userName: string | null;
    userDp: string | null;
    handleLogout: () => void;
};

const Profile: React.FC<ProfileProps> = ({userName, userDp, handleLogout}) => {
  return (
    <>
        <div>
          {userDp && <Image src={userDp} alt='User Dp' width={100} height={100} className='rounded-full' priority={true} />}
        </div>
        {userName && <div>{userName}</div>}
        <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
};

export default Profile;
