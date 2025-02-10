import React from "react";
import { Box } from "@mui/material";
import CardsInfo from "../../components/CardsInfo/CardsInfo";
import ExpenseChart from "../../components/ExpenseChart/ExpenseChart";
import RecentTransactions from "../../components/RecentTransactions/RecentTransactions";

function Transactions() {


  
  return (
    <Box component="div" sx={{ mr: 2 }}>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CardsInfo isCardPage={true} />
        <ExpenseChart />
      </Box>
      <RecentTransactions />
    </Box>
  );
}

export default Transactions;
