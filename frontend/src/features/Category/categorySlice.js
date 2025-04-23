import { getCategories } from "./getCategories"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    categories: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const categories = await getCategories();
    return categories;
})

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.isLoading = true
            state.isError = false
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.isLoading = false
            state.posts = action.payload
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.error = action.error?.message
        })
    }
})

export default categorySlice.reducer;