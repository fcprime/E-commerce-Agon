import React from 'react';
import styles from './Order.scss';

import planIcon from '../../images/icon-order/planIcon.svg';
import connectIcon from '../../images/icon-order/connectIcon.svg';
import matchIcon from '../../images/icon-order/matchIcon.svg';
import completeIcon from '../../images/icon-order/completeIcon.svg';
import reviewIcon from '../../images/icon-order/reviewIcon.svg';

const Order = () => {
  return (
    <section className="order">
      <div className="container">
        <h2 className="order__title title">Cross-border ordering has never been easier</h2>
        <div className="order__inner">
          <div className="order__item order__item-one">
            <div className="order__item-img">
              <img
                src={planIcon}
                alt="plan icon"
              />
            </div>
            <h4 className="order__item-title">Start Plan</h4>
            <div className="order__item-text">Choose any of our packages</div>
          </div>
          <div className="order__item order__item-two">
            <div className="order__item-img">
              <img
                src={connectIcon}
                alt="connect icon"
              />
            </div>
            <h4 className="order__item-title">Connect</h4>
            <div className="order__item-text">Receive concepts In 24 hours</div>
          </div>
          <div className="order__item order__item-three">
            <div className="order__item-img">
              <img
                src={matchIcon}
                alt="development icon"
              />
            </div>
            <h4 className="order__item-title">Match</h4>
            <div className="order__item-text">Development Stage</div>
          </div>
          <div className="order__item order__item-for">
            <div className="order__item-img">
              <img
                src={completeIcon}
                alt="support icon"
              />
            </div>
            <h4 className="order__item-title">Completea</h4>
            <div className="order__item-text">After-release Support</div>
          </div>
          <div className="order__item order__item-five">
            <div className="order__item-img">
              <img
                src={reviewIcon}
                alt="review icon"
              />
            </div>
            <h4 className="order__item-title">Review</h4>
            <div className="order__item-text">Project launch and checkout</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
