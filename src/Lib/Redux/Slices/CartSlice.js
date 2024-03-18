import { createSlice } from '@reduxjs/toolkit';

// here dfinig initial state for the cart slice
const initialState = {
  items: [], // array to store items in the cart = 
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
     // here are reducer function to remove an item from the cart which was not provided in ux but ready to use 
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
     // here are reducer function to clear the whole cart which was not provided in ux but ready to use 

    clearCart: state => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
