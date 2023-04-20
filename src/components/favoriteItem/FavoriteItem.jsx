import React, { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';

import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../redux/slices/cartSlice';
import { removeItem } from '../../redux/slices/favoriteSlice';

const FavoriteBlock = ({
  id,
  imageUrl,
  subtitle,
  title,
  price,
  discount,
  alt,
  star,
  defaultRating,
}) => {
  const [rating, setRating] = useState(star);

  useEffect(() => {
    const storedRating = localStorage.getItem(`${star}, ${id}`);
    if (storedRating) {
      setRating(parseInt(storedRating));
    }
  }, [star, id]);

  const handleClick = (star) => {
    setRating(star);
    localStorage.setItem(`${star}, ${id}`);
  };

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id == id));
  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      imageUrl,
      title,
      price,
      discount,
      subtitle,
    };
    dispatch(addItem(item));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className="products__item">
      <button
        onClick={onClickRemove}
        className="products__favorite ">
        <svg
          className=" products__favorite-add"
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
      </button>
      <div className={discount ? 'products__item-discount' : 'products__item-discount--none'}>
        {discount}
      </div>
      <div className="products__item-img favorite__item-img">
        <img
          src={imageUrl}
          alt={alt}
        />
      </div>
      <div className="products__item-box">
        <div className="products__item-company">{subtitle}</div>
        <a
          className="products__item-title"
          href="#">
          {title}
        </a>
        <div className="products__item-stars">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <span
                key={ratingValue}
                onClick={() => handleClick(ratingValue)}
                style={{ color: ratingValue <= rating ? '#ffc107' : '#e4e5e9', cursor: 'pointer' }}>
                &#9733;
              </span>
            );
          })}
        </div>
        <div className="products__item-bottom">
          <div className="products__item-price">{price}$</div>
          <button
            onClick={onClickAdd}
            className="products__item-btn">
            + Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteBlock;
