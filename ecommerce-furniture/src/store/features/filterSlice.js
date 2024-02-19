import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../data/data';

const initialState = {
  products: [...data],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // Sắp xếp sản phẩm
    handleSort: (state, action) => {
      if (action.payload === 'Low') {
        // Sắp xếp giảm dần
        state.products = [
          ...state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
        ];
      } else if (action.payload === 'High') {
        // Sắp xếp tăng dần
        state.products = [
          ...state.products.sort((a, b) => (a.price < b.price ? 1 : -1)),
        ];
      } else {
        // Sắp xếp mặc định
        state.products = [
          ...state.products.sort((a, b) => (a.id > b.id ? 1 : -1)),
        ];
      }
    },

    // Tìm sản phẩm theo category
    handleCategory: (state, action) => {
      console.log(action.payload);
      if (action.payload === 'All') {
        // Tìm tất cả
        state.products = [...data];
      } else {
        // Tìm sản phẩm theo category
        const categoryItems = data.filter((item) => {
          return item.category === action.payload;
        });
        state.products = categoryItems;
      }
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { handleSort, handleCategory } = filterSlice.actions;
