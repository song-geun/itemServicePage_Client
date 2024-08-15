import { configureStore } from '@reduxjs/toolkit';
import Product from './Product';
import PAGEController from './PAGEController';
import ProductDATA from './ProductData';

export const store = configureStore({
  reducer: {
    Product : Product,
    ProductDATA : ProductDATA,
    PAGEController : PAGEController,

  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;