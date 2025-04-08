import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthContextValue";
import { jwtDecode } from "jwt-decode";

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // دالة لفك التوكن
  const decodedToken = (token) => {
    try {
      return jwtDecode(token);
    } catch (e) {
      console.error("Invalid token:", e);
      return null;
    }
  };

  // دالة لجلب بيانات المستخدم من الـ API
  const fetchUserById = async (userID) => {
    if (!userID) return;
    try {
      const res = await fetch(`api/User/ById/${userID}`);
      const data = await res.json();
      if (data?.data) {
        setUser(data.data);
      } else {
        console.warn("User not found or invalid data format:", data);
      }
    } catch (e) {
      console.error("Error fetching user:", e);
    }
  };

  // عند تحميل التطبيق
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedAuth = localStorage.getItem("isAuthenticated");
    const storedUserID = JSON.parse(localStorage.getItem("userid"));

    if (storedUser && storedAuth === "true") {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }

    if (storedUserID) {
      fetchUserById(storedUserID);
    }
  }, []);

  // تسجيل الدخول
  const login = (userData) => {
    console.log("Logging in user:", userData);

    const decoded = decodedToken(userData.token);
    if (!decoded?.sub) {
      console.error("Invalid token payload");
      return;
    }

    const userId = decoded.sub;

    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("userid", JSON.stringify(userId));

    fetchUserById(userId);
  };

  // تسجيل الخروج
  const logout = () => {
    console.log("Logging out user");
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("userid");
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
