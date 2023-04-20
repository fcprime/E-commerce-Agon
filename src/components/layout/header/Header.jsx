import React, { useEffect, useState, useRef } from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Product from '../../product/Product';
import HeaderInner from '../../headerInner/HeaderInner';
import Search from '../../search/Search';

import About from '../../../pages/about/About';
import Company from '../../../pages/company/Company';
import Favorite from '../../../pages/favorite/Favorite';
import Cart from '../../../pages/cart/Cart';
import Login from '../../../pages/login/Login';
import Register from '../../../pages/register/Register';

import styles from './Header.scss';

import logoSvg from '../../../images/logo.svg';
import favoriteIcon from '../../../images/icons/heart.svg';
import cartIcon from '../../../images/icons/cart.svg';
import userIcon from '../../../images/icons/user.svg';

import { auth } from '../../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useAuth } from '../../../hooks/use-auth';

import { useDispatch } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { removeUser } from '../../../redux/slices/userSlice';
import LogOut from '../../logOut/LogOut';
import BtnLogin from '../../btnLogin/BtnLogin';

import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ searchValue, setSearchValue }) => {
  const { items } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const dispatch = useDispatch();
  const [authUser, setAuthUser] = useState(null);
  const { isAuth, email } = useAuth();
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('sign out successful');
      })
      .catch((error) => console.log(error));
  };

  const navRef = useRef();

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      navRef.current.classList.toggle('header__responsive-nav');
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navRef]);

  // zaloginin@gmail.com

  return isAuth ? (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Link
            className="header__logo logo"
            to="/">
            <div className="header__logo-img">
              <img
                src={logoSvg}
                alt="logo image"
              />
            </div>
            <span>agon</span>
          </Link>

          {(showPopup && (
            <nav
              className="header__navbar"
              ref={navRef}>
              <ul className="header__list">
                <li className="header__list-item">
                  <Link to="/About">About</Link>
                </li>
                <li className="header__list-item">
                  <Link to="/Company">Company</Link>
                </li>
              </ul>
              <div className="menu">
                <Link
                  to="/favorite"
                  className="menu__favorite">
                  <svg
                    width="24"
                    height="21"
                    viewBox="0 0 24 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 11C0.75 8 1.5 3.5 5.25 2C9 0.5 11.25 3.5 12 5C12.75 3.5 15.75 0.5 19.5 2C23.25 3.5 23.25 8 21 11C18.75 14 12 20 12 20C12 20 5.25 14 3 11Z"
                      stroke="#101828"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  to="/cart"
                  className="menu__cart">
                  <div className="menu__cart-qty">{totalCount}</div>
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.94 17.06L17.26 7.31C17.1453 6.47997 16.7404 5.71734 16.1172 5.15725C15.4939 4.59716 14.6926 4.27576 13.855 4.25H13.75C13.75 3.25544 13.3549 2.30161 12.6517 1.59835C11.9484 0.895088 10.9946 0.5 10 0.5C9.00546 0.5 8.05163 0.895088 7.34837 1.59835C6.64511 2.30161 6.25002 3.25544 6.25002 4.25H6.14502C5.30749 4.27576 4.50611 4.59716 3.88287 5.15725C3.25963 5.71734 2.85477 6.47997 2.74002 7.31L1.06002 17.06C0.956834 17.6256 0.979262 18.2071 1.12572 18.7631C1.27217 19.3191 1.53907 19.8361 1.90752 20.2775C2.21796 20.6565 2.60803 20.9625 3.05003 21.1738C3.49204 21.385 3.97513 21.4964 4.46502 21.5H15.535C16.0249 21.4964 16.508 21.385 16.95 21.1738C17.392 20.9625 17.7821 20.6565 18.0925 20.2775C18.461 19.8361 18.7279 19.3191 18.8743 18.7631C19.0208 18.2071 19.0432 17.6256 18.94 17.06ZM10 2C10.5968 2 11.1691 2.23705 11.591 2.65901C12.013 3.08097 12.25 3.65326 12.25 4.25H7.75002C7.75002 3.65326 7.98707 3.08097 8.40903 2.65901C8.83099 2.23705 9.40328 2 10 2ZM16.945 19.31C16.7755 19.522 16.5612 19.6938 16.3174 19.8131C16.0736 19.9325 15.8064 19.9963 15.535 20H4.46502C4.19362 19.9963 3.92643 19.9325 3.68263 19.8131C3.43883 19.6938 3.2245 19.522 3.05502 19.31C2.82646 19.0365 2.66149 18.7157 2.57199 18.3707C2.4825 18.0257 2.47073 17.6651 2.53752 17.315L4.21752 7.565C4.27335 7.08382 4.49737 6.63782 4.85004 6.30574C5.20271 5.97365 5.66135 5.77683 6.14502 5.75H13.855C14.3387 5.77683 14.7973 5.97365 15.15 6.30574C15.5027 6.63782 15.7267 7.08382 15.7825 7.565L17.4625 17.315C17.5293 17.6651 17.5175 18.0257 17.428 18.3707C17.3386 18.7157 17.1736 19.0365 16.945 19.31Z"
                      fill="#101828"
                    />
                  </svg>
                </Link>
              </div>
              <div className="menu__register">
                <svg
                  width="16"
                  height="22"
                  viewBox="0 0 16 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0.75C5.37665 0.75 3.25 2.87665 3.25 5.5C3.25 8.12335 5.37665 10.25 8 10.25C10.6234 10.25 12.75 8.12335 12.75 5.5C12.75 2.87665 10.6234 0.75 8 0.75ZM4.75 5.5C4.75 3.70507 6.20507 2.25 8 2.25C9.79493 2.25 11.25 3.70507 11.25 5.5C11.25 7.29493 9.79493 8.75 8 8.75C6.20507 8.75 4.75 7.29493 4.75 5.5Z"
                    fill="#ffffff"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 11.75C2.37665 11.75 0.25 13.8766 0.25 16.5C0.25 19.1234 2.37665 21.25 5 21.25H11C13.6234 21.25 15.75 19.1234 15.75 16.5C15.75 13.8766 13.6234 11.75 11 11.75H5ZM1.75 16.5C1.75 14.7051 3.20507 13.25 5 13.25H11C12.7949 13.25 14.25 14.7051 14.25 16.5C14.25 18.2949 12.7949 19.75 11 19.75H5C3.20507 19.75 1.75 18.2949 1.75 16.5Z"
                    fill="#ffffff"
                  />
                </svg>
                <LogOut />
              </div>
              <button className="header__navbar-btn header__close-btn">
                <FaTimes
                  size={24}
                  onClick={() => setShowPopup(false)}
                />
              </button>
            </nav>
          )) || (
            <>
              <nav
                className="header__navbar-show header__navbar-hidden"
                ref={navRef}>
                <ul className="header__list">
                  <li className="header__list-item">
                    <Link to="/About">About</Link>
                  </li>
                  <li className="header__list-item">
                    <Link to="/Company">Company</Link>
                  </li>
                </ul>
                <div className="menu">
                  <Link
                    to="/favorite"
                    className="menu__favorite">
                    <svg
                      width="24"
                      height="21"
                      viewBox="0 0 24 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 11C0.75 8 1.5 3.5 5.25 2C9 0.5 11.25 3.5 12 5C12.75 3.5 15.75 0.5 19.5 2C23.25 3.5 23.25 8 21 11C18.75 14 12 20 12 20C12 20 5.25 14 3 11Z"
                        stroke="#101828"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <Link
                    to="/cart"
                    className="menu__cart">
                    <div className="menu__cart-qty">{totalCount}</div>
                    <svg
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.94 17.06L17.26 7.31C17.1453 6.47997 16.7404 5.71734 16.1172 5.15725C15.4939 4.59716 14.6926 4.27576 13.855 4.25H13.75C13.75 3.25544 13.3549 2.30161 12.6517 1.59835C11.9484 0.895088 10.9946 0.5 10 0.5C9.00546 0.5 8.05163 0.895088 7.34837 1.59835C6.64511 2.30161 6.25002 3.25544 6.25002 4.25H6.14502C5.30749 4.27576 4.50611 4.59716 3.88287 5.15725C3.25963 5.71734 2.85477 6.47997 2.74002 7.31L1.06002 17.06C0.956834 17.6256 0.979262 18.2071 1.12572 18.7631C1.27217 19.3191 1.53907 19.8361 1.90752 20.2775C2.21796 20.6565 2.60803 20.9625 3.05003 21.1738C3.49204 21.385 3.97513 21.4964 4.46502 21.5H15.535C16.0249 21.4964 16.508 21.385 16.95 21.1738C17.392 20.9625 17.7821 20.6565 18.0925 20.2775C18.461 19.8361 18.7279 19.3191 18.8743 18.7631C19.0208 18.2071 19.0432 17.6256 18.94 17.06ZM10 2C10.5968 2 11.1691 2.23705 11.591 2.65901C12.013 3.08097 12.25 3.65326 12.25 4.25H7.75002C7.75002 3.65326 7.98707 3.08097 8.40903 2.65901C8.83099 2.23705 9.40328 2 10 2ZM16.945 19.31C16.7755 19.522 16.5612 19.6938 16.3174 19.8131C16.0736 19.9325 15.8064 19.9963 15.535 20H4.46502C4.19362 19.9963 3.92643 19.9325 3.68263 19.8131C3.43883 19.6938 3.2245 19.522 3.05502 19.31C2.82646 19.0365 2.66149 18.7157 2.57199 18.3707C2.4825 18.0257 2.47073 17.6651 2.53752 17.315L4.21752 7.565C4.27335 7.08382 4.49737 6.63782 4.85004 6.30574C5.20271 5.97365 5.66135 5.77683 6.14502 5.75H13.855C14.3387 5.77683 14.7973 5.97365 15.15 6.30574C15.5027 6.63782 15.7267 7.08382 15.7825 7.565L17.4625 17.315C17.5293 17.6651 17.5175 18.0257 17.428 18.3707C17.3386 18.7157 17.1736 19.0365 16.945 19.31Z"
                        fill="#101828"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="menu__register">
                  <svg
                    width="16"
                    height="22"
                    viewBox="0 0 16 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 0.75C5.37665 0.75 3.25 2.87665 3.25 5.5C3.25 8.12335 5.37665 10.25 8 10.25C10.6234 10.25 12.75 8.12335 12.75 5.5C12.75 2.87665 10.6234 0.75 8 0.75ZM4.75 5.5C4.75 3.70507 6.20507 2.25 8 2.25C9.79493 2.25 11.25 3.70507 11.25 5.5C11.25 7.29493 9.79493 8.75 8 8.75C6.20507 8.75 4.75 7.29493 4.75 5.5Z"
                      fill="#ffffff"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 11.75C2.37665 11.75 0.25 13.8766 0.25 16.5C0.25 19.1234 2.37665 21.25 5 21.25H11C13.6234 21.25 15.75 19.1234 15.75 16.5C15.75 13.8766 13.6234 11.75 11 11.75H5ZM1.75 16.5C1.75 14.7051 3.20507 13.25 5 13.25H11C12.7949 13.25 14.25 14.7051 14.25 16.5C14.25 18.2949 12.7949 19.75 11 19.75H5C3.20507 19.75 1.75 18.2949 1.75 16.5Z"
                      fill="#ffffff"
                    />
                  </svg>
                  <LogOut />
                </div>
                <button className="header__navbar-btn header__close-btn">
                  <FaTimes
                    size={24}
                    onClick={() => setShowPopup(false)}
                  />
                </button>
              </nav>
              <button
                className="header__navbar-btn header__bars-btn"
                onClick={() => setShowPopup(true)}>
                <FaBars size={24} />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  ) : (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Link
            className="header__logo logo"
            to="/">
            <div className="header__logo-img">
              <img
                src={logoSvg}
                alt="logo image"
              />
            </div>
            <span>agon</span>
          </Link>

          {(showPopup && (
            <nav
              className="header__navbar"
              ref={navRef}>
              <ul className="header__list">
                <li className="header__list-item">
                  <Link to="/About">About</Link>
                </li>
                <li className="header__list-item">
                  <Link to="/Company">Company</Link>
                </li>
              </ul>
              <div className="menu">
                <Link
                  to="/favorite"
                  className="menu__favorite">
                  <svg
                    width="24"
                    height="21"
                    viewBox="0 0 24 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 11C0.75 8 1.5 3.5 5.25 2C9 0.5 11.25 3.5 12 5C12.75 3.5 15.75 0.5 19.5 2C23.25 3.5 23.25 8 21 11C18.75 14 12 20 12 20C12 20 5.25 14 3 11Z"
                      stroke="#101828"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  to="/cart"
                  className="menu__cart">
                  <div className="menu__cart-qty">{totalCount}</div>
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.94 17.06L17.26 7.31C17.1453 6.47997 16.7404 5.71734 16.1172 5.15725C15.4939 4.59716 14.6926 4.27576 13.855 4.25H13.75C13.75 3.25544 13.3549 2.30161 12.6517 1.59835C11.9484 0.895088 10.9946 0.5 10 0.5C9.00546 0.5 8.05163 0.895088 7.34837 1.59835C6.64511 2.30161 6.25002 3.25544 6.25002 4.25H6.14502C5.30749 4.27576 4.50611 4.59716 3.88287 5.15725C3.25963 5.71734 2.85477 6.47997 2.74002 7.31L1.06002 17.06C0.956834 17.6256 0.979262 18.2071 1.12572 18.7631C1.27217 19.3191 1.53907 19.8361 1.90752 20.2775C2.21796 20.6565 2.60803 20.9625 3.05003 21.1738C3.49204 21.385 3.97513 21.4964 4.46502 21.5H15.535C16.0249 21.4964 16.508 21.385 16.95 21.1738C17.392 20.9625 17.7821 20.6565 18.0925 20.2775C18.461 19.8361 18.7279 19.3191 18.8743 18.7631C19.0208 18.2071 19.0432 17.6256 18.94 17.06ZM10 2C10.5968 2 11.1691 2.23705 11.591 2.65901C12.013 3.08097 12.25 3.65326 12.25 4.25H7.75002C7.75002 3.65326 7.98707 3.08097 8.40903 2.65901C8.83099 2.23705 9.40328 2 10 2ZM16.945 19.31C16.7755 19.522 16.5612 19.6938 16.3174 19.8131C16.0736 19.9325 15.8064 19.9963 15.535 20H4.46502C4.19362 19.9963 3.92643 19.9325 3.68263 19.8131C3.43883 19.6938 3.2245 19.522 3.05502 19.31C2.82646 19.0365 2.66149 18.7157 2.57199 18.3707C2.4825 18.0257 2.47073 17.6651 2.53752 17.315L4.21752 7.565C4.27335 7.08382 4.49737 6.63782 4.85004 6.30574C5.20271 5.97365 5.66135 5.77683 6.14502 5.75H13.855C14.3387 5.77683 14.7973 5.97365 15.15 6.30574C15.5027 6.63782 15.7267 7.08382 15.7825 7.565L17.4625 17.315C17.5293 17.6651 17.5175 18.0257 17.428 18.3707C17.3386 18.7157 17.1736 19.0365 16.945 19.31Z"
                      fill="#101828"
                    />
                  </svg>
                </Link>
              </div>
              <div className="menu__register">
                <svg
                  width="16"
                  height="22"
                  viewBox="0 0 16 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0.75C5.37665 0.75 3.25 2.87665 3.25 5.5C3.25 8.12335 5.37665 10.25 8 10.25C10.6234 10.25 12.75 8.12335 12.75 5.5C12.75 2.87665 10.6234 0.75 8 0.75ZM4.75 5.5C4.75 3.70507 6.20507 2.25 8 2.25C9.79493 2.25 11.25 3.70507 11.25 5.5C11.25 7.29493 9.79493 8.75 8 8.75C6.20507 8.75 4.75 7.29493 4.75 5.5Z"
                    fill="#ffffff"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 11.75C2.37665 11.75 0.25 13.8766 0.25 16.5C0.25 19.1234 2.37665 21.25 5 21.25H11C13.6234 21.25 15.75 19.1234 15.75 16.5C15.75 13.8766 13.6234 11.75 11 11.75H5ZM1.75 16.5C1.75 14.7051 3.20507 13.25 5 13.25H11C12.7949 13.25 14.25 14.7051 14.25 16.5C14.25 18.2949 12.7949 19.75 11 19.75H5C3.20507 19.75 1.75 18.2949 1.75 16.5Z"
                    fill="#ffffff"
                  />
                </svg>
                <BtnLogin />
              </div>
              <button className="header__navbar-btn header__close-btn">
                <FaTimes
                  size={24}
                  onClick={() => setShowPopup(false)}
                />
              </button>
            </nav>
          )) || (
            <>
              <nav
                className="header__navbar-show header__navbar-hidden"
                ref={navRef}>
                <ul className="header__list">
                  <li className="header__list-item">
                    <Link to="/About">About</Link>
                  </li>
                  <li className="header__list-item">
                    <Link to="/Company">Company</Link>
                  </li>
                </ul>
                <div className="menu">
                  <Link
                    to="/favorite"
                    className="menu__favorite">
                    <svg
                      width="24"
                      height="21"
                      viewBox="0 0 24 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 11C0.75 8 1.5 3.5 5.25 2C9 0.5 11.25 3.5 12 5C12.75 3.5 15.75 0.5 19.5 2C23.25 3.5 23.25 8 21 11C18.75 14 12 20 12 20C12 20 5.25 14 3 11Z"
                        stroke="#101828"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <Link
                    to="/cart"
                    className="menu__cart">
                    <div className="menu__cart-qty">{totalCount}</div>
                    <svg
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.94 17.06L17.26 7.31C17.1453 6.47997 16.7404 5.71734 16.1172 5.15725C15.4939 4.59716 14.6926 4.27576 13.855 4.25H13.75C13.75 3.25544 13.3549 2.30161 12.6517 1.59835C11.9484 0.895088 10.9946 0.5 10 0.5C9.00546 0.5 8.05163 0.895088 7.34837 1.59835C6.64511 2.30161 6.25002 3.25544 6.25002 4.25H6.14502C5.30749 4.27576 4.50611 4.59716 3.88287 5.15725C3.25963 5.71734 2.85477 6.47997 2.74002 7.31L1.06002 17.06C0.956834 17.6256 0.979262 18.2071 1.12572 18.7631C1.27217 19.3191 1.53907 19.8361 1.90752 20.2775C2.21796 20.6565 2.60803 20.9625 3.05003 21.1738C3.49204 21.385 3.97513 21.4964 4.46502 21.5H15.535C16.0249 21.4964 16.508 21.385 16.95 21.1738C17.392 20.9625 17.7821 20.6565 18.0925 20.2775C18.461 19.8361 18.7279 19.3191 18.8743 18.7631C19.0208 18.2071 19.0432 17.6256 18.94 17.06ZM10 2C10.5968 2 11.1691 2.23705 11.591 2.65901C12.013 3.08097 12.25 3.65326 12.25 4.25H7.75002C7.75002 3.65326 7.98707 3.08097 8.40903 2.65901C8.83099 2.23705 9.40328 2 10 2ZM16.945 19.31C16.7755 19.522 16.5612 19.6938 16.3174 19.8131C16.0736 19.9325 15.8064 19.9963 15.535 20H4.46502C4.19362 19.9963 3.92643 19.9325 3.68263 19.8131C3.43883 19.6938 3.2245 19.522 3.05502 19.31C2.82646 19.0365 2.66149 18.7157 2.57199 18.3707C2.4825 18.0257 2.47073 17.6651 2.53752 17.315L4.21752 7.565C4.27335 7.08382 4.49737 6.63782 4.85004 6.30574C5.20271 5.97365 5.66135 5.77683 6.14502 5.75H13.855C14.3387 5.77683 14.7973 5.97365 15.15 6.30574C15.5027 6.63782 15.7267 7.08382 15.7825 7.565L17.4625 17.315C17.5293 17.6651 17.5175 18.0257 17.428 18.3707C17.3386 18.7157 17.1736 19.0365 16.945 19.31Z"
                        fill="#101828"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="menu__register">
                  <svg
                    width="16"
                    height="22"
                    viewBox="0 0 16 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 0.75C5.37665 0.75 3.25 2.87665 3.25 5.5C3.25 8.12335 5.37665 10.25 8 10.25C10.6234 10.25 12.75 8.12335 12.75 5.5C12.75 2.87665 10.6234 0.75 8 0.75ZM4.75 5.5C4.75 3.70507 6.20507 2.25 8 2.25C9.79493 2.25 11.25 3.70507 11.25 5.5C11.25 7.29493 9.79493 8.75 8 8.75C6.20507 8.75 4.75 7.29493 4.75 5.5Z"
                      fill="#ffffff"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 11.75C2.37665 11.75 0.25 13.8766 0.25 16.5C0.25 19.1234 2.37665 21.25 5 21.25H11C13.6234 21.25 15.75 19.1234 15.75 16.5C15.75 13.8766 13.6234 11.75 11 11.75H5ZM1.75 16.5C1.75 14.7051 3.20507 13.25 5 13.25H11C12.7949 13.25 14.25 14.7051 14.25 16.5C14.25 18.2949 12.7949 19.75 11 19.75H5C3.20507 19.75 1.75 18.2949 1.75 16.5Z"
                      fill="#ffffff"
                    />
                  </svg>
                  <BtnLogin />
                </div>
                <button className="header__navbar-btn header__close-btn">
                  <FaTimes
                    size={24}
                    onClick={() => setShowPopup(false)}
                  />
                </button>
              </nav>
              <button
                className="header__navbar-btn header__bars-btn"
                onClick={() => setShowPopup(true)}>
                <FaBars size={24} />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
