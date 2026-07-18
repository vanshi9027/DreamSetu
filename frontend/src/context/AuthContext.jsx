import { createContext, useState, useEffect } from "react";
import { getCurrentUser } from "../services/authService";
export const AuthContext = createContext();


export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  // Auto Login After Refresh
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    const checkUser = async () => {
        try {
            const user = await getCurrentUser();
            setUser(user);
        } catch (error) {
            console.log(error);
        }
    };

    checkUser();
}, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}