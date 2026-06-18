import { useState } from "react";
import { type ThemeColurs } from "./context/settings.ts";
import { Routes, Route } from "react-router-dom";
import Loginpage from "@/pages/login/login.tsx";
import Registerpage from "@/pages/login/register.tsx";
import Index from "./pages/dashboard/index.tsx";
import { ColurContext } from "./context/settings.ts";
import { auth } from "./context/auth.tsx";

function App() {
  const [value,setValue] = useState<ThemeColurs>("red")
  function  setTheme(){
    setValue((value)=> (value == "red"?"black":"red"))

  }
  if (auth.getBool === false){
    return (
        <ColurContext.Provider value={{ theme: value, setTheme: () => {setTheme()} }}>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
      </Routes>
    </ColurContext.Provider>

    )
  }
  else if(auth.getBool === true){ 
  return (
    <ColurContext.Provider value={{ theme: value, setTheme: () => {setTheme()} }}>
      <Routes>
        <Route path="/auth/dashboard" element={<Index />} />
      </Routes>
    </ColurContext.Provider>
  ); 
}
}

export default App;
