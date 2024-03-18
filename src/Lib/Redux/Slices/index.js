import { combineReducers } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import InventorySlice from "./InventorySlice";


export default combineReducers({
    CartSlice,
    InventorySlice
})