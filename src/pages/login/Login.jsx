import React from 'react';
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import styles from './Login.scss';

const Login = () => {
  return (
    <>
      <Header />
      <section className="login">
        <div className="container">
          <div className="login__title title">Sign in</div>
          <form className="modal">
            <label className="modal__label">
              Username or email address *
              <input type="text" className="modal__input" />
            </label>
            <label className="modal__label">
              Password *
              <input type="password" className="modal__input" />
            </label>
            <div className="modal__item">
              <label className="modal__item-label">
                <input type="checkbox" className="modal__checkbox" />
                <span className="modal__checkbox-fake"></span>
                <span className="modal__span">Remember me</span>
              </label>
              <a href="#" className="modal__link">
                Forgot password?
              </a>
            </div>
            <div className="modal__buttons">
              <button className="modal__btn modal__btn-login">Login</button>
              <button className="modal__btn modal__btn-register">Sign Up</button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
