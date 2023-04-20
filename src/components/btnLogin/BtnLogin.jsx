import React from 'react';

import { Link } from 'react-router-dom';

const BtnLogin = () => {
  return (
    <>
      <Link
        className="menu__link menu__login"
        to="/login">
        Login
      </Link>
      <span>or</span>
      <Link
        className="menu__link menu__login"
        to="/register">
        Register
      </Link>
    </>
  );
};

export default BtnLogin;
