import React, { useState } from "react";
import Layout from "../layout/Layout";
import {
  Plus,
  Edit,
  Trash2,
  Mail,
  Phone,
  X,
  Save,
  Shield,
  Check,
} from "lucide-react";

const Admins = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Department Admin",
    department: "",
    privileges: {
      users: false,
      departments: false,
      payroll: false,
      reports: false,
      settings: false,
    },
  });

  const [admins, setAdmins] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+1 (555) 123-4567",
      role: "Super Admin",
      department: "Executive",
      lastActive: "2023-06-20T14:30:00",
      privileges: {
        users: true,
        departments: true,
        payroll: true,
        reports: true,
        settings: true,
      },
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      phone: "+1 (555) 234-5678",
      role: "HR Admin",
      department: "Human Resources",
      lastActive: "2023-06-20T13:15:00",
      privileges: {
        users: true,
        departments: true,
        payroll: false,
        reports: true,
        settings: false,
      },
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      phone: "+1 (555) 345-6789",
      role: "IT Admin",
      department: "Information Technology",
      lastActive: "2023-06-19T16:45:00",
      privileges: {
        users: true,
        departments: false,
        payroll: false,
        reports: true,
        settings: true,
      },
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "+1 (555) 456-7890",
      role: "Finance Admin",
      department: "Finance",
      lastActive: "2023-06-20T10:30:00",
      privileges: {
        users: false,
        departments: false,
        payroll: true,
        reports: true,
        settings: false,
      },
    },
    {
      id: 5,
      name: "Robert Wilson",
      email: "robert.wilson@example.com",
      phone: "+1 (555) 567-8901",
      role: "Department Admin",
      department: "Operations",
      lastActive: "2023-06-18T09:15:00",
      privileges: {
        users: false,
        departments: true,
        payroll: false,
        reports: true,
        settings: false,
      },
    },
  ]);

  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

    if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">System Administrators</h1>
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors"
          >
            <Plus size={16} />
            <span>Add Admin</span>
          </button>
        </div>

        {showAddForm && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add New Administrator</h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={newAdmin.name}
                  onChange={(e) =>
                    setNewAdmin({ ...newAdmin, name: e.target.value })
                  }
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={newAdmin.email}
                  onChange={(e) =>
                    setNewAdmin({ ...newAdmin, email: e.target.value })
                  }
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={newAdmin.phone}
                  onChange={(e) =>
                    setNewAdmin({ ...newAdmin, phone: e.target.value })
                  }
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={newAdmin.department}
                  onChange={(e) =>
                    setNewAdmin({ ...newAdmin, department: e.target.value })
                  }
                  placeholder="Department Name"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={newAdmin.role}
                onChange={(e) =>
                  setNewAdmin({ ...newAdmin, role: e.target.value })
                }
              >
                <option value="Department Admin">Department Admin</option>
                <option value="HR Admin">HR Admin</option>
                <option value="IT Admin">IT Admin</option>
                <option value="Finance Admin">Finance Admin</option>
                <option value="Super Admin">Super Admin</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Access Privileges
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="users"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={newAdmin.privileges.users}
                    onChange={(e) =>
                      setNewAdmin({
                        ...newAdmin,
                        privileges: {
                          ...newAdmin.privileges,
                          users: e.target.checked,
                        },
                      })
                    }
                  />
                  <label htmlFor="users" className="text-sm text-gray-700">
                    Users
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="departments"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={newAdmin.privileges.departments}
                    onChange={(e) =>
                      setNewAdmin({
                        ...newAdmin,
                        privileges: {
                          ...newAdmin.privileges,
                          departments: e.target.checked,
                        },
                      })
                    }
                  />
                  <label
                    htmlFor="departments"
                    className="text-sm text-gray-700"
                  >
                    Departments
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="payroll"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={newAdmin.privileges.payroll}
                    onChange={(e) =>
                      setNewAdmin({
                        ...newAdmin,
                        privileges: {
                          ...newAdmin.privileges,
                          payroll: e.target.checked,
                        },
                      })
                    }
                  />
                  <label htmlFor="payroll" className="text-sm text-gray-700">
                    Payroll
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="reports"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={newAdmin.privileges.reports}
                    onChange={(e) =>
                      setNewAdmin({
                        ...newAdmin,
                        privileges: {
                          ...newAdmin.privileges,
                          reports: e.target.checked,
                        },
                      })
                    }
                  />
                  <label htmlFor="reports" className="text-sm text-gray-700">
                    Reports
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="settings"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={newAdmin.privileges.settings}
                    onChange={(e) =>
                      setNewAdmin({
                        ...newAdmin,
                        privileges: {
                          ...newAdmin.privileges,
                          settings: e.target.checked,
                        },
                      })
                    }
                  />
                  <label htmlFor="settings" className="text-sm text-gray-700">
                    Settings
                  </label>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => {
                  const newId =
                    Math.max(...admins.map((admin) => admin.id)) + 1;
                  setAdmins([
                    ...admins,
                    {
                      ...newAdmin,
                      id: newId,
                      lastActive: new Date().toISOString(),
                    },
                  ]);
                  setShowAddForm(false);
                  setNewAdmin({
                    name: "",
                    email: "",
                    phone: "",
                    role: "Department Admin",
                    department: "",
                    privileges: {
                      users: false,
                      departments: false,
                      payroll: false,
                      reports: false,
                      settings: false,
                    },
                  });
                }}
                className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors"
              >
                <Save size={16} />
                <span>Save Admin</span>
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
              >
                <X size={16} />
                <span>Cancel</span>
              </button>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Privileges
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Active
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider sticky right-0 bg-gray-50">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {admins.map((admin) => (
                  <tr key={admin.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-[#1e2844] text-white flex items-center justify-center font-semibold">
                          {admin.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {admin.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 flex flex-col">
                        <div className="flex items-center">
                          <Mail size={14} className="mr-1" />
                          <span>{admin.email}</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <Phone size={14} className="mr-1" />
                          <span>{admin.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {admin.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {admin.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-1">
                        {admin.privileges.users && (
                          <span
                            className="px-2 py-1 inline-flex text-xs leading-4 font-medium rounded bg-gray-100 text-gray-800"
                            title="Users"
                          >
                            U
                          </span>
                        )}
                        {admin.privileges.departments && (
                          <span
                            className="px-2 py-1 inline-flex text-xs leading-4 font-medium rounded bg-gray-100 text-gray-800"
                            title="Departments"
                          >
                            D
                          </span>
                        )}
                        {admin.privileges.payroll && (
                          <span
                            className="px-2 py-1 inline-flex text-xs leading-4 font-medium rounded bg-gray-100 text-gray-800"
                            title="Payroll"
                          >
                            P
                          </span>
                        )}
                        {admin.privileges.reports && (
                          <span
                            className="px-2 py-1 inline-flex text-xs leading-4 font-medium rounded bg-gray-100 text-gray-800"
                            title="Reports"
                          >
                            R
                          </span>
                        )}
                        {admin.privileges.settings && (
                          <span
                            className="px-2 py-1 inline-flex text-xs leading-4 font-medium rounded bg-gray-100 text-gray-800"
                            title="Settings"
                          >
                            S
                          </span>
                        )}
                        {!admin.privileges.users &&
                          !admin.privileges.departments &&
                          !admin.privileges.payroll &&
                          !admin.privileges.reports &&
                          !admin.privileges.settings && (
                            <span className="px-2 py-1 inline-flex text-xs leading-4 font-medium rounded bg-red-100 text-red-800">
                              None
                            </span>
                          )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(admin.lastActive)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right sticky right-0 bg-white">
                      <div className="flex justify-end gap-2">
                        <button className="p-1 text-blue-600 hover:text-blue-800 transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="p-1 text-red-600 hover:text-red-800 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admins;
