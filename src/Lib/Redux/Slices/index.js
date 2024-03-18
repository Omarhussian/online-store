import { combineReducers } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import InventorySlice from "./InventorySlice";

// Combine multiple reducers into a single root reducer

export default combineReducers({
    CartSlice,
    InventorySlice
})