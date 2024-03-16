import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import inventoryReducer from './inventorySlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    inventory: inventoryReducer,
  },
});
