import { useState } from "react";
import { type ThemeColurs } from "./context/settings.ts";
import { Routes, Route } from "react-router-dom";
import Loginpage from "@/pages/login/login.tsx";
import Registerpage from "@/pages/login/register.tsx";
import Index from "./pages/dashboard/index.tsx";
import { ColurContext } from "./context/settings.ts";

function App() {
  const [value,setValue] = useState<ThemeColurs>("red")
  function  setTheme(){
    setValue((value)=> (value == "red"?"black":"red"))

  }
  return (
    <ColurContext.Provider value={{ theme: value, setTheme: () => {setTheme()} }}>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/auth/dashboard" element={<Index />} />
      </Routes>
    </ColurContext.Provider>
  );
}

export default App;
