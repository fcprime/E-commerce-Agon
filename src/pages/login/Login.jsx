import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

import { auth } from '../../firebase';

import Header from '../../components/layout/header/Header';
import BtnBack from '../../components/btnBack/BtnBack';
import Footer from '../../components/layout/footer/Footer';

import styles from './Login.scss';

import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const push = useNavigate();
  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.id,
            token: user.token,
          }),
        );
        push('/');
      })
      .catch(() => {
        alert('login is wrong!');
      });
  };

  return (
    <>
      <Header />
      <section className="login">
        <div className="container">
          <div className="login__top">
            <div className="login__title title">Sign in</div>
          </div>
          <form
            onSubmit={login}
            className="modal"
            title="sign in">
            <label className="modal__label">
              Email address *
              <input
                value={email}
                type="email"
                className="modal__input"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="modal__label">
              Password *
              <input
                value={password}
                type="password"
                className="modal__input"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div className="modal__buttons">
              <button
                type="submit"
                className="modal__btn modal__btn-login">
                Login
              </button>
              <button className="modal__btn modal__btn-register">
                <Link to="/register">Sign Up</Link>
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
