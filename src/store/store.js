import {configureStore} from '@reduxjs/toolkit'
import teacherSlice from './teacherSlice';
import addStudentSlice from './addStudentSlice';
import batchSlice from './batchSlice';
const store = configureStore({
    reducer:{
        teachers: teacherSlice,
        addBatches: batchSlice,
        addStudents: addStudentSlice,
    }
})
export default store;