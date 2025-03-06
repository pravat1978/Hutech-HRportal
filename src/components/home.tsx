import React from "react";
import Layout from "./layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Summary Cards */}
          <div className="bg-[#1e2844] text-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold">1,234</p>
            <p className="text-sm text-white/70 mt-2">+12% from last month</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Revenue
            </h3>
            <p className="text-3xl font-bold text-gray-900">$34,567</p>
            <p className="text-sm text-gray-500 mt-2">+5% from last month</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Active Projects
            </h3>
            <p className="text-3xl font-bold text-gray-900">27</p>
            <p className="text-sm text-gray-500 mt-2">3 completed this week</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      user: "John Doe",
                      action: "Created new project",
                      date: "2 hours ago",
                      status: "Completed",
                    },
                    {
                      user: "Jane Smith",
                      action: "Updated user profile",
                      date: "5 hours ago",
                      status: "Pending",
                    },
                    {
                      user: "Robert Johnson",
                      action: "Submitted report",
                      date: "1 day ago",
                      status: "Completed",
                    },
                    {
                      user: "Emily Davis",
                      action: "Added new team member",
                      date: "2 days ago",
                      status: "Completed",
                    },
                  ].map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.user}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.action}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Create Project",
                description: "Start a new project with templates",
              },
              {
                title: "Add User",
                description: "Invite team members to collaborate",
              },
              {
                title: "Generate Report",
                description: "Create analytics reports",
              },
              {
                title: "View Settings",
                description: "Manage your account settings",
              },
            ].map((action, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
              >
                <h3 className="font-medium text-gray-900">{action.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {action.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
