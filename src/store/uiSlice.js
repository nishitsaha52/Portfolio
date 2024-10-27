// src/store/uiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light', // or 'dark'
  isSmallScreen: window.innerWidth < 600, // Example breakpoint for small screens
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setSmallScreen(state, action) {
      state.isSmallScreen = action.payload;
    },
  },
});

// Export actions
export const { toggleTheme, setSmallScreen } = uiSlice.actions;

// Export reducer
export default uiSlice.reducer;
