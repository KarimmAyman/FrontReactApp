import { useEffect, useState } from "react";
import "./Dashboard.css";

const API_BASE = "https://studentpathapitest.runasp.net/api/User";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [selectedUser, setSelectedUser] = useState(null);

  // Get token from localStorage
  const getAuthHeaders = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const token = storedUser?.token;
    return token
      ? {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      : {
          "Content-Type": "application/json",
        };
  };

  useEffect(() => {
    fetchUsers();
  });

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${API_BASE}/GetAllUsers`, {
        headers: getAuthHeaders(),
      });
      const data = await res.json();
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        console.warn("Unexpected users data format:", data);
      }
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const handleAddUser = async () => {
    try {
      await fetch(`${API_BASE}/AddUser`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(form),
      });
      fetchUsers();
      setForm({ name: "", email: "" });
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  const handleEditUser = async (id) => {
    try {
      await fetch(`${API_BASE}/EditUser/${id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(form),
      });
      fetchUsers();
      setSelectedUser(null);
    } catch (err) {
      console.error("Error editing user:", err);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await fetch(`${API_BASE}/DeleteUser/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      fetchUsers();
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">User Dashboard</h1>

      <div className="form-container">
        <input
          type="text"
          placeholder="Name"
          className="input-field"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button onClick={handleAddUser} className="add-button">
          Add User
        </button>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => {
                    setSelectedUser(user);
                    setForm({ name: user.name, email: user.email });
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <div className="edit-container">
          <h2>Edit User</h2>
          <input
            type="text"
            className="input-field"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            className="input-field"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <button
            onClick={() => handleEditUser(selectedUser.id)}
            className="save-button"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
