import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        TrendingMovies: null,
        TrailerId: null,
        NowPlayingMovies: null,
    },
    reducers: {
        addTrendingMovies: (state,action) => {
            state.TrendingMovies = action.payload;
        },
        addTrailerId:(state,action) => {
            state.TrailerId = action.payload;
        },
        addNowPlayingMovies: (state,action) => {
            state.NowPlayingMovies = action.payload;
        },
    }
})

export const {addTrendingMovies, addTrailerId, addNowPlayingMovies} = movieSlice.actions;

export default movieSlice.reducer;