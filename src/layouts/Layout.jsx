import React from "react";
import Header from "./Haeder/Header";
import Sidebar from "./Sidebar/Sidebar";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Toaster } from "sonner";

function Layout({ children }) {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <Header />}
      {location.pathname !== "/login" && <Sidebar />}
      {location.pathname !== "/login" ? (
        <Box
          component="div"
          sx={{
            marginTop: 9,
            marginLeft: 26,
            backgroundColor: "#f6f6f6",
            pl: 3,
            py: 3,
          }}
        >
          {children}
        </Box>
      ) : (
        <Box component="div">{children}</Box>
      )}
      <Toaster />
    </>
  );
}

export default Layout;
