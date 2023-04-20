import React from 'react';
import styles from './Categories.scss';

import designIcon from '../../images/icons/designIcon.svg';
import laptopIcon from '../../images/icons/laptopIcon.svg';
import bookIcon from '../../images/icons/bookIcon.svg';
import exploreMoreIcon from '../../images/icons/exploreMoreIcon.svg';

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <h2 className="categories__title title">Explore by Categories.</h2>
        <div className="categories__subtitle">
          We provide many categories, choose a category according to your expertise to make it
          easier to find a job.
        </div>
        <div className="categories__wrapper">
          <div className="categories__aside">
            <h3 className="categories__aside-title">Popular Categories</h3>
            <div className="categories__items">
              <ul className="categories__list">
                <a
                  href="#"
                  className="categories__list-link">
                  <li className="categories__list-item">Computer - Laptop</li>
                  <li className="categories__list-number">10</li>
                </a>
              </ul>
              <ul className="categories__list">
                <a
                  href="#"
                  className="categories__list-link">
                  <li className="categories__list-item">Smart phone & Tablets</li>
                  <li className="categories__list-number">12</li>
                </a>
              </ul>
              <ul className="categories__list">
                <a
                  href="#"
                  className="categories__list-link">
                  <li className="categories__list-item">Fashion & Accessories</li>
                  <li className="categories__list-number">14</li>
                </a>
              </ul>
              <ul className="categories__list">
                <a
                  href="#"
                  className="categories__list-link">
                  <li className="categories__list-item">Halth & Beauty</li>
                  <li className="categories__list-number">8</li>
                </a>
              </ul>
            </div>
          </div>
          <div className="categories__inner">
            <a
              className="categories__box-link"
              href="#">
              <div className="categories__box-img">
                <img
                  src={designIcon}
                  alt="categories computer image"
                />
              </div>
              <p className="categories__box-text">Computer for Designer, Art</p>
            </a>
            <a
              className="categories__box-link"
              href="#">
              <div className="categories__box-img">
                <img
                  src={laptopIcon}
                  alt="categories computer image"
                />
              </div>
              <p className="categories__box-text">Sport, Home, Outdoor</p>
            </a>
            <a
              className="categories__box-link"
              href="#">
              <div className="categories__box-img">
                <img
                  src={laptopIcon}
                  alt="categories computer image"
                />
              </div>
              <p className="categories__box-text">Laptop for office, students</p>
            </a>
            <a
              className="categories__box-link"
              href="#">
              <div className="categories__box-img">
                <img
                  src={bookIcon}
                  alt="categories computer image"
                />
              </div>
              <p className="categories__box-text">Software, card, book</p>
            </a>
            <a
              className="categories__more-link"
              href="#">
              <div className="categories__more-img">
                <img
                  src={exploreMoreIcon}
                  alt="categories computer image"
                />
              </div>
              <p className="categories__box-text">Explore More</p>
            </a>
          </div>
        </div>
        <div className="categories__link">
          <a
            href=""
            className="categories__link-work">
            How It Work?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;
