import React from 'react';
import styles from './Product.scss';

import monitorIcon from '../../images/product/monitor.png';
import headphoneBlack from '../../images/product/headphoneBlack.png';
import headphonePink from '../../images/product/headphonePink.png';

const Product = () => {
  return (
    <div className="product">
      <a className="product__item" href="#">
        <div className="product__item-img">
          <img src={monitorIcon} alt="monitor image" />
        </div>
        <div className="product__item-box">
          <h3 className="product__item-title">4K TV Game Mini Arcade Rocker Console 32GB/64GB</h3>
          <div className="product__item-price">$29.80</div>
        </div>
      </a>
      <a className="product__item" href="#">
        <div className="product__item-img">
          <img src={headphoneBlack} alt="black headphone image" />
        </div>
        <div className="product__item-box">
          <h3 className="product__item-title">Cancelling Headset Music Sport Deep Bass</h3>
          <div className="product__item-price">$420.00</div>
        </div>
      </a>
      <a className="product__item" href="#">
        <div className="product__item-img">
          <img className="product__item-images" src={headphonePink} alt="monitor image" />
        </div>
        <div className="product__item-box">
          <h3 className="product__item-title">T500BT Original Wireless Bluetooth Headphone Deep</h3>
          <div className="product__item-price">$96.50</div>
        </div>
      </a>
    </div>
  );
};

export default Product;
