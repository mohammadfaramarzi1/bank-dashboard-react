import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCardInfosFromServer = createAsyncThunk(
  "card/getCardInfosFromServer",
  async () => {
    return fetch("http://localhost:3000/cards")
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "card",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCardInfosFromServer.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default slice.reducer;
