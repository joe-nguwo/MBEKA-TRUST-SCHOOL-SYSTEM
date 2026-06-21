import { useState } from "react";
import { type ThemeColurs } from "./context/settings.ts";
import { ColurContext } from "./context/settings.ts";
//import { auth } from "./context/auth.tsx";
import Routess from "./routes/routes.tsx";


function App() {
  const [value,setValue] = useState<ThemeColurs>("red")
  function  setTheme(){
    setValue((value)=> (value == "red"?"black":"red"))

  }
 
    return (
        <ColurContext.Provider value={{ theme: value, setTheme: () => {setTheme()} }}>
          <Routess></Routess>
     
    </ColurContext.Provider>

    )

}

export default App;
