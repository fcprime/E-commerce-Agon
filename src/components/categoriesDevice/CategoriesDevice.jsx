import React from 'react';
import styles from './CategoriesDevice.scss';

const CategoriesDevice = ({ value, onClickCategory }) => {
  const categories = [
    'All',
    'Headphones',
    'Smart watch',
    'Bluetooth headset',
    'Toaster',
    'Gamepad',
  ];

  return (
    <div className="categories-device">
      <ul className="categories-device__list">
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={
              value === i
                ? 'categories-device__item-active categories-device__item'
                : 'categories-device__item'
            }>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesDevice;
