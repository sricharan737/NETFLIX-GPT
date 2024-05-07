import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        TrendingMovies: null,
        TrailerId: null,
    },
    reducers: {
        addTrendingMovies: (state,action) => {
            state.TrendingMovies = action.payload;
        },
        addTrailerId:(state,action) => {
            state.TrailerId = action.payload;
        }
    }
})

export const {addTrendingMovies, addTrailerId} = movieSlice.actions;

export default movieSlice.reducer;