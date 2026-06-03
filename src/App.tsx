import { Routes, Route } from "react-router-dom";
import Loginpage from '@/pages/login/login.tsx';
import Registerpage from '@/pages/login/register.tsx';
import Index from "./pages/dashboard/index.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/register" element={<Registerpage />} />
      <Route path="/auth/dashboard" element={<Index  />} />
    </Routes>
  );
}

export default App;