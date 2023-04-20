import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../../images/empty-cart.png';
import BtnBack from '../btnBack/BtnBack';
import Footer from '../layout/footer/Footer';
import Header from '../layout/header/Header';

import styles from './CartEmpty.scss';

const CartEmpty = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="cart-empty">
          <h2 className="cart-empty__title">
            Cart is empty <icon>😕</icon>
          </h2>
          <p className="cart-empty__subtitle">
            You probably haven't ordered the item yet.
            <br />
            To order, go to the main page.
          </p>
          <img
            className="cart-empty__img"
            src={cartEmptyImg}
            alt="Empty cart"
          />
          <BtnBack />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartEmpty;
