import React from "react";
import { Box } from "@mui/material";
import AccountBadge from "../../components/AccountBadge/AccountBadge";
import LastTransactions from "../../components/LastTransactions/LastTransactions";
import DebitChart from "../../components/DebitChart/DebitChart";
import InvoicesInfo from "../../components/InvoicesInfo/InvoicesInfo";

function Accounts() {
  return (
    <Box component="div" sx={{ mr: 2 }}>
      <AccountBadge />
      <LastTransactions />
      <Box component="div" sx={{display: "flex", columnGap: 2}}>
        <DebitChart />
        <InvoicesInfo />
      </Box>
    </Box>
  );
}

export default Accounts;
