import { createContext } from "react";


export  type ThemeColurs  = "red" | "black"

export interface ThemeInterface {
    theme: ThemeColurs;
    setTheme: ( )=> void
}

export const context = createContext<undefined | ThemeInterface>




