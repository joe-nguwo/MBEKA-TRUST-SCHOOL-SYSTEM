import { Routes, Route } from "react-router-dom";
import Loginpage from "@/pages/login/login.tsx";
import Registerpage from "@/pages/login/register.tsx";
import Index from "@/pages/dashboard/index.tsx";
import Sidebar from "@/layout/sidebar.tsx";

function Routess(){

    return(
         <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/auth/dashboard" element={<Sidebar>
          <Index></Index>
        </Sidebar>}
        />
      
      </Routes>
    )
}

export default Routess