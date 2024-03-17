import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
        id: 1,
        title: "Grilled Salmon",
        description: "Grilled salmon served with lemon and herbs.",
        picture: "https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 14.99,
        status: 'available'
      },
      {
        id: 2,
        title: "Fish Tacos",
        description: "Delicious fish tacos topped with salsa and avocado.",
        picture: "https://images.pexels.com/photos/4078054/pexels-photo-4078054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 10.99,
        status: 'available'
      },
      {
        id: 3,
        title: "Seafood Paella",
        description: "Traditional Spanish seafood paella with shrimp, mussels, and squid.",
        picture: "https://images.pexels.com/photos/4078054/pexels-photo-4078054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 18.99,
        status: 'available'
      }
  ],
};
export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const id = state.data.length + 1; 
      const newProduct = { ...action.payload, id };
      state.data.push(newProduct);
    },
    updateProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const index = state.data.findIndex(product => product.id === id); 
      if (index !== -1) {
        state.data[index] = updatedProduct; 
      }
    },
  },
});

export const { addProduct, updateProduct } = inventorySlice.actions;

export default inventorySlice.reducer;
