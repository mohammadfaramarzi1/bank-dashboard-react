import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "./Store/card";

const store = configureStore({
  reducer: {
    bank: bankReducer,
  },
});

export default store;
