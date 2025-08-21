import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import ManageLogin from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { RoutPaths } from "./config/const";

function App() {
     const navigate = useNavigate();
  return (
    <Routes>
      {/* <Route path={RoutPaths.Login} element={<ManageLogin />} /> */}
      <Route path={RoutPaths.Dashboard} element={<Dashboard />} />
      <Route path="*" element={<Navigate replace to={RoutPaths.Dashboard} />} />
    </Routes>
  );
}

export default App;
