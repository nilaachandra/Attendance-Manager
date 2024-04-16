import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../Supabase/supabaseClient";
import { useSession } from "@clerk/clerk-react";

const initialState = {
    getStudents: [],
    loading: false,
    error: null
}

const getStudentSlice = createSlice({
    name: 'userStudents',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(getStudents.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(getStudents.fulfilled, (state, action) => {
            state.loading = false;
            state.userStudents = action.payload;
        })
        builder.addCase(getStudents.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default getStudentSlice.reducer;
export const getStudents = createAsyncThunk(
    'userStudents/getStudents',
    async (_,{getState}) => {
        try {
            const { session } = useSession();
            if(!session){
                throw new Error('User is not authenticated')
            }
            const {data, error} = await supabase.from('students').select('*').eq('created_by_user_name', session.user.username)          
            if(error){
                throw error;
            }
            return data || [];
        } catch (error) {
            throw error;
        }
    }
)