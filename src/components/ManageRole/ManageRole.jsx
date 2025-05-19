import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AuthContext from "../../providers/AuthContext";

const ManageRole = () => {
  const [users, setUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState("all");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/users`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleRoleChange = (id, newRole) => {
    axios
      .patch(`${import.meta.env.VITE_API_URL}/users/${id}/role`, {
        role: newRole,
      })
      .then((res) => {
        if (res.data.success) {
          setUsers(
            users.map((user) =>
              user._id === id ? { ...user, role: newRole } : user
            )
          );
          toast.success("User role updated successfully");
        } else {
          toast.error("Failed to update role");
        }
      })
      .catch(() => toast.error("Error updating role"));
  };

  const filteredUsers =
    selectedRole === "all"
      ? users
      : users.filter((user) => user.role === selectedRole);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Manage User Roles
      </h2>

      {/* Role Filter */}
      <div className="flex justify-end mb-4">
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All Roles</option>
          <option value="admin">Admins Only</option>
          <option value="user">Users Only</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Image</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Role</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredUsers.map((u) => {
              const isCurrentUser = u.email === user?.email;
              return (
                <tr key={u._id} className="hover:bg-gray-50 transition-all">
                  <td className="px-6 py-4">
                    <img
                      src={u.image}
                      alt={u.name}
                      className="w-10 h-10 rounded-full ring-2 ring-gray-300"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">{u.name}</td>
                  <td className="px-6 py-4 text-gray-600">{u.email}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3 relative group">
                      <span
                        className={`inline-block text-sm font-semibold px-4 py-1 rounded-full 
                          ${
                            u.role === "admin"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                          }`}
                      >
                        {u.role.charAt(0).toUpperCase() + u.role.slice(1)}
                      </span>

                      <div className="relative">
                        <select
                          value={u.role}
                          onChange={(e) =>
                            handleRoleChange(u._id, e.target.value)
                          }
                          disabled={isCurrentUser}
                          className={`border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500
                            ${
                              isCurrentUser
                                ? "bg-gray-100 cursor-not-allowed text-gray-500"
                                : ""
                            }`}
                        >
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                        </select>

                        {/* Tooltip shown only when current user */}
                        {isCurrentUser && (
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap">
                            You cannot change your own role
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageRole;
