import React from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import { FaFilter } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { handleSort } from '../../../../store/features/filterSlice';
import './shopProducts.scss';

const ShopProducts = () => {
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  const handleSorting = (e) => {
    dispatch(handleSort(e));
  };
  return (
    <div className="shop-products">
      <div className="filter-part d-flex  justify-content-between py-5">
        <select
          name="sort-list"
          id="sort-list"
          onChange={(e) => {
            handleSorting(e.target.value);
          }}
        >
          <option value="">Sắp xếp</option>
          <option value="Low">Sắp xếp theo giá: Thấp đến Cao</option>
          <option value="High">Sắp xếp theo giá: Cao đến thấp</option>
        </select>
      </div>

      <div className="row">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            image={item.image}
            title={item.title}
            category={item.category}
            price={item.price}
            oldPrice={item.oldPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopProducts;
