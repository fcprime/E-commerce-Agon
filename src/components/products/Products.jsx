import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../../redux/slices/filterSlice';

import axios from 'axios';

import styles from './Products.scss';

import ProductsBlock from '../productsBlock/ProductsBlock';
import CategoriesDevice from '../categoriesDevice/CategoriesDevice';
import Skeleton from './Skeleton';
import Search from '../search/Search';

const Products = ({ searchValue, setSearchValue, star, id }) => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();
  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(`https://641c2b831a68dc9e460246d0.mockapi.io/items?${category}${search}`)
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [categoryId, searchValue]);

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title title">Featured Products For Pre-Order</h2>
        <CategoriesDevice
          value={categoryId}
          onClickCategory={onClickCategory}
        />
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className="products__wrapper">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj) => (
                <ProductsBlock
                  userId={id}
                  star={star}
                  key={obj.id}
                  {...obj}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
