import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../Supabase/supabaseClient";
//Async thunk to update a student
export const updateStudent = createAsyncThunk(
    'students/updateStudent',
)
async (studentData, {rejectWithValue}) => {
    try {
        const {data, error} = await supabase.from('students').update(studentData).eq('id',studentData.id)
        if(error){
            throw new Error(error.message)
        }
        return data;
    } catch(error){
        return rejectWithValue(error.message)
    }
}

//async thunk to delete a student
export const deleteStudent = createAsyncThunk(
    'students/deleteStudent',
    async (studentId, {rejectWithValue}) => {
        try {
            const {error}  = await supabase.from('students').delete().eq('id', studentId)
            if(error){
                throw new Error(error.message)
            }
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

//redux slice for updating and deleting students
const studentUpdateSlice = createSlice({
    name: 'studentUpdate',
    initialState: {
        status: 'idle',
        error: null,
    },
    reducers:{
    },
    extraReducers: (builder) => {
        builder.addCase(updateStudent.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(updateStudent.fulfilled, (state) => {
            state.status = 'succeeded'
        })
        .addCase(updateStudent.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        })
        .addCase(deleteStudent.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(deleteStudent.fulfilled, (state) => {
            state.status = 'succeeded';
          })
          .addCase(deleteStudent.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
          });
    }
})