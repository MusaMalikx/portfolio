import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from "../slices/hamburger";

export const store = configureStore({
  reducer: {
    hamburger: hamburgerReducer,
  },
});
