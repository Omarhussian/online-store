import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slices/CartSlice';
import inventoryReducer from './Slices/InventorySlice';

 const store = configureStore({
  reducer: {
    cart: cartReducer,
    inventory: inventoryReducer,
  },
});

export {store}