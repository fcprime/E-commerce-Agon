import React from 'react';

import styles from './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-top__item">
            <h5 className="footer-top__title">Contact</h5>
            <a
              className="footer-top__adress"
              href="#">
              4517 Washington Ave. <br /> Manchester, Kentucky 39495
            </a>
            <a
              className="footer-top__tel"
              href="tel:2395550108">
              (239) 555-01-08
            </a>
            <a
              className="footer-top__email"
              href="mailto:contact@agon.com">
              contact@agon.com
            </a>
            <ul className="footer-top__social">
              <li className="footer-top__social-item">
                <a
                  className="footer-top__social-link"
                  href="#">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.96703 0C3.56739 0 0 3.5932 0 8.02466C0 12.0478 2.94259 15.37 6.77596 15.9502V10.1512H4.80473V8.04194H6.77596V6.63825C6.77596 4.31449 7.89993 3.29474 9.81753 3.29474C10.7356 3.29474 11.2219 3.36357 11.4514 3.39443V5.23547H10.1436C9.3297 5.23547 9.04534 6.01325 9.04534 6.88917V8.04194H11.4309L11.1076 10.1512H9.04534V15.9669C12.9339 15.4361 15.9341 12.0873 15.9341 8.02466C15.9341 3.5932 12.367 0 7.96703 0Z"
                      fill="#444E62"
                    />
                  </svg>
                </a>
              </li>
              <li className="footer-top__social-item">
                <a
                  className="footer-top__social-link"
                  href="#">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.50643 0.277344C2.25198 0.277344 0.417603 2.03298 0.417603 4.18994V9.77801C0.417603 11.9347 2.25306 13.6896 4.50808 13.6896H10.3502C12.6049 13.6896 14.4396 11.9339 14.4396 9.77696V4.18836C14.4396 2.03195 12.6041 0.277344 10.3491 0.277344H4.50643ZM11.6352 2.4233C11.9448 2.4233 12.1961 2.66364 12.1961 2.95979C12.1961 3.25593 11.9448 3.49627 11.6352 3.49627C11.3256 3.49627 11.0743 3.25593 11.0743 2.95979C11.0743 2.66364 11.3256 2.4233 11.6352 2.4233ZM7.42859 3.49627C9.43934 3.49627 11.0743 5.06014 11.0743 6.98345C11.0743 8.90676 9.43906 10.4706 7.42859 10.4706C5.41784 10.4706 3.78288 8.90649 3.78288 6.98345C3.78288 5.06041 5.41784 3.49627 7.42859 3.49627ZM7.42859 4.56925C6.03453 4.56925 4.90464 5.65001 4.90464 6.98345C4.90464 8.31689 6.03453 9.39764 7.42859 9.39764C8.82266 9.39764 9.95255 8.31689 9.95255 6.98345C9.95255 5.65001 8.82266 4.56925 7.42859 4.56925Z"
                      fill="#444E62"
                    />
                  </svg>
                </a>
              </li>
              <li className="footer-top__social-item">
                <a
                  className="footer-top__social-link"
                  href="#">
                  <svg
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.4945 1.93871C16.8854 2.22278 16.2305 2.41216 15.5396 2.50166C16.2421 2.06272 16.7824 1.36262 17.036 0.535452C16.3788 0.941095 15.6507 1.23891 14.8759 1.39592C14.2573 0.70559 13.3748 0.277344 12.3972 0.277344C10.5191 0.277344 8.99712 1.8657 8.99712 3.82397C8.99712 4.10102 9.02788 4.37104 9.08592 4.63312C6.26071 4.48375 3.75498 3.07011 2.0786 0.924601C1.78407 1.44876 1.61837 2.06272 1.61837 2.71059C1.61837 3.94188 2.21731 5.02563 3.13051 5.66433C2.57307 5.64631 2.04842 5.4832 1.58906 5.22142C1.58906 5.23211 1.58906 5.248 1.58906 5.26296C1.58906 6.98359 2.7614 8.41617 4.31532 8.74239C4.03124 8.82425 3.73119 8.86977 3.42185 8.86977C3.20219 8.86977 2.98832 8.8435 2.78113 8.8044C3.21379 10.2104 4.46912 11.2383 5.9563 11.2685C4.79267 12.2182 3.32725 12.7869 1.73357 12.7869C1.45819 12.7869 1.18919 12.7704 0.923096 12.7365C2.42827 13.7399 4.21608 14.3282 6.13506 14.3282C12.3882 14.3282 15.8089 8.92291 15.8089 4.23389C15.8089 4.08025 15.8042 3.92721 15.7972 3.77601C16.465 3.27996 17.0401 2.65378 17.4945 1.93871Z"
                      fill="#444E62"
                    />
                  </svg>
                </a>
              </li>
              <li className="footer-top__social-item">
                <a
                  className="footer-top__social-link"
                  href="#">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 0.277344H0.615356V13.6896H14V0.277344ZM5.07689 10.7091H3.20082V5.4932H5.07689V10.7091ZM4.10577 4.53721C3.53246 4.53721 3.14951 4.15422 3.14951 3.64306C3.14951 3.13191 3.53172 2.74892 4.16897 2.74892C4.74228 2.74892 5.12523 3.13191 5.12523 3.64306C5.12523 4.15422 4.74302 4.53721 4.10577 4.53721ZM11.7692 10.7091H9.95336V7.85822C9.95336 7.06988 9.46928 6.88807 9.28784 6.88807C9.10641 6.88807 8.50112 7.00953 8.50112 7.85822C8.50112 7.97968 8.50112 10.7091 8.50112 10.7091H6.62505V5.4932H8.50112V6.22119C8.74279 5.79647 9.22687 5.4932 10.1348 5.4932C11.0427 5.4932 11.7692 6.22119 11.7692 7.85822V10.7091Z"
                      fill="#444E62"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-top__item">
            <h5 className="footer-top__title">About Us</h5>
            <ul className="footer-top__list">
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  About V1
                </a>
              </li>
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  About V2
                </a>
              </li>
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  About V3
                </a>
              </li>
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  About V4
                </a>
              </li>
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  About V5
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-top__item">
            <h5 className="footer-top__title">Discover</h5>
            <ul className="footer-top__list">
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  Our Blog
                </a>
              </li>
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  Our Blog
                </a>
              </li>
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  Our Blog
                </a>
              </li>
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  Our Blog
                </a>
              </li>
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  Our Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-top__item">
            <h5 className="footer-top__title">Support</h5>
            <ul className="footer-top__list">
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  FAQ
                </a>
              </li>
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  FAQ
                </a>
              </li>
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  FAQ
                </a>
              </li>
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  FAQ
                </a>
              </li>
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-top__item">
            <h5 className="footer-top__title">Useful links</h5>
            <ul className="footer-top__list">
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  Shop
                </a>
              </li>
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  Shop
                </a>
              </li>
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  Shop
                </a>
              </li>
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  Shop
                </a>
              </li>
              <li className="footer-top__list-item">
                <a
                  className="footer-top__list-link"
                  href="#">
                  Shop
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom__company">©Agon Official 2022</div>
          <div className="footer-bottom__privacy">
            <p className="footer-bottom__text">Privacy policy</p>
            <p className="footer-bottom__text">Cookies</p>
            <p className="footer-bottom__text">Terms of service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
