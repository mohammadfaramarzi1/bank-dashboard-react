import React from "react";
import Header from "./Haeder/Header";
import Sidebar from "./Sidebar/Sidebar";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
    </>
  );
}

export default Layout;
