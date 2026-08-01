import { type ReactNode } from "react";
import { createContext, useState } from "react";



interface AuthContextType {
  authState: boolean,
  setAuthState(): void

}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [authState, setValue] = useState<boolean>(false)

  function setAuthState() {
  setValue(prev => prev ? false : true);

  }

  return <>
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>

  </>


}


export default AuthContextProvider;
