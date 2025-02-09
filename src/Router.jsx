import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transactions from "./pages/Transactions/Transactions";
import Accounts from "./pages/Accounts/Accounts";
import Investments from "./pages/Investments/Investments";
import Cards from "./pages/Cards/Cards";
import Setting from "./pages/Setting/Setting";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/investments" element={<Investments />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
}

export default Router;
