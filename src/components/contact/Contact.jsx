import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Register from '../../pages/register/Register';

import styles from './Contact.scss';

import logoSvg from '../../images/logo.svg';
import Form from '../form/Form';

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="container">
          <Form />
          <div className="contact__inner">
            <Link
              className="contact__inner-logo logo"
              to="/">
              <div className="contact__inner-img">
                <img
                  src={logoSvg}
                  alt="logo image"
                />
              </div>
              <span>agon</span>
            </Link>
            <div className="contact__inner-box">
              <p className="contact__inner-text">Ready to get started?</p>
              <Link
                className="contact__inner-link"
                to="/register">
                <div className="contact__inner-create">Create an Account</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Routes>
        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </>
  );
};

export default Contact;
