import React from "react";
import { Box, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PaymentsIcon from "@mui/icons-material/Payments";
import SettingsIcon from "@mui/icons-material/Settings";

import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <Box
      component="div"
      sx={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        width: 210,
        borderRight: 1,
        borderColor: "#343C6A",
        px: 2,
        backgroundColor: "#fff"
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        color="#343C6A"
        py="20px"
        sx={{ display: "flex", alignItems: "center", columnGap: 1 }}
      >
        <img src="/iconfinder_vector_65_09_473792 1.png" alt="" />
        BankDash.
      </Typography>
      <Box component="ul" marginTop={5}>
        <li>
          <NavLink to="/" className={styles.link}>
            <HomeIcon />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/transactions" className={styles.link}>
            <ReceiptLongIcon />
            Transactions
          </NavLink>
        </li>
        <li>
          <NavLink to="/accounts" className={styles.link}>
            <SupervisorAccountIcon />
            Accounts
          </NavLink>
        </li>
        <li>
          <NavLink to="/investments" className={styles.link}>
            <AccountBalanceWalletIcon />
            Investments
          </NavLink>
        </li>
        <li>
          <NavLink to="/cards" className={styles.link}>
            <PaymentsIcon />
            Credit Cards
          </NavLink>
        </li>
        <li>
          <NavLink to="/setting" className={styles.link}>
            <SettingsIcon />
            Setting
          </NavLink>
        </li>
      </Box>
    </Box>
  );
}

export default Sidebar;
