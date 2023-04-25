import { createSlice } from "@reduxjs/toolkit";

// get data from localStorage
const initialState = {
  movies: [],
  series: [],
  episode: [],
};

const slice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    updateMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export const actions = slice.actions;
