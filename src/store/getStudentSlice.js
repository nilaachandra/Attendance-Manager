import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../Supabase/supabaseClient";

export const getStudents = createAsyncThunk(
    'allStudents/getStudents',
    async () => {
        try {
            const { data, error } = await supabase.from('students').select('*');         
            if (error) {
                throw error;
            }
            return data || [];
        } catch (error) {
            throw error;
        }
    }
)

const initialState = {
    allStudents: [], 
    loading: false,
    error: null
}

const getStudentSlice = createSlice({
    name: 'allStudents',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getStudents.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(getStudents.fulfilled, (state, action) => {
            state.loading = false;
            state.allStudents = action.payload; 
        })
        builder.addCase(getStudents.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default getStudentSlice.reducer;
