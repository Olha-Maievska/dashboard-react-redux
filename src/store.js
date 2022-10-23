import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "features/filters/filters-slice";
import { positionReducer } from "features/positions/positions-slice";


export const store = configureStore({
  reducer: {
    filters: filterReducer,
    positions: positionReducer
  },
  devTools: true
})