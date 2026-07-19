import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/Auth/RegisterPage";
import LoginPage from "../pages/Auth/LoginPage";
import Dashboard from "../pages/Dashboard/Dashboard";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
         <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;