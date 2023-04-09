import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMyInfo = createAsyncThunk(
  "todolist/",
  async (accessToken: string | null, { rejectWithValue }) => {
    try {
      //   const res = await fetchMyInfo(accessToken);
      //   return res.data;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

interface profileState {
  myInfo: null;
  myProfile: null | string;
  userProfile: null | string;
}

const profileInitialState: profileState = {
  myInfo: null,
  myProfile: null,
  userProfile: null,
};

const todolistReducer = createSlice({
  name: "todolistReducer",
  initialState: profileInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMyInfo.fulfilled, (state, action) => {
      //   state.myInfo = action.payload;
    });
  },
});

export const profileActions = todolistReducer.actions;
export default todolistReducer.reducer;
