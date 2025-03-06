import React from "react";
import Layout from "../layout/Layout";
import { Plus, Edit, Trash2, FileText, Download } from "lucide-react";

const Policies = () => {
  const policies = [
    {
      id: 1,
      title: "Employee Handbook",
      category: "General",
      lastUpdated: "2023-05-15",
      fileSize: "2.4 MB",
    },
    {
      id: 2,
      title: "Code of Conduct",
      category: "Ethics",
      lastUpdated: "2023-04-10",
      fileSize: "1.2 MB",
    },
    {
      id: 3,
      title: "Remote Work Policy",
      category: "Work Arrangements",
      lastUpdated: "2023-03-22",
      fileSize: "0.8 MB",
    },
    {
      id: 4,
      title: "IT Security Guidelines",
      category: "Security",
      lastUpdated: "2023-02-18",
      fileSize: "1.5 MB",
    },
    {
      id: 5,
      title: "Travel & Expense Policy",
      category: "Finance",
      lastUpdated: "2023-01-30",
      fileSize: "1.1 MB",
    },
    {
      id: 6,
      title: "Anti-Harassment Policy",
      category: "Workplace Conduct",
      lastUpdated: "2022-12-15",
      fileSize: "0.9 MB",
    },
  ];

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Company Policies</h1>
          <button className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors">
            <Plus size={16} />
            <span>Upload Policy</span>
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Policy Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Updated
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    File Size
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {policies.map((policy) => (
                  <tr key={policy.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                      <FileText size={16} className="mr-2 text-gray-500" />
                      {policy.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {policy.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(policy.lastUpdated).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {policy.fileSize}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-1 text-gray-600 hover:text-gray-800 transition-colors">
                          <Download size={16} />
                        </button>
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

export default Policies;
