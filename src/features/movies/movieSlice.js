import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieService from './movieService'

const initialState = {
    movies: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//crear una nueva pelicula
export const createMovie = createAsyncThunk('movies/create', async (movieData, thunkAPI) => {
    try {
        /* `const token = thunkAPI.getState().auth.user.token` is retrieving the authentication token
        from the Redux store state using the `thunkAPI` object. The `thunkAPI` object provides
        access to the Redux store state and other utilities that can be used within a Redux thunk
        function. In this case, the authentication token is needed to perform certain actions, such
        as creating or deleting a movie, that require authentication. */
        const token = thunkAPI.getState().auth.user.token
        return await movieService.createMovie(movieData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//mostrar las peliculas al usuario
export const getMovies = createAsyncThunk('movies/getAll', async (_, thunkAPI) => {
    try {
        return await movieService.getMovies()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//borrar una pelicula
export const deleteMovie = createAsyncThunk('movies/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await movieService.deleteMovie(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// agregar una pelicula a favoritos
export const setFavMovies = createAsyncThunk('movies/setfavorite', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await movieService.setFavMovies(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// remover una pelicula a favoritos
export const removeFavMovie = createAsyncThunk('movies/removefavorite', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await movieService.removeFavMovie(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createMovie.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createMovie.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.movies.push(action.payload)
            })
            .addCase(createMovie.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            .addCase(getMovies.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.movies = action.payload
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            .addCase(deleteMovie.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteMovie.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.movies = state.movies.filter((movie) => movie._id !== action.payload.id)
            })
            .addCase(deleteMovie.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            .addCase(setFavMovies.pending, (state) => {
                state.isLoading = true
            })
            .addCase(setFavMovies.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload
            })
            .addCase(setFavMovies.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            .addCase(removeFavMovie.pending, (state) => {
                state.isLoading = true
            })
            .addCase(removeFavMovie.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload
            })
            .addCase(removeFavMovie.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = movieSlice.actions
export default movieSlice.reducer