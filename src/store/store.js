// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import repositoriesReducer from './repositoriesSlice'; // Adjust the path accordingly
import uiReducer from './uiSlice'; // Adjust the path accordingly

const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
    ui: uiReducer,
  },
});

export default store;  
