import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

//Obtener el usuario del localstorage en caso de que exista
const user = JSON.parse(sessionStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    favMovies: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//REGISTRAR USUARIO
export const signup = createAsyncThunk('auth/signup', async (user, thunkAPI) => {
    try {
        return await authService.signup(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//LOGIN
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//UPDATE USER
export const update = createAsyncThunk('auth/update', async (user, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await authService.update(user, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//GET DATA
export const getData = createAsyncThunk('auth/data', async (user, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await authService.getMyData(token, user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//LOGOUT
export const logout = createAsyncThunk('auth/logout', async () => {
    authService.logout()
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    /* Toma y resetea un estado. */
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
            state.favMovies = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.isLoading = true
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload //payload response.data
            })
            .addCase(signup.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload //thunkAPI.rejectedWithValue(message) desde el estado
                state.user = null
            })

            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })

            .addCase(update.pending, (state) => {
                state.isLoading = true
            })
            .addCase(update.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload
            })
            .addCase(update.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            .addCase(getData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.favMovies = action.payload
                state.message = action.payload
            })
            .addCase(getData.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
    }
})

/* `export const {reset} = authSlice.actions` is exporting the `reset` reducer function from the
`authSlice` slice. This allows other parts of the application to import and use the `reset` function
to reset the state of the `auth` slice. LOS REDUCERS SE EXPORTAN como una ACCION*/
export const { reset } = authSlice.actions
export default authSlice.reducer
