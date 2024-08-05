import { createContext, useState } from "react";

export const LoggedInUserContext = createContext();

export function LoggedInUserProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <LoggedInUserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </LoggedInUserContext.Provider>
  );
}