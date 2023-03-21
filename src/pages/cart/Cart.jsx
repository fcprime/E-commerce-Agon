import React from 'react';
import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';
import styles from './Cart.scss';

const Cart = () => {
  return (
    <>
      <Header />
      <div className="cart">
        <div className="container">
          <h2 className="cart__title title">Cart</h2>
          <h3 className="cart__subtitle">Cart is empty</h3>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
