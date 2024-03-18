import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './Slices';

const persistConfig = {
  key: 'root', // Key for the persisted state in storage
  storage, // Storage engine to use (default is localStorage)
  whitelist: ['CartSlice' , 'InventorySlice'],
};

// Create a persisted reducer with redux-persist

const persistedReducer = persistReducer(persistConfig, reducers);


// Configure Redux store with persisted reducer and custom middleware

const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }),
});

const persistor = persistStore(store);

export { store, persistor };
