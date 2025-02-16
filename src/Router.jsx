import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transactions from "./pages/Transactions/Transactions";
import Accounts from "./pages/Accounts/Accounts";
import Investments from "./pages/Investments/Investments";
import Cards from "./pages/Cards/Cards";
import Setting from "./pages/Setting/Setting";
import Login from "./pages/Login/Login";

import { getUser } from "./utils/user";

function Router() {
  const [user, setUser] = useState();
  const location = useLocation()
  useEffect(() => {
    setUser(getUser);
  }, [location.pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/investments" element={<Investments />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
}

export default Router;
