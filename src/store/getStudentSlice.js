import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../Supabase/supabaseClient";
import { useSelector } from "react-redux";

// Async thunk to fetch students from Supabase
const fetchStudents = createAsyncThunk("students/fetchStudents", async (_, { getState }) => {
  try {
    const username = useSelector((state) => state.username.username); // Get the current username from the store
    const { data, error } = await supabase
      .from("students")
      .select("*")
      .eq("created_by_user_name", username); // Filter students by the current username
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw error;
  }
});

// Redux slice for students
const getStudentSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    status: "idle", // or 'loading', 'succeeded', 'failed'
    error: null,
    filter: null,
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setFilter } = getStudentSlice.actions;

export default getStudentSlice.reducer;

// Export the action creator for fetching students
export { fetchStudents };
