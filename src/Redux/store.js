import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./Store/card";
import investmentsReducer from "./Store/investments";
import transactionsReducer from "./Store/transactions";
import userReducer from "./Store/user";

const store = configureStore({
  reducer: {
    card: cardReducer,
    investments: investmentsReducer,
    transactions: transactionsReducer,
    user: userReducer,
  },
});

export default store;
