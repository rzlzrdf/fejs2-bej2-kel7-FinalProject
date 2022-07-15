import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  user: null,
  error: "",
  message: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    const { email, password } = data;
    try {
      const response = await axios.post(
        "https://secondhandapp.herokuapp.com/api/auth/login",
        { email, password }
      );

      return response.data.token;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    retrieveLocalStorage: (state) => {
      const user = localStorage.getItem("user");
      if (user) {
        state.user = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
      state.message = null;
      state.isLoading = false;
      localStorage.removeItem("user");
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
      state.message = null;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    [login.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
      state.message = null;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.message = null;
    },
  },
});

export default authSlice;
