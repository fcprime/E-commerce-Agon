import React, { useEffect, useState } from 'react';
import Header from '../layout/header/Header';
import HeaderInner from '../headerInner/HeaderInner';
import Product from '../product/Product';

import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useAuth } from '../../hooks/use-auth';

import { useDispatch } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { removeUser } from '../../redux/slices/userSlice';

import styles from './Home.scss';
import Products from '../products/Products';
import Categories from '../categories/Categories';
import Order from '../order/Order';
import Contact from '../contact/Contact';
import Footer from '../layout/footer/Footer';
import Register from '../../pages/register/Register';

export const SearchContext = React.createContext();

const Home = () => {
  let navigate = useNavigate();
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <HeaderInner />
        <Product />
        <Products
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <Categories />
        <Order />
        <Contact />
        <Footer />
      </SearchContext.Provider>
    </>
  );
};

export default Home;
