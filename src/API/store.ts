import { configureStore } from '@reduxjs/toolkit';
import Product from './Product';
import PAGEController from './PAGEController';

export const store = configureStore({
  reducer: {
    Product : Product,
    PAGEController : PAGEController,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;