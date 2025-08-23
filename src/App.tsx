import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ManageLogin from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { RoutPaths } from "./config/const";
import {ProtectedRoutes, PublicRoutes} from "./routes";

function App() {
     
  return (
    <Routes>
      <Route path={RoutPaths.Login} element={<ManageLogin />} />  
       {/* <Route path={RoutPaths.Current} element={<PublicRoutes/>}>
                    <Route path={RoutPaths.Login} element={<ManageLogin/>}/>
                </Route> */}
         {/* <Route path={RoutPaths.Current} element={<ProtectedRoutes/>}> */}
             <Route path={RoutPaths.Dashboard} element={<Dashboard />} />
         {/* </Route> */}
        <Route path={RoutPaths.Notice} element={<Notice />} />
         <Route path="*" element={<Navigate replace to={RoutPaths.Login} />} />
    </Routes>
  );
}

export default App;

