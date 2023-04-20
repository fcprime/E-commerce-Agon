import React from 'react';
import { Link } from 'react-router-dom';

const BtnBack = () => {
  return (
    <Link
      to="/"
      className="cart__btn-link cart-empty__link">
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 13L1 6.93015L6.86175 1"
          stroke="#445b5e"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
      </svg>
      <span>Back</span>
    </Link>
  );
};

export default BtnBack;
