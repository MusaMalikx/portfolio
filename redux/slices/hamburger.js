import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState,
  reducers: {
    change: (state) => {
        state.value = !state.value
    },
  },
});

export const { change } = hamburgerSlice.actions;
export const selectHamburger = (state) => state.hamburger.value;
//export const selectVerification = (state) => state.user.verified;

export default hamburgerSlice.reducer;