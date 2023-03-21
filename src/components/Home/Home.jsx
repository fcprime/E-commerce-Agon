import React from 'react';
import Header from '../layout/header/Header';
import HeaderInner from '../headerInner/HeaderInner';
import Product from '../product/Product';

import styles from './Home.scss';
import Products from '../products/Products';
import Categories from '../categories/Categories';
import Order from '../order/Order';
import Contact from '../contact/Contact';
import Footer from '../layout/footer/Footer';

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <HeaderInner />
        <Product />
        <Products />
        <Categories />
        <Order />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
