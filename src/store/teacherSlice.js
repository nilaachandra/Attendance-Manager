import { createSlice } from '@reduxjs/toolkit'
import supabase from '../Supabase/supabaseClient';

const initialState = {
    teachers: [],
    loading: false,
    error: null,
}

const teacherSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {
        addTeacherStart(state) {
            state.loading = true;
            state.error = null;
        },
        addTeacherSuccess(state, action) {
            state.loading = false;
            state.error = null;
            state.teachers = push(action.payload);
        },
        addTeacherFailure(state, action) {
            state.loading = false;
            state.error = action.payload
        }
    }
})
export const { addTeacherStart, addTeacherSuccess, addTeacherFailure } = teacherSlice.actions
export default teacherSlice.reducer

export const addTeacher = (teacherData) => async (dispatch) => {
    try {
        dispatch(addTeacherStart())
        const {data, error} = await supabase.from('teachers').insert(teacherData)
        if(error) {
            throw error;
        }
        dispatch(addTeacherSuccess(data))
    } catch (error) {
        dispatch(addTeacherFailure(error.message))
    }
}