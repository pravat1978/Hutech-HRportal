import React, { useState } from "react";
import Layout from "../layout/Layout";
import {
  Search,
  Filter,
  ChevronDown,
  Calendar,
  Clock,
  Check,
  X,
  Download,
  Printer,
} from "lucide-react";

interface AttendanceLog {
  id: string;
  employeeId: string;
  employeeName: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: "Present" | "Absent" | "Late" | "Half Day" | "On Leave";
  workHours: string;
  overtime?: string;
}

const AttendanceLogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0],
  );
  const [selectedMonth, setSelectedMonth] = useState<string>(
    new Date().toISOString().slice(0, 7),
  );
  const [viewMode, setViewMode] = useState<"daily" | "monthly">("daily");

  const [attendanceLogs, setAttendanceLogs] = useState<AttendanceLog[]>([
    {
      id: "1",
      employeeId: "HTS001",
      employeeName: "Nitya Sahu",
      date: "2023-06-20",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      status: "Present",
      workHours: "9h 0m",
    },
    {
      id: "2",
      employeeId: "HTS002",
      employeeName: "Bhabani Sahu",
      date: "2023-06-20",
      checkIn: "09:15 AM",
      checkOut: "06:30 PM",
      status: "Present",
      workHours: "9h 15m",
      overtime: "0h 30m",
    },
    {
      id: "3",
      employeeId: "HTS003",
      employeeName: "Sandeep Krishnan",
      date: "2023-06-20",
      checkIn: "10:00 AM",
      checkOut: "06:00 PM",
      status: "Late",
      workHours: "8h 0m",
    },
    {
      id: "4",
      employeeId: "HTS004",
      employeeName: "Gopal Rana",
      date: "2023-06-20",
      checkIn: "-",
      checkOut: "-",
      status: "Absent",
      workHours: "0h 0m",
    },
    {
      id: "5",
      employeeId: "HTS005",
      employeeName: "Samir Bitt",
      date: "2023-06-20",
      checkIn: "09:05 AM",
      checkOut: "01:30 PM",
      status: "Half Day",
      workHours: "4h 25m",
    },
    {
      id: "6",
      employeeId: "HTS006",
      employeeName: "Anisha Thomas",
      date: "2023-06-20",
      checkIn: "-",
      checkOut: "-",
      status: "On Leave",
      workHours: "0h 0m",
    },
    {
      id: "7",
      employeeId: "HTS007",
      employeeName: "Abhinandan Baloji",
      date: "2023-06-20",
      checkIn: "08:45 AM",
      checkOut: "06:15 PM",
      status: "Present",
      workHours: "9h 30m",
      overtime: "0h 30m",
    },
    {
      id: "8",
      employeeId: "HTS008",
      employeeName: "Priya Sharma",
      date: "2023-06-20",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      status: "Present",
      workHours: "9h 0m",
    },
    {
      id: "9",
      employeeId: "HTS009",
      employeeName: "Rahul Patel",
      date: "2023-06-20",
      checkIn: "09:30 AM",
      checkOut: "06:00 PM",
      status: "Late",
      workHours: "8h 30m",
    },
    {
      id: "10",
      employeeId: "HTS010",
      employeeName: "Meera Reddy",
      date: "2023-06-20",
      checkIn: "09:00 AM",
      checkOut: "06:30 PM",
      status: "Present",
      workHours: "9h 30m",
      overtime: "0h 30m",
    },
  ]);

  // Filter logs based on search term
  const filteredLogs = attendanceLogs.filter((log) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      log.employeeId.toLowerCase().includes(searchLower) ||
      log.employeeName.toLowerCase().includes(searchLower) ||
      log.status.toLowerCase().includes(searchLower)
    );
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Present":
        return "bg-green-100 text-green-800";
      case "Absent":
        return "bg-red-100 text-red-800";
      case "Late":
        return "bg-yellow-100 text-yellow-800";
      case "Half Day":
        return "bg-orange-100 text-orange-800";
      case "On Leave":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Attendance Logs</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search employee..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
            </div>
            <div className="flex space-x-2">
              <button
                className={`px-4 py-2 rounded-md ${viewMode === "daily" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"}`}
                onClick={() => setViewMode("daily")}
              >
                Daily
              </button>
              <button
                className={`px-4 py-2 rounded-md ${viewMode === "monthly" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"}`}
                onClick={() => setViewMode("monthly")}
              >
                Monthly
              </button>
            </div>
            {viewMode === "daily" ? (
              <div className="relative">
                <input
                  type="date"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
                <Calendar
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={18}
                />
              </div>
            ) : (
              <div className="relative">
                <input
                  type="month"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                />
                <Calendar
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={18}
                />
              </div>
            )}
            <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
              <Filter size={16} />
              <span>Filter</span>
              <ChevronDown size={16} />
            </button>
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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Present</p>
                <p className="text-2xl font-bold text-green-600">7</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Check size={20} />
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Absent</p>
                <p className="text-2xl font-bold text-red-600">1</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <X size={20} />
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Late</p>
                <p className="text-2xl font-bold text-yellow-600">2</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                <Clock size={20} />
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Half Day</p>
                <p className="text-2xl font-bold text-orange-600">1</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <div className="w-4 h-4 bg-orange-600 rounded-full overflow-hidden">
                  <div className="w-4 h-2 bg-orange-100"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">On Leave</p>
                <p className="text-2xl font-bold text-blue-600">1</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Calendar size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Summary Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6 p-4">
          <h2 className="text-lg font-semibold mb-4">Attendance Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-700">
                  Present Rate
                </h3>
                <span className="text-sm font-medium text-green-600">70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-700">Late Rate</h3>
                <span className="text-sm font-medium text-yellow-600">20%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-yellow-600 h-2.5 rounded-full"
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-700">
                  Absent Rate
                </h3>
                <span className="text-sm font-medium text-red-600">10%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-red-600 h-2.5 rounded-full"
                  style={{ width: "10%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-700">
                  Average Check-in Time
                </h3>
                <span className="text-sm font-medium text-blue-600">
                  09:10 AM
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-700">
                  Average Check-out Time
                </h3>
                <span className="text-sm font-medium text-blue-600">
                  06:15 PM
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-700">
                  Average Work Hours
                </h3>
                <span className="text-sm font-medium text-blue-600">
                  8h 45m
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-[120px] bg-gray-50 z-10">
                    Employee Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Check In
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Check Out
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Work Hours
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Overtime
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredLogs
                  .slice(
                    (currentPage - 1) * itemsPerPage,
                    currentPage * itemsPerPage,
                  )
                  .map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sticky left-0 bg-white z-10">
                        {log.employeeId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap sticky left-[120px] bg-white z-10">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full overflow-hidden bg-blue-500 text-white">
                            <div className="h-full w-full flex items-center justify-center font-semibold">
                              {log.employeeName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {log.employeeName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(log.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1 text-gray-400" />
                          <span>{log.checkIn}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1 text-gray-400" />
                          <span>{log.checkOut}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(log.status)}`}
                        >
                          {log.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {log.workHours}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {log.overtime || "-"}
                      </td>
                    </tr>
                  ))}
                {filteredLogs.length === 0 && (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No attendance logs found matching your search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 bg-white border-t border-gray-200 flex items-center justify-between">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={currentPage * itemsPerPage >= filteredLogs.length}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div className="flex items-center">
                <p className="text-sm text-gray-700 mr-4">
                  Showing{" "}
                  <span className="font-medium">
                    {Math.min(
                      1 + (currentPage - 1) * itemsPerPage,
                      filteredLogs.length,
                    )}
                  </span>{" "}
                  to{" "}
                  <span className="font-medium">
                    {Math.min(currentPage * itemsPerPage, filteredLogs.length)}
                  </span>{" "}
                  of <span className="font-medium">{filteredLogs.length}</span>{" "}
                  results
                </p>
                <div className="flex items-center">
                  <span className="text-sm text-gray-700 mr-2">View</span>
                  <select
                    className="border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1); // Reset to first page when changing items per page
                    }}
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
              <div>
                <nav
                  className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                  aria-label="Pagination"
                >
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronDown className="h-5 w-5 rotate-90" />
                  </button>

                  {/* Page numbers */}
                  {Array.from({
                    length: Math.ceil(filteredLogs.length / itemsPerPage),
                  }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`relative inline-flex items-center px-4 py-2 border ${currentPage === index + 1 ? "bg-blue-50 border-blue-500 text-blue-600" : "border-gray-300 bg-white text-gray-700"} text-sm font-medium hover:bg-gray-50`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    disabled={currentPage * itemsPerPage >= filteredLogs.length}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Next</span>
                    <ChevronDown className="h-5 w-5 -rotate-90" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AttendanceLogs;
