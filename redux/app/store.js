import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from "../slices/hamburger";
import navbarReducer from "../slices/navbar";

export const store = configureStore({
  reducer: {
    hamburger: hamburgerReducer,
    navbar: navbarReducer,
  },
});
