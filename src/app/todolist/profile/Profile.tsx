import React from 'react';
import Image from 'next/image';

interface ProfileProps {
  showProfile: boolean;
  userName: string | null;
  userDp: string | null;
  handleLogout: () => void;
};

const Profile: React.FC<ProfileProps> = ({showProfile, userName, userDp, handleLogout}) => {
  return (
    <section className={`${showProfile ? 'flex' : 'hidden'}`}>
        <div>
          {userDp && <Image src={userDp} alt='User Dp' width={100} height={100} className='rounded-full' priority={true} />}
        </div>
        {userName && <div>{userName}</div>}
        <button onClick={() => handleLogout()}>Logout</button>
    </section>
  );
};

export default Profile;
