import { createSlice } from '@reduxjs/toolkit';

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        about: false,
        resume: false,
        portfolio: false,
        contact: false
    },
    reducers: {
        setAbout: (state, action) => {
            state.about = action.payload;
        },
        setResume: (state, action) => {
            state.resume = action.payload;
        },
        setPortfolio: (state, action) => {
            state.portfolio = action.payload;
        },
        setContact: (state, action) => {
            state.contact = action.payload;
        },
    },
});

export const { setAbout, setResume, setPortfolio, setContact } = navbarSlice.actions;

export const selectAbout = (state) => state.navbar.about;
export const selectResume = (state) => state.navbar.resume;
export const selectPortfolio = (state) => state.navbar.portfolio;
export const selectContact = (state) => state.navbar.contact;

export default navbarSlice.reducer;