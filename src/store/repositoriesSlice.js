// src/store/repositoriesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Asynchronous action to fetch repositories
export const fetchRepositories = createAsyncThunk(
  'repositories/fetchRepositories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://api.github.com/users/nishitsaha52/repos');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'Something went wrong');
    }
  }
);

const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState: {
    repositories: [],
    message: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.loading = true;
        state.message = 'Fetching repositories...';
      })
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        state.loading = false;
        // Exclude repository named "nishitsaha52"
        state.repositories = action.payload.filter(repo => repo.name !== 'nishitsaha52');
        state.message = null;
      })
      .addCase(fetchRepositories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch repositories';
      });
  },
});

export const { clearMessage } = repositoriesSlice.actions;
export default repositoriesSlice.reducer;
