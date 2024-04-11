import { createSlice } from '@reduxjs/toolkit';
import supabase from '../Supabase/supabaseClient';

const initialState = {
  teachers: [],
  loading: false,
  error: null,
};

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
      state.teachers.push(action.payload); // Use push to add new teacher to array
    },
    addTeacherFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addTeacherStart, addTeacherSuccess, addTeacherFailure } = teacherSlice.actions;

// Thunk action to add teacher to database and update Redux state
export const addTeacher = (teacherData) => async (dispatch) => {
  try {
    dispatch(addTeacherStart());
    const { data, error } = await supabase.from('teachers').insert(teacherData).select();
    if (error) {
      throw error;
    }
    dispatch(addTeacherSuccess(data)); // Pass the correct payload containing the new teacher data
    console.log('Teacher added', data);
  } catch (error) {
    dispatch(addTeacherFailure(error.message));
    console.error('Teacher could not be added', error.message);
  }
};

export default teacherSlice.reducer;
