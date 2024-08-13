import { configureStore } from '@reduxjs/toolkit';
import Product from './Product';

export const store = configureStore({
  reducer: {
    Product : Product
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;