import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from '../login/Login';

import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import styles from './Register.scss';
import HeaderInner from '../../components/headerInner/HeaderInner';

const Register = () => {
  return (
    <>
      <Header />
      <section className="login">
        <div className="container">
          <div className="login__title title">Sign up</div>
          <form className="modal">
            <label className="modal__label">
              Email address *
              <input type="text" className="modal__input" />
            </label>
            <label className="modal__label">
              Password *
              <input type="password" className="modal__input" />
            </label>
            <label className="modal__label">
              Confirm password *
              <input type="password" className="modal__input" />
            </label>
            <div className="modal__item">
              <label className="modal__item-label modal__item-register">
                <input type="checkbox" className="modal__checkbox" />
                <span className="modal__checkbox-fake modal__checkbox-register"></span>
                <span className="modal__span">
                  I’ve read and agree with terms of service and our privecy policy
                </span>
              </label>
            </div>
            <div className="modal__buttons">
              <button className="modal__btn modal__btn-register">Sign Up</button>
            </div>
            <div className="modal__link-register">
              <span>Already have an account?</span>
              <Link href="/login" className="modal__link-login">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </section>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Register;
