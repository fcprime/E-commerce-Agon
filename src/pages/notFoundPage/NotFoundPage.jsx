import React from 'react';
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import styles from './NotFoundPage.scss';

import errorPage from '../../images/404.png';

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="notFound">
          <img src={errorPage} alt="404 not found" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
