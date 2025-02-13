import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getInvestmentInfosFromServer = createAsyncThunk(
  "card/getInvestmentInfosFromServer",
  async () => {
    return fetch("http://localhost:3000/investment")
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "investment",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInvestmentInfosFromServer.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default slice.reducer;