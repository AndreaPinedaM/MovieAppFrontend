// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import authService from './authService'

// const initialState = {
//     favMovies: [],
//     loading: false,
//     error: null
// };

// // Create the slice
// export const FavMoviesSlice = createSlice({
//     name: 'favs',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         // Handle the pending state while the data is being fetched
//         builder.addCase(fetchFavMovies.pending, (state) => {
//             state.loading = true;
//             state.error = null;
//         });

//         // Handle the fulfilled state when the data is successfully fetched
//         builder.addCase(fetchFavMovies.fulfilled, (state, action) => {
//             state.loading = false;
//             state.favMovies = action.payload;
//         });

//         // Handle the rejected state if an error occurs during the fetch
//         builder.addCase(fetchFavMovies.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message;
//         });
//     }
// });

// export const { reset } = FavMoviesSlice.actions
// export default FavMoviesSlice.reducer






