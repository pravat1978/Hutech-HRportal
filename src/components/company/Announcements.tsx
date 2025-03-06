import React from "react";
import Layout from "../layout/Layout";
import { Plus, Edit, Trash2, Eye } from "lucide-react";

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: "Company Picnic",
      content:
        "Annual company picnic will be held on July 15th at Central Park.",
      date: "2023-06-20",
      author: "HR Department",
      status: "Active",
    },
    {
      id: 2,
      title: "New Health Insurance Policy",
      content:
        "We are updating our health insurance policy effective August 1st.",
      date: "2023-06-15",
      author: "Benefits Team",
      status: "Active",
    },
    {
      id: 3,
      title: "Office Renovation",
      content:
        "The 3rd floor will be under renovation from July 5th to July 20th.",
      date: "2023-06-10",
      author: "Facilities Management",
      status: "Active",
    },
    {
      id: 4,
      title: "Quarterly All-Hands Meeting",
      content:
        "Please join us for the Q2 all-hands meeting on June 30th at 2 PM.",
      date: "2023-06-05",
      author: "Executive Team",
      status: "Active",
    },
    {
      id: 5,
      title: "Holiday Schedule",
      content:
        "Please note the upcoming holiday schedule for Independence Day.",
      date: "2023-06-01",
      author: "HR Department",
      status: "Archived",
    },
  ];

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Announcements</h1>
          <button className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors">
            <Plus size={16} />
            <span>New Announcement</span>
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
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {announcements.map((announcement) => (
                  <tr key={announcement.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {announcement.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(announcement.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {announcement.author}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${announcement.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                      >
                        {announcement.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-1 text-gray-600 hover:text-gray-800 transition-colors">
                          <Eye size={16} />
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

export default Announcements;
