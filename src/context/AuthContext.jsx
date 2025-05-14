import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthContextValue";
import { jwtDecode } from "jwt-decode"; // Fixed typo in jwtDecode import

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [storedUserId, setStoredUserId] = useState(null);

  // Token decoding function
  const decodedToken = (token) => {
    try {
      return jwtDecode(token);
    } catch (e) {
      console.error("Invalid token:", e);
      return null;
    }
  };

  // Fetch user data from API
  const fetchUserById = async (userID, token) => {
    if (!userID || !token) return;

    try {
      const res = await fetch(
        `https://studentpathapitest.runasp.net/api/User/ById/${userID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      console.log("Fetched user response:", data);

      if (data?.data) {
        setUser(data.data);
      } else {
        console.warn("User not found or invalid data format:", data);
      }
    } catch (e) {
      console.error("Error fetching user:", e);
    }
  };

  // On app load
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const storedUser = localStorage.getItem("user");
        const storedAuth = localStorage.getItem("isAuthenticated");
        const storedUserID = localStorage.getItem("userid");

        // Safely parse storedUserID
        let userId = null;
        if (storedUserID) {
          try {
            userId = JSON.parse(storedUserID);
          } catch (e) {
            console.error("Error parsing userid:", e);
            localStorage.removeItem("userid");
          }
        }

        setStoredUserId(userId);

        if (storedUser && storedAuth === "true") {
          try {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setIsAuthenticated(true);

            if (userId && parsedUser.token) {
              fetchUserById(userId, parsedUser.token);
            }
          } catch (e) {
            console.error("Error parsing user data:", e);
            localStorage.removeItem("user");
          }
        }
      } catch (e) {
        console.error("Auth initialization error:", e);
      }
    };

    initializeAuth();
  }, []);

  // Login function
  const login = (userData) => {
    console.log("Logging in user:", userData);

    try {
      const decoded = decodedToken(userData.token);
      if (!decoded?.sub) {
        console.error("Invalid token payload");
        return;
      }

      const userId = decoded.sub;

      setIsAuthenticated(true);
      setStoredUserId(userId);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("userid", JSON.stringify(userId));

      fetchUserById(userId, userData.token);
    } catch (e) {
      console.error("Login error:", e);
    }
  };

  // Logout function
  const logout = () => {
    console.log("Logging out user");
    setIsAuthenticated(false);
    setUser(null);
    setStoredUserId(null);
    localStorage.removeItem("user");
    localStorage.removeItem("userid");
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, storedUserId }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
