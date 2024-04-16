import {configureStore} from '@reduxjs/toolkit'
import teacherSlice from './teacherSlice';
import addStudentSlice from './addStudentSlice';
import batchSlice from './batchSlice';
import getStudentSlice from './getStudentSlice';
const store = configureStore({
    reducer:{
        teachers: teacherSlice,
        addBatches: batchSlice,
        addStudents: addStudentSlice,
        getStudents: getStudentSlice,
    }
})
export default store;