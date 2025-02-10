import React from "react";
import Header from "./Haeder/Header";
import Sidebar from "./Sidebar/Sidebar";
import { Box } from "@mui/material";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <Box component="div" sx={{ marginTop: 9, marginLeft: 26, backgroundColor: "#f6f6f6", pl: 3, pt: 3 }}>
        {children}
      </Box>
    </>
  );
}

export default Layout;
