import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';

import Login from '../login/Login';
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import HeaderInner from '../../components/headerInner/HeaderInner';
import styles from './Register.scss';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import { auth } from '../../firebase';

const Register = () => {
  //Validation
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email cannot be empty');
  const [passwordError, setPasswordError] = useState('Password cannot be empty');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Email  is wrong');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError('Password must contain at least 8 characters');
      if (!e.target.value) {
        setPasswordError('Password cannot be empty');
      }
    } else {
      setPasswordError('');
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const push = useNavigate();

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.id,
            token: user.token,
          }),
          alert(
            'Your registration has been successfully completed, you will be automatically logged in',
          ),
        );
        push('/');
      })
      .catch();
  };

  return (
    <>
      <Header />
      <section className="login">
        <div className="container">
          <div className="login__top">
            <div className="login__title title">Sign up</div>
          </div>
          <form
            onSubmit={register}
            className="modal"
            title="register">
            <label className="modal__label">
              Email address *
              {emailDirty && emailError && <div style={{ color: 'red' }}>{emailError}</div>}
              <input
                onBlur={(e) => blurHandler(e)}
                name="email"
                type="email"
                className="modal__input"
                placeholder="Email address"
                value={email}
                // onChange={(e) => setEmail(e.target.value)}
                onChange={(e) => emailHandler(e)}
              />
            </label>
            <label className="modal__label">
              Password *
              {passwordDirty && passwordError && (
                <div style={{ color: 'red' }}>{passwordError}</div>
              )}
              <input
                onBlur={(e) => blurHandler(e)}
                name="password"
                type="password"
                className="modal__input"
                placeholder="Password"
                value={password}
                // onChange={(e) => setPassword(e.target.value)}
                onChange={(e) => passwordHandler(e)}
              />
            </label>
            <div className="modal__item">
              <label className="modal__item-label modal__item-register">
                <input
                  type="checkbox"
                  className="modal__checkbox"
                />
                <span className="modal__checkbox-fake modal__checkbox-register"></span>
                <span className="modal__span">
                  I’ve read and agree with terms of service and our privecy policy
                </span>
              </label>
            </div>
            <div className="modal__buttons">
              <button
                disabled={!formValid}
                className="modal__btn modal__btn-register"
                type="submit">
                Sign Up
              </button>
            </div>
            <div className="modal__link-register">
              <span>Already have an account?</span>
              <Link
                to="/login"
                className="modal__link-login">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </section>

      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default Register;
