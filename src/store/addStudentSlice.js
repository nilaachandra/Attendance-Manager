import { createSlice } from '@reduxjs/toolkit'
import supabase from '../Supabase/supabaseClient'

const initialState = {
    students: [],
    loading: false,
    error: null
}

const addStudentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        addStudentStart(state) {
            state.loading = true;
            state.error = null;
        },
        addStudentSuccess(state) {
            state.loading = false;
            state.error = null;
            state.students.push(action.payload)
        },
        addStudentFailure(state, action){
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const {addStudentStart, addStudentSuccess, addStudentFailure } = addStudentSlice.actions;

//thunk action to add teacher to database and update Redux state

export const addStudents = (studentData) => async (dispatch) => {
    try {
        dispatch(addStudentSlice())
        const {data,error} = await supabase.from('students').insert(studentData).select();
        if(error){
            throw error
        }
        dispatch(addStudentSuccess(data))
        console.log('Student Added', data)
    } catch (error) {
        dispatch(addStudentFailure(error.message))
        console.error('Student was not added,', error.message)
    }
}
export default addStudentSlice.reducer