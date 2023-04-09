import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestLoginAPI, requestRefreshAPI } from "../../api/auth";
import { LoginRequest } from "../../types/auth";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: LoginRequest, { rejectWithValue }) => {
    try {
      const res = await requestLoginAPI({ email, password });
      return res.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue }) => {
    try {
      const res = await requestRefreshAPI();

      return res.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export interface authState {
  accessToken: string | null;
  refreshToken: string | null;
}

const authInitialState: authState = {
  accessToken: localStorage.getItem("access_token"),
  refreshToken: localStorage.getItem("refresh_token"),
};

const authReducer = createSlice({
  name: "authReducer",
  initialState: authInitialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.accessToken = action.payload.token.access;
      state.refreshToken = action.payload.token.refresh;
      localStorage.setItem("refresh_token", action.payload.token.refresh);
      localStorage.setItem("access_token", action.payload.token.access);
    });
    builder.addCase(refresh.fulfilled, (state, action) => {
      state.accessToken = action.payload.access;
      localStorage.setItem("access_token", action.payload.access);
    });
  },
});

export const authActions = authReducer.actions;
export default authReducer.reducer;
