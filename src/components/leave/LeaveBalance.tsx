import React, { useState } from "react";
import Layout from "../layout/Layout";
import {
  Calendar,
  ChevronDown,
  Download,
  Printer,
  Filter,
  PieChart,
  BarChart3,
  Plus,
  X,
  Save,
} from "lucide-react";

interface LeaveType {
  id: number;
  type: string;
  color: string;
  total: number;
  used: number;
  pending: number;
  remaining: number;
}

const LeaveBalance = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [showLeaveForm, setShowLeaveForm] = useState(false);
  const [newLeave, setNewLeave] = useState({
    type: "Casual Leave",
    startDate: new Date().toISOString().split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
    duration: "Full Day",
    reason: "",
    contactDetails: "",
    attachments: null,
    handoverTo: "",
  });
  const [leaveTypes, setLeaveTypes] = useState<LeaveType[]>([
    {
      id: 1,
      type: "Casual Leave",
      color: "bg-blue-500",
      total: 12,
      used: 5,
      pending: 2,
      remaining: 5,
    },
    {
      id: 2,
      type: "Sick Leave",
      color: "bg-red-500",
      total: 10,
      used: 3,
      pending: 0,
      remaining: 7,
    },
    {
      id: 3,
      type: "Earned Leave",
      color: "bg-green-500",
      total: 15,
      used: 8,
      pending: 1,
      remaining: 6,
    },
    {
      id: 4,
      type: "Maternity Leave",
      color: "bg-purple-500",
      total: 180,
      used: 0,
      pending: 0,
      remaining: 180,
    },
    {
      id: 5,
      type: "Paternity Leave",
      color: "bg-indigo-500",
      total: 15,
      used: 0,
      pending: 0,
      remaining: 15,
    },
    {
      id: 6,
      type: "Bereavement Leave",
      color: "bg-gray-500",
      total: 5,
      used: 0,
      pending: 0,
      remaining: 5,
    },
    {
      id: 7,
      type: "Unpaid Leave",
      color: "bg-yellow-500",
      total: 0,
      used: 2,
      pending: 1,
      remaining: 0,
    },
  ]);

  const [leaveHistory, setLeaveHistory] = useState([
    {
      id: 1,
      type: "Casual Leave",
      startDate: "2023-06-10",
      endDate: "2023-06-12",
      days: 3,
      reason: "Personal work",
      status: "Approved",
    },
    {
      id: 2,
      type: "Sick Leave",
      startDate: "2023-05-05",
      endDate: "2023-05-07",
      days: 3,
      reason: "Fever",
      status: "Approved",
    },
    {
      id: 3,
      type: "Casual Leave",
      startDate: "2023-07-20",
      endDate: "2023-07-21",
      days: 2,
      reason: "Family function",
      status: "Pending",
    },
    {
      id: 4,
      type: "Earned Leave",
      startDate: "2023-04-10",
      endDate: "2023-04-17",
      days: 8,
      reason: "Vacation",
      status: "Approved",
    },
    {
      id: 5,
      type: "Unpaid Leave",
      startDate: "2023-08-01",
      endDate: "2023-08-02",
      days: 2,
      reason: "Personal emergency",
      status: "Approved",
    },
    {
      id: 6,
      type: "Unpaid Leave",
      startDate: "2023-09-15",
      endDate: "2023-09-15",
      days: 1,
      reason: "Personal work",
      status: "Pending",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const totalEntitlement = leaveTypes
    .filter((type) =>
      ["Casual Leave", "Sick Leave", "Earned Leave"].includes(type.type),
    )
    .reduce((sum, type) => sum + type.total, 0);
  const usedLeaves = leaveTypes.reduce((sum, type) => sum + type.used, 0);
  const pendingLeaves = leaveTypes.reduce((sum, type) => sum + type.pending, 0);
  const remainingLeaves = totalEntitlement - usedLeaves;

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Leave Balance</h1>
            <button
              onClick={() => setShowLeaveForm(true)}
              className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors"
            >
              <Plus size={16} />
              <span>Apply Leave</span>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 appearance-none"
                value={year}
                onChange={(e) => setYear(parseInt(e.target.value))}
              >
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-2.5 text-gray-400"
                size={18}
              />
            </div>
            <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
              <Download size={16} />
              <span>Export</span>
            </button>
            <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
              <Printer size={16} />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Entitlement</p>
                <p className="text-2xl font-bold text-blue-600">
                  {totalEntitlement}
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Calendar size={20} />
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Used</p>
                <p className="text-2xl font-bold text-green-600">
                  {usedLeaves}
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <BarChart3 size={20} />
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {pendingLeaves}
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                <Calendar size={20} />
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Remaining</p>
                <p className="text-2xl font-bold text-purple-600">
                  {remainingLeaves}
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                <PieChart size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Leave Entitlements */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-semibold">Leave Entitlements</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Leave Type
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Used
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pending
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Remaining
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Usage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {leaveTypes.map((leaveType) => (
                  <tr key={leaveType.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div
                          className={`w-3 h-3 rounded-full ${leaveType.color} mr-3`}
                        ></div>
                        <span className="text-sm font-medium text-gray-900">
                          {leaveType.type}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium">
                      {leaveType.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      {leaveType.used}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      {leaveType.pending}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium">
                      {leaveType.total - leaveType.used}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className={`${leaveType.color} h-2.5 rounded-full`}
                          style={{
                            width: `${(leaveType.used / (leaveType.total || 1)) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Leave History */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Leave History</h2>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
              <Filter size={16} />
              <span>Filter</span>
              <ChevronDown size={16} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Leave Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    From
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    To
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Days
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reason
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {leaveHistory.map((leave) => (
                  <tr key={leave.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {leave.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(leave.startDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(leave.endDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      {leave.days}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {leave.reason}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(leave.status)}`}
                      >
                        {leave.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Leave Application Overlay */}
      {showLeaveForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-lg">
              <h3 className="text-lg font-semibold">Apply for Leave</h3>
              <button
                onClick={() => setShowLeaveForm(false)}
                className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Leave Type
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={newLeave.type}
                    onChange={(e) =>
                      setNewLeave({ ...newLeave, type: e.target.value })
                    }
                  >
                    <option value="Casual Leave">Casual Leave</option>
                    <option value="Sick Leave">Sick Leave</option>
                    <option value="Earned Leave">Earned Leave</option>
                    <option value="Unpaid Leave">Unpaid Leave</option>
                    <option value="Maternity Leave">Maternity Leave</option>
                    <option value="Paternity Leave">Paternity Leave</option>
                    <option value="Bereavement Leave">Bereavement Leave</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      From Date
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={newLeave.startDate}
                      onChange={(e) =>
                        setNewLeave({ ...newLeave, startDate: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      To Date
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={newLeave.endDate}
                      onChange={(e) =>
                        setNewLeave({ ...newLeave, endDate: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Duration
                    </label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={newLeave.duration}
                      onChange={(e) =>
                        setNewLeave({ ...newLeave, duration: e.target.value })
                      }
                    >
                      <option value="Full Day">Full Day</option>
                      <option value="First Half">First Half</option>
                      <option value="Second Half">Second Half</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reason for Leave
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                    value={newLeave.reason}
                    onChange={(e) =>
                      setNewLeave({ ...newLeave, reason: e.target.value })
                    }
                    placeholder="Please provide a reason for your leave request"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Details During Leave
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={newLeave.contactDetails}
                      onChange={(e) =>
                        setNewLeave({
                          ...newLeave,
                          contactDetails: e.target.value,
                        })
                      }
                      placeholder="Phone number or email where you can be reached if needed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Handover To
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={newLeave.handoverTo}
                      onChange={(e) =>
                        setNewLeave({ ...newLeave, handoverTo: e.target.value })
                      }
                      placeholder="Colleague who will handle your responsibilities"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Attachments (if any)
                  </label>
                  <input
                    type="file"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) =>
                      setNewLeave({
                        ...newLeave,
                        attachments: e.target.files ? e.target.files[0] : null,
                      })
                    }
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Upload medical certificate or other supporting documents
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => {
                  // Here you would typically submit the leave request to your backend
                  alert("Leave application submitted successfully!");
                  setShowLeaveForm(false);
                  setNewLeave({
                    type: "Casual Leave",
                    startDate: new Date().toISOString().split("T")[0],
                    endDate: new Date().toISOString().split("T")[0],
                    duration: "Full Day",
                    reason: "",
                    contactDetails: "",
                    attachments: null,
                    handoverTo: "",
                  });
                }}
                className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors"
              >
                <Save size={16} />
                <span>Submit Request</span>
              </button>
              <button
                onClick={() => setShowLeaveForm(false)}
                className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
              >
                <X size={16} />
                <span>Cancel</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default LeaveBalance;
