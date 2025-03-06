import React from "react";
import Layout from "../layout/Layout";
import { Plus, Edit, Trash2, Mail, Phone } from "lucide-react";

const Admins = () => {
  const admins = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+1 (555) 123-4567",
      role: "Super Admin",
      department: "Executive",
      lastActive: "2023-06-20T14:30:00",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      phone: "+1 (555) 234-5678",
      role: "HR Admin",
      department: "Human Resources",
      lastActive: "2023-06-20T13:15:00",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      phone: "+1 (555) 345-6789",
      role: "IT Admin",
      department: "Information Technology",
      lastActive: "2023-06-19T16:45:00",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "+1 (555) 456-7890",
      role: "Finance Admin",
      department: "Finance",
      lastActive: "2023-06-20T10:30:00",
    },
    {
      id: 5,
      name: "Robert Wilson",
      email: "robert.wilson@example.com",
      phone: "+1 (555) 567-8901",
      role: "Department Admin",
      department: "Operations",
      lastActive: "2023-06-18T09:15:00",
    },
  ];

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
          <button className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors">
            <Plus size={16} />
            <span>Add Admin</span>
          </button>
        </div>

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
                    Last Active
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                      {formatDate(admin.lastActive)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
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
