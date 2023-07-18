// Create a new file named UserContext.js

import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user data, null if not logged in

  const login = (userData) => {
    // Your login logic here (e.g., API call to authenticate user)
    // Set the user data after successful login
    setUser(userData);
  };

  const logout = () => {
    // Your logout logic here
    // Clear the user data on logout
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
