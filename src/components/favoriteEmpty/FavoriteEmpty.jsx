import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../../images/empty-cart.png';
import Footer from '../layout/footer/Footer';
import Header from '../layout/header/Header';

const FavoriteEmpty = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="cart-empty">
          <h2 className="cart-empty__title">
            You don't have products <icon>😕</icon>
          </h2>
          <p className="cart-empty__subtitle">
            You probably haven't ordered the item yet.
            <br />
            To order a product, go to the main page
          </p>
          <img
            className="cart-empty__img"
            src={cartEmptyImg}
            alt="Empty cart"
          />
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FavoriteEmpty;
