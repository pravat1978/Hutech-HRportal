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
  Edit,
  Save,
  Plus,
  FileText,
  Building,
  Briefcase,
} from "lucide-react";

interface TimesheetEntry {
  id: string;
  employeeId: string;
  employeeName: string;
  date: string;
  project: string;
  client: string;
  task: string;
  checkIn: string;
  checkOut: string;
  hoursLogged: number;
  status: "Pending" | "Approved" | "Rejected";
  comments?: string;
}

const AttendanceTimesheet = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0],
  );
  const [selectedWeek, setSelectedWeek] = useState<string>(
    new Date().toISOString().slice(0, 10),
  );
  const [viewMode, setViewMode] = useState<"daily" | "weekly">("weekly");
  const [selectedEmployee, setSelectedEmployee] = useState<string>("");
  const [showAddEntry, setShowAddEntry] = useState(false);
  const [newEntry, setNewEntry] = useState<Partial<TimesheetEntry>>({
    project: "",
    client: "",
    task: "",
    date: new Date().toISOString().split("T")[0],
    checkIn: "",
    checkOut: "",
    hoursLogged: 0,
    comments: "",
  });

  const [timesheetEntries, setTimesheetEntries] = useState<TimesheetEntry[]>([
    {
      id: "1",
      employeeId: "HTS001",
      employeeName: "Nitya Sahu",
      date: "2023-06-20",
      project: "HR Portal Development",
      client: "Humantech Solutions",
      task: "Frontend Development",
      checkIn: "09:00",
      checkOut: "17:00",
      hoursLogged: 8,
      status: "Approved",
    },
    {
      id: "2",
      employeeId: "HTS001",
      employeeName: "Nitya Sahu",
      date: "2023-06-21",
      project: "HR Portal Development",
      client: "Humantech Solutions",
      task: "API Integration",
      checkIn: "09:00",
      checkOut: "16:30",
      hoursLogged: 7.5,
      status: "Approved",
    },
    {
      id: "3",
      employeeId: "HTS002",
      employeeName: "Bhabani Sahu",
      date: "2023-06-20",
      project: "E-commerce Platform",
      client: "RetailTech Inc",
      task: "Database Design",
      checkIn: "10:00",
      checkOut: "16:00",
      hoursLogged: 6,
      status: "Approved",
    },
    {
      id: "4",
      employeeId: "HTS002",
      employeeName: "Bhabani Sahu",
      date: "2023-06-21",
      project: "E-commerce Platform",
      client: "RetailTech Inc",
      task: "Backend Development",
      checkIn: "09:00",
      checkOut: "17:00",
      hoursLogged: 8,
      status: "Pending",
      comments: "Waiting for manager approval",
    },
    {
      id: "5",
      employeeId: "HTS003",
      employeeName: "Sandeep Krishnan",
      date: "2023-06-20",
      project: "Mobile App Development",
      client: "AppWorks Solutions",
      task: "UI Design",
      checkIn: "09:00",
      checkOut: "13:00",
      hoursLogged: 4,
      status: "Approved",
    },
    {
      id: "6",
      employeeId: "HTS003",
      employeeName: "Sandeep Krishnan",
      date: "2023-06-20",
      project: "HR Portal Development",
      client: "Humantech Solutions",
      task: "Bug Fixes",
      checkIn: "14:00",
      checkOut: "18:00",
      hoursLogged: 4,
      status: "Approved",
    },
    {
      id: "7",
      employeeId: "HTS004",
      employeeName: "Gopal Rana",
      date: "2023-06-21",
      project: "Mobile App Development",
      client: "AppWorks Solutions",
      task: "Testing",
      checkIn: "09:00",
      checkOut: "17:00",
      hoursLogged: 8,
      status: "Rejected",
      comments: "Please provide more details on test cases",
    },
    {
      id: "8",
      employeeId: "HTS005",
      employeeName: "Samir Bitt",
      date: "2023-06-20",
      project: "HR Portal Development",
      client: "Humantech Solutions",
      task: "Documentation",
      checkIn: "10:00",
      checkOut: "16:00",
      hoursLogged: 6,
      status: "Approved",
    },
    {
      id: "9",
      employeeId: "HTS005",
      employeeName: "Samir Bitt",
      date: "2023-06-21",
      project: "HR Portal Development",
      client: "Humantech Solutions",
      task: "Client Meeting",
      checkIn: "14:00",
      checkOut: "16:00",
      hoursLogged: 2,
      status: "Pending",
    },
    {
      id: "10",
      employeeId: "HTS006",
      employeeName: "Anisha Thomas",
      date: "2023-06-20",
      project: "E-commerce Platform",
      client: "RetailTech Inc",
      task: "Requirements Analysis",
      checkIn: "09:00",
      checkOut: "17:00",
      hoursLogged: 8,
      status: "Approved",
    },
  ]);

  // Filter entries based on search term and selected employee
  const filteredEntries = timesheetEntries.filter((entry) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      entry.employeeId.toLowerCase().includes(searchLower) ||
      entry.employeeName.toLowerCase().includes(searchLower) ||
      entry.project.toLowerCase().includes(searchLower) ||
      entry.client.toLowerCase().includes(searchLower) ||
      entry.task.toLowerCase().includes(searchLower) ||
      entry.status.toLowerCase().includes(searchLower);

    const matchesEmployee = selectedEmployee
      ? entry.employeeId === selectedEmployee
      : true;

    return matchesSearch && matchesEmployee;
  });

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

  const getWeekDays = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday

    const monday = new Date(date.setDate(diff));
    const weekDays = [];

    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(monday);
      nextDay.setDate(monday.getDate() + i);
      weekDays.push(nextDay.toISOString().split("T")[0]);
    }

    return weekDays;
  };

  const weekDays = getWeekDays(selectedWeek);

  // Calculate hours between check-in and check-out
  const calculateHours = (checkIn: string, checkOut: string) => {
    if (!checkIn || !checkOut) return 0;

    const [inHours, inMinutes] = checkIn.split(":").map(Number);
    const [outHours, outMinutes] = checkOut.split(":").map(Number);

    const totalInMinutes = inHours * 60 + inMinutes;
    const totalOutMinutes = outHours * 60 + outMinutes;

    // Calculate difference in hours, rounded to 1 decimal place
    return Math.round((totalOutMinutes - totalInMinutes) / 6) / 10;
  };

  // Update hours when check-in or check-out changes
  const updateHours = (checkIn: string, checkOut: string) => {
    const hours = calculateHours(checkIn, checkOut);
    setNewEntry((prev) => ({
      ...prev,
      hoursLogged: hours > 0 ? hours : 0,
    }));
  };

  const handleAddEntry = () => {
    if (
      !newEntry.project ||
      !newEntry.client ||
      !newEntry.checkIn ||
      !newEntry.checkOut
    )
      return;

    const entry: TimesheetEntry = {
      id: (timesheetEntries.length + 1).toString(),
      employeeId: "HTS001", // Current user ID
      employeeName: "Nitya Sahu", // Current user name
      date: newEntry.date || selectedDate,
      project: newEntry.project || "",
      client: newEntry.client || "",
      task: newEntry.task || "",
      checkIn: newEntry.checkIn || "",
      checkOut: newEntry.checkOut || "",
      hoursLogged: newEntry.hoursLogged || 0,
      status: "Pending",
      comments: newEntry.comments,
    };

    setTimesheetEntries([...timesheetEntries, entry]);
    setNewEntry({
      project: "",
      client: "",
      task: "",
      date: new Date().toISOString().split("T")[0],
      checkIn: "",
      checkOut: "",
      hoursLogged: 0,
      comments: "",
    });
    setShowAddEntry(false);
  };

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Timesheet</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search project or task..."
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
                className={`px-4 py-2 rounded-md ${viewMode === "weekly" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"}`}
                onClick={() => setViewMode("weekly")}
              >
                Weekly
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
                  type="date"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={selectedWeek}
                  onChange={(e) => setSelectedWeek(e.target.value)}
                />
                <Calendar
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={18}
                />
              </div>
            )}
            <button
              onClick={() => setShowAddEntry(true)}
              className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors"
            >
              <Plus size={16} />
              <span>Add Entry</span>
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

        {showAddEntry && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add Timesheet Entry</h2>
              <button
                onClick={() => setShowAddEntry(false)}
                className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={newEntry.date || selectedDate}
                    onChange={(e) =>
                      setNewEntry({ ...newEntry, date: e.target.value })
                    }
                  />
                  <Calendar
                    className="absolute left-3 top-2.5 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Hours Worked
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="24"
                    step="0.5"
                    className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                    value={newEntry.hoursLogged}
                    readOnly
                  />
                  <Clock
                    className="absolute left-3 top-2.5 text-gray-400"
                    size={18}
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-gray-500">
                    Auto-calculated
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Name
                </label>
                <div className="relative">
                  <select
                    className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={newEntry.project}
                    onChange={(e) =>
                      setNewEntry({ ...newEntry, project: e.target.value })
                    }
                  >
                    <option value="">Select Project</option>
                    <option value="HR Portal Development">
                      HR Portal Development
                    </option>
                    <option value="E-commerce Platform">
                      E-commerce Platform
                    </option>
                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>
                    <option value="Internal Tools">Internal Tools</option>
                  </select>
                  <Briefcase
                    className="absolute left-3 top-2.5 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Client Name
                </label>
                <div className="relative">
                  <select
                    className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={newEntry.client}
                    onChange={(e) =>
                      setNewEntry({ ...newEntry, client: e.target.value })
                    }
                  >
                    <option value="">Select Client</option>
                    <option value="Humantech Solutions">
                      Humantech Solutions
                    </option>
                    <option value="RetailTech Inc">RetailTech Inc</option>
                    <option value="AppWorks Solutions">
                      AppWorks Solutions
                    </option>
                    <option value="Internal">Internal</option>
                  </select>
                  <Building
                    className="absolute left-3 top-2.5 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Task
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={newEntry.task}
                  onChange={(e) =>
                    setNewEntry({ ...newEntry, task: e.target.value })
                  }
                >
                  <option value="">Select Task</option>
                  <option value="Frontend Development">
                    Frontend Development
                  </option>
                  <option value="Backend Development">
                    Backend Development
                  </option>
                  <option value="UI Design">UI Design</option>
                  <option value="Testing">Testing</option>
                  <option value="Documentation">Documentation</option>
                  <option value="Bug Fixes">Bug Fixes</option>
                  <option value="Client Meeting">Client Meeting</option>
                  <option value="Requirements Analysis">
                    Requirements Analysis
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Clock In Time
                </label>
                <div className="relative">
                  <input
                    type="time"
                    className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={newEntry.checkIn}
                    onChange={(e) => {
                      const newCheckIn = e.target.value;
                      setNewEntry({ ...newEntry, checkIn: newCheckIn });
                      if (newCheckIn && newEntry.checkOut) {
                        updateHours(newCheckIn, newEntry.checkOut);
                      }
                    }}
                  />
                  <Clock
                    className="absolute left-3 top-2.5 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Clock Out Time
                </label>
                <div className="relative">
                  <input
                    type="time"
                    className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={newEntry.checkOut}
                    onChange={(e) => {
                      const newCheckOut = e.target.value;
                      setNewEntry({ ...newEntry, checkOut: newCheckOut });
                      if (newEntry.checkIn && newCheckOut) {
                        updateHours(newEntry.checkIn, newCheckOut);
                      }
                    }}
                  />
                  <Clock
                    className="absolute left-3 top-2.5 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Comments
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                rows={3}
                value={newEntry.comments}
                onChange={(e) =>
                  setNewEntry({ ...newEntry, comments: e.target.value })
                }
                placeholder="Add any comments or notes about this work"
              />
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleAddEntry}
                className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors"
              >
                <Save size={16} />
                <span>Submit for Approval</span>
              </button>
              <button
                onClick={() => setShowAddEntry(false)}
                className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
              >
                <X size={16} />
                <span>Cancel</span>
              </button>
            </div>
          </div>
        )}

        {viewMode === "daily" ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Employee
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Project
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Task
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Check In
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Check Out
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hours
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Comments
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredEntries
                    .filter((entry) => entry.date === selectedDate)
                    .slice(
                      (currentPage - 1) * itemsPerPage,
                      currentPage * itemsPerPage,
                    )
                    .map((entry) => (
                      <tr key={entry.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full overflow-hidden bg-blue-500 text-white">
                              <div className="h-full w-full flex items-center justify-center font-semibold">
                                {entry.employeeName
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {entry.employeeName}
                              </div>
                              <div className="text-sm text-gray-500">
                                {entry.employeeId}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(entry.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {entry.project}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {entry.client}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {entry.task}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1 text-gray-400" />
                            <span>{entry.checkIn}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1 text-gray-400" />
                            <span>{entry.checkOut}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {entry.hoursLogged} hrs
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(entry.status)}`}
                          >
                            {entry.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {entry.comments || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                            title="Edit"
                          >
                            <Edit size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  {filteredEntries.filter(
                    (entry) => entry.date === selectedDate,
                  ).length === 0 && (
                    <tr>
                      <td
                        colSpan={11}
                        className="px-6 py-4 text-center text-gray-500"
                      >
                        No timesheet entries found for this date.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10">
                      Employee
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Project
                    </th>
                    {weekDays.map((day, index) => (
                      <th
                        key={index}
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {new Date(day).toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}
                      </th>
                    ))}
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Group entries by employee and project */}
                  {Array.from(
                    new Set(
                      filteredEntries.map(
                        (entry) => `${entry.employeeId}-${entry.project}`,
                      ),
                    ),
                  ).map((key) => {
                    const [employeeId, project] = key.split("-");
                    const employeeEntries = filteredEntries.filter(
                      (entry) =>
                        entry.employeeId === employeeId &&
                        entry.project === project,
                    );

                    if (employeeEntries.length === 0) return null;

                    const employee = employeeEntries[0];
                    const weeklyHours = weekDays.map((day) => {
                      const dayEntry = employeeEntries.find(
                        (entry) => entry.date === day,
                      );
                      return dayEntry ? dayEntry.hoursLogged : 0;
                    });

                    const totalHours = weeklyHours.reduce(
                      (sum, hours) => sum + hours,
                      0,
                    );

                    return (
                      <tr key={key} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap sticky left-0 bg-white z-10">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full overflow-hidden bg-blue-500 text-white">
                              <div className="h-full w-full flex items-center justify-center font-semibold">
                                {employee.employeeName
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {employee.employeeName}
                              </div>
                              <div className="text-sm text-gray-500">
                                {employee.employeeId}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {project}
                        </td>
                        {weeklyHours.map((hours, index) => (
                          <td
                            key={index}
                            className="px-6 py-4 text-center text-sm text-gray-500"
                          >
                            {hours > 0 ? (
                              <div className="flex flex-col items-center">
                                <span className="font-medium">{hours} hrs</span>
                                <span className="text-xs text-gray-400">
                                  {employeeEntries.find(
                                    (entry) => entry.date === weekDays[index],
                                  )?.task || ""}
                                </span>
                              </div>
                            ) : (
                              <span className="text-gray-300">-</span>
                            )}
                          </td>
                        ))}
                        <td className="px-6 py-4 text-center text-sm font-medium text-gray-900 bg-gray-50">
                          {totalHours} hrs
                        </td>
                      </tr>
                    );
                  })}
                  {filteredEntries.length === 0 && (
                    <tr>
                      <td
                        colSpan={9}
                        className="px-6 py-4 text-center text-gray-500"
                      >
                        No timesheet entries found for this week.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Hours</p>
                <p className="text-2xl font-bold text-blue-600">40.5</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Clock size={20} />
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Approved</p>
                <p className="text-2xl font-bold text-green-600">32.5</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Check size={20} />
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">8.0</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                <Clock size={20} />
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Projects</p>
                <p className="text-2xl font-bold text-purple-600">3</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                <FileText size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AttendanceTimesheet;
