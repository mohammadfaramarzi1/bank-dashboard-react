import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTransactionsInfosFromServer = createAsyncThunk(
  "transactions/getTransactionsInfosFromServer",
  async () => {
    return fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "transactions",
  initialState: [],
  reducers: {
    addNewTransaction: (state, action) => {
      return [...state, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getTransactionsInfosFromServer.fulfilled,
      (state, action) => {
        return [...state, action.payload];
      }
    );
  },
});

export default slice.reducer;
export const { addNewTransaction } = slice.actions;
