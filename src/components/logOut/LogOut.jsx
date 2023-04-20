import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/slices/userSlice';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useAuth } from '../../hooks/use-auth';

const LogOut = () => {
  const dispatch = useDispatch();
  const [authUser, setAuthUser] = useState(null);
  const { isAuth, email } = useAuth();
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('sign out successful');
      })
      .catch((error) => console.log(error));
  };

  return (
    <button
      className="menu__link menu__login"
      onClick={() => dispatch(removeUser())}>
      Log Out {email}
    </button>
  );
};

export default LogOut;
