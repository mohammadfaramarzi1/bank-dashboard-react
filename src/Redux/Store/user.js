import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserInfosFromServer = createAsyncThunk(
  "card/getUserInfosFromServer",
  async () => {
    return fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "user",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserInfosFromServer.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default slice.reducer;
