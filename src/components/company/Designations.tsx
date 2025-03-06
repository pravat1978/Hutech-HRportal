import React from "react";
import Layout from "../layout/Layout";
import { Plus, Edit, Trash2 } from "lucide-react";

const Designations = () => {
  const designations = [
    {
      id: 1,
      title: "Chief Executive Officer",
      department: "Executive",
      level: "C-Suite",
    },
    {
      id: 2,
      title: "Chief Technology Officer",
      department: "Executive",
      level: "C-Suite",
    },
    {
      id: 3,
      title: "Senior Software Engineer",
      department: "Engineering",
      level: "Senior",
    },
    {
      id: 4,
      title: "Software Engineer",
      department: "Engineering",
      level: "Mid-level",
    },
    {
      id: 5,
      title: "Junior Software Engineer",
      department: "Engineering",
      level: "Entry-level",
    },
    {
      id: 6,
      title: "HR Manager",
      department: "Human Resources",
      level: "Manager",
    },
    {
      id: 7,
      title: "Marketing Specialist",
      department: "Marketing",
      level: "Mid-level",
    },
    {
      id: 8,
      title: "Financial Analyst",
      department: "Finance",
      level: "Mid-level",
    },
  ];

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Designations</h1>
          <button className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors">
            <Plus size={16} />
            <span>Add Designation</span>
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Level
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {designations.map((designation) => (
                  <tr key={designation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {designation.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {designation.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {designation.level}
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

export default Designations;
