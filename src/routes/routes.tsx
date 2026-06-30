import { Routes, Route } from "react-router-dom";

import Loginpage from "@/pages/login/login";
import Registerpage from "@/pages/login/register";
import Dashboard from "@/pages/dashboard";
import Students from "@/pages/students";

import SidebarLayout from "@/layout/sidebar";

function Routess() {
  return (
    <Routes>
     
      <Route path="/" element={<Loginpage />} />
      <Route path="/register" element={<Registerpage />} />

      <Route path="/auth" element={<SidebarLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="students" element={<Students />} />
      </Route>
    </Routes>
  );
}

export default Routess;