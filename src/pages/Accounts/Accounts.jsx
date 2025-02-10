import React from "react";
import { Box } from "@mui/material";
import AccountBadge from "../../components/AccountBadge/AccountBadge";
import LastTransactions from "../../components/LastTransactions/LastTransactions";

function Accounts() {
  return (
    <Box component="div" sx={{ mr: 2 }}>
      <AccountBadge />
      <LastTransactions />
    </Box>
  );
}

export default Accounts;
