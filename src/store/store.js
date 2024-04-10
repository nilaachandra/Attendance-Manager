import {configureStore} from '@reduxjs/toolkit'
import teacherSlice from './teacherSlice';
const store = configureStore({
    reducer:{
        teachers: teacherSlice,
    }
})
export default store;