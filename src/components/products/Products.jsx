import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

import styles from './Products.scss';

import smartWatchWhite from '../../images/product/smartWatchWhite.png';
import headPhoneBigBlack from '../../images/product/headPhoneBigBlack.png';
import headPhoneBigPink from '../../images/product/headPhoneBigPink.png';
import headPhoneBigBlue from '../../images/product/headPhoneBigBlue.png';
import bluetoothHeadphone from '../../images/product/bluetoothHeadphone.png';
import marshallFolding from '../../images/product/marshallFolding.png';
import smartWatchBig from '../../images/product/smartWatchBig.png';
import aluminiumHeadphone from '../../images/product/aluminiumHeadphone.png';
import beatsHeadphone from '../../images/product/beatsHeadphone.png';
import marshallHeadphone from '../../images/product/marshallHeadphone.png';
import toaster from '../../images/product/toaster.png';
import joystick from '../../images/product/joystick.png';

const Products = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const onPointerEnter = () => console.log('Enter');
  const onPointerLeave = () => console.log('Leave');
  const onPointerMove = (value: number, index: number) => console.log(value, index);

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title title">Featured Products For Pre-Order</h2>
        <div className="products__wrapper">
          <div className="products__item">
            <div className="products__favorite">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <path
                  fill="#29282d"
                  fill-rule="evenodd"
                  d="M1484.78,49.589a6.683,6.683,0,0,0-4.17-4.371c-1.71-.595-3.75,0-5.58,1.611-1.83-1.569-3.88-2.122-5.58-1.569a6.884,6.884,0,0,0-4.17,4.371c-0.47,1.57-.51,4.117,1.95,7.215,1.11,1.4,2.82,3.4,4.22,4.965,2.68,3.014,3.11,3.183,3.49,3.183h0.17c0.39,0,.77-0.168,3.45-3.224,1.41-1.613,3.11-3.609,4.22-4.966C1485.25,53.706,1485.25,51.159,1484.78,49.589Zm-3.28,6.2c-1.96,2.462-5.32,6.324-6.47,7.385-1.15-1.061-4.52-4.924-6.48-7.385-1.61-1.994-2.21-3.947-1.7-5.687a4.986,4.986,0,0,1,3.11-3.225c1.23-.467,2.9.169,4.43,1.655a0.84,0.84,0,0,0,1.06.126,0.447,0.447,0,0,0,.22-0.17c1.53-1.443,3.19-2.079,4.42-1.655a5.168,5.168,0,0,1,3.11,3.268C1483.71,51.8,1483.12,53.79,1481.5,55.784Z"
                  transform="translate(-1465.03 -45)"
                />
              </svg>
            </div>
            <div className="products__item-img">
              <img src={smartWatchWhite} alt="smartwatch white image" />
            </div>
            <div className="products__item-box">
              <div className="products__item-company">Sony</div>
              <a className="products__item-title" href="#">
                4K TV Game Mini Arcade Rocker Console 32GB/64GB
              </a>
              <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
              />
              <button className="products__item-btn">Add +</button>
            </div>
          </div>
          <div className="products__item">
            <div className="products__item-img">
              <img src={headPhoneBigBlack} alt="headphone black image" />
            </div>
            <div className="products__item-box">
              <div className="products__item-company">Google</div>
              <a className="products__item-title" href="#">
                4Cancelling Headset Music Sport Deep Bass
              </a>
              <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
              />
              <button className="products__item-btn">Add +</button>
            </div>
          </div>
          <div className="products__item">
            <div className="products__favorite">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <path
                  fill="#29282d"
                  fill-rule="evenodd"
                  d="M1484.78,49.589a6.683,6.683,0,0,0-4.17-4.371c-1.71-.595-3.75,0-5.58,1.611-1.83-1.569-3.88-2.122-5.58-1.569a6.884,6.884,0,0,0-4.17,4.371c-0.47,1.57-.51,4.117,1.95,7.215,1.11,1.4,2.82,3.4,4.22,4.965,2.68,3.014,3.11,3.183,3.49,3.183h0.17c0.39,0,.77-0.168,3.45-3.224,1.41-1.613,3.11-3.609,4.22-4.966C1485.25,53.706,1485.25,51.159,1484.78,49.589Zm-3.28,6.2c-1.96,2.462-5.32,6.324-6.47,7.385-1.15-1.061-4.52-4.924-6.48-7.385-1.61-1.994-2.21-3.947-1.7-5.687a4.986,4.986,0,0,1,3.11-3.225c1.23-.467,2.9.169,4.43,1.655a0.84,0.84,0,0,0,1.06.126,0.447,0.447,0,0,0,.22-0.17c1.53-1.443,3.19-2.079,4.42-1.655a5.168,5.168,0,0,1,3.11,3.268C1483.71,51.8,1483.12,53.79,1481.5,55.784Z"
                  transform="translate(-1465.03 -45)"
                />
              </svg>
            </div>
            <div className="products__item-discount">-15%</div>
            <div className="products__item-img">
              <img src={headPhoneBigPink} alt="headphone pink image" />
            </div>
            <div className="products__item-box">
              <div className="products__item-company">Apple</div>
              <a className="products__item-title" href="#">
                T500BT Original Wireless Bluetooth Headphone
              </a>
              <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
              />
              <button className="products__item-btn">Add +</button>
            </div>
          </div>
          <div className="products__item">
            <div className="products__item-discount">-15%</div>
            <div className="products__item-img">
              <img src={headPhoneBigBlue} alt="headphone blue image" />
            </div>
            <div className="products__item-box">
              <div className="products__item-company">Toshiba</div>
              <a className="products__item-title" href="#">
                Black Walnut Wood & Aluminum Headphone Stand
              </a>
              <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
              />
              <button className="products__item-btn">Add +</button>
            </div>
          </div>
          <div className="products__item">
            <div className="products__item-img">
              <img src={bluetoothHeadphone} alt="bluetooth headphone image" />
            </div>
            <div className="products__item-box">
              <div className="products__item-company">BassX</div>
              <a className="products__item-title" href="#">
                Beats Studio3 Wireless Bluetooth Headphones
              </a>
              <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
              />
              <button className="products__item-btn">Add +</button>
            </div>
          </div>
          <div className="products__item">
            <div className="products__item-img">
              <img src={marshallFolding} alt="marshall wireless bluetoth image" />
            </div>
            <div className="products__item-box">
              <div className="products__item-company">Konika</div>
              <a className="products__item-title" href="#">
                Marshall MAJOR III Wireless Folding Bluetooth
              </a>
              <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
              />
              <button className="products__item-btn">Add +</button>
            </div>
          </div>
          <div className="products__item">
            <div className="products__item-discount">-25%</div>
            <div className="products__item-img">
              <img src={smartWatchBig} alt="smartwatch image" />
            </div>
            <div className="products__item-box">
              <div className="products__item-company">Apple</div>
              <a className="products__item-title" href="#">
                T500BT Original Wireless Bluetooth Headphone
              </a>
              <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
              />
              <button className="products__item-btn">Add +</button>
            </div>
          </div>
          <div className="products__item">
            <div className="products__item-img">
              <img src={aluminiumHeadphone} alt="aluminium headphone image" />
            </div>
            <div className="products__item-box">
              <div className="products__item-company">Toshiba</div>
              <a className="products__item-title" href="#">
                Black Walnut Wood & Aluminum Headphone Stand
              </a>
              <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
              />
              <button className="products__item-btn">Add +</button>
            </div>
          </div>
          <div className="products__item">
            <div className="products__item-img">
              <img src={beatsHeadphone} alt="bassx headphone image" />
            </div>
            <div className="products__item-box">
              <div className="products__item-company">BassX</div>
              <a className="products__item-title" href="#">
                Beats Studio3 Wireless Bluetooth Headphones
              </a>
              <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
              />
              <button className="products__item-btn">Add +</button>
            </div>
          </div>
          <div className="products__item">
            <div className="products__item-discount">-15%</div>
            <div className="products__item-img">
              <img src={marshallHeadphone} alt="marshall headphone image" />
            </div>
            <div className="products__item-box">
              <div className="products__item-company">Konika</div>
              <a className="products__item-title" href="#">
                Marshall MAJOR III Wireless Folding Bluetooth
              </a>
              <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
              />
              <button className="products__item-btn">Add +</button>
            </div>
          </div>
          <div className="products__item">
            <div className="products__item-img">
              <img src={toaster} alt="toaster image" />
            </div>
            <div className="products__item-box">
              <div className="products__item-company">Apple</div>
              <a className="products__item-title" href="#">
                4T500BT Original Wireless Bluetooth Headphone
              </a>
              <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
              />
              <button className="products__item-btn">Add +</button>
            </div>
          </div>
          <div className="products__item">
            <div className="products__item-discount">-20%</div>
            <div className="products__item-img">
              <img src={joystick} alt="joystick gamepad image" />
            </div>
            <div className="products__item-box">
              <div className="products__item-company">Toshiba</div>
              <a className="products__item-title" href="#">
                Black Walnut Wood & Aluminum Headphone Stand
              </a>
              <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
              />
              <button className="products__item-btn">Add +</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
