import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";

import styles from "./Header.module.css";

function Header() {
  const location = useLocation();

  return (
    <Box
      component="header"
      sx={{
        py: "10px",
        px: "20px",
        position: "fixed",
        left: 210,
        right: 0,
        top: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: 1,
        borderColor: "#343C6A",
        backgroundColor: "#fff",
        zIndex: 10
      }}
    >
      <Typography
        variant="h5"
        component="h3"
        fontFamily="Roboto SemiBold"
        fontSize="25px"
      >
        {location.pathname === "/"
          ? "DASHBOARD"
          : location.pathname.split("/")[1].toUpperCase()}
      </Typography>
      <Box component="div" sx={{ display: "flex", columnGap: 3 }}>
        <Link to="/setting" className={styles.setting}>
          <SettingsIcon sx={{ fill: "#7b7b7b" }} />
        </Link>
        <Avatar
          alt="User"
          src="/users/Mask Group-min.png"
          sx={{ width: 50, height: 50 }}
        />
      </Box>
    </Box>
  );
}

export default Header;
