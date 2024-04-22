import { createSlice } from "@reduxjs/toolkit";
import { useSession } from "@clerk/clerk-react";

const initialState = {
  username: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { setUsername, setLoading, setError, clearError } = authSlice.actions;

export const fetchUsername = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { isSignedIn, isLoaded, session } = useSession(); // Get authentication status and session from Clerk
    if (isLoaded && isSignedIn && session) {
      dispatch(setUsername(session.user.username));
    } else {
      // Handle the case where the session is not available or user is not signed in
      dispatch(setUsername(null));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default authSlice.reducer;
