import { useEffect, useState } from "react";
import "./Dashboard.css";

const API_BASE = "/api/User";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(`${API_BASE}/GetAllUsers`);
    const data = await res.json();
    setUsers(data);
  };

  const handleAddUser = async () => {
    await fetch(`${API_BASE}/AddUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    fetchUsers();
    setForm({ name: "", email: "" });
  };

  const handleEditUser = async (id) => {
    await fetch(`${API_BASE}/EditUser/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    fetchUsers();
  };

  const handleDeleteUser = async (id) => {
    await fetch(`${API_BASE}/DeleteUser/${id}`, { method: "DELETE" });
    fetchUsers();
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
        <button onClick={handleAddUser} className="add-button">Add User</button>
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
                  onClick={() => setSelectedUser(user)}
                >Edit</button>
                <button 
                  className="delete-button"
                  onClick={() => handleDeleteUser(user.id)}
                >Delete</button>
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
            defaultValue={selectedUser.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} 
          />
          <input 
            type="email" 
            className="input-field" 
            defaultValue={selectedUser.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} 
          />
          <button onClick={() => handleEditUser(selectedUser.id)} className="save-button">Save</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
