import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptMovies: null,
        movieResults: null,
        movieNames: null,
    },
    reducers:{
        toggleGptSearchView : (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieresult : (state,action) => {
            const { movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
})

export const { toggleGptSearchView, addGptMovieresult } = gptSlice.actions;

export default gptSlice.reducer