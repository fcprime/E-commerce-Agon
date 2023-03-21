import React from 'react';
import styles from './HeaderInner.scss';

import projectIcon from '../../images/icons/projectIcon.svg';
import custommerIcon from '../../images/icons/custommerIcon.svg';
import smartWatchImg from '../../images/product/smartWatch.png';
import vectorLineImg from '../../images/icons/vector-line.svg';

const HeaderInner = () => {
  return (
    <div className="header__inner">
      <div className="header__wrapper">
        <h1 className="header__wrapper-title">Exclusive Smart Watch</h1>
        <h2 className="header__title title">Let go of the Challenge See yourself better</h2>
        <p className="header__text">
          Connect your conversations with the tools and services that you use to get the job done.
          With over 1,500 apps and a robust API
        </p>
        <div className="header__links">
          <a className="header__links-box--one" href="#">
            Get Started
            <div className="header__link-one"></div>
          </a>
          <a className="header__links-box--two" href="#">
            How it works
            <div className="header__link-two"></div>
          </a>
        </div>
        <div className="header__number">
          <div className="header__number-box">
            <div className="header__number-img">
              <img src={projectIcon} alt="project image" />
            </div>
            <h3 className="header__number-title">
              +12k
              <span>Projects done</span>
            </h3>
          </div>
          <div className="header__number-box">
            <div className="header__number-img">
              <img src={custommerIcon} alt="custommers image" />
            </div>
            <h3 className="header__number-title">
              68k
              <span>Custommers</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="header__box">
        <div className="header__product">
          <img src={smartWatchImg} alt="smart watch image" />
        </div>
        <div className="header__static">
          <div className="header__static-title">Market Static</div>
          <div className="header__static-subtitle">Course overview</div>
          <div className="header__static-line">
            <div className="header__static-number">+15%</div>
            <div className="header__static-img">
              <img src={vectorLineImg} alt="vector line image" />
            </div>
            <ul className="header__static-list">
              <li className="header__static-item">Jan</li>
              <li className="header__static-item">Feb</li>
              <li className="header__static-item">Mar</li>
              <li className="header__static-item">Apr</li>
              <li className="header__static-item">May</li>
              <li className="header__static-item header__static-item--active">Jun</li>
              <li className="header__static-item">Jul</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInner;
