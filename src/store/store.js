import { configureStore } from "@reduxjs/toolkit";
import teacherSlice from "./teacherSlice";
import addStudentSlice from "./addStudentSlice";
import batchSlice from "./batchSlice";
import getStudentSlice from "./getStudentSlice";
import studentUpdateSlice from "./studentUpdateSlice";
import authSlice from "./authSlice";
const store = configureStore({
  reducer: {
    teachers: teacherSlice,
    addBatches: batchSlice,
    addStudents: addStudentSlice,
    getStudents: getStudentSlice,
    updateStudents: studentUpdateSlice,
    auth: authSlice,
  },
});
export default store;
