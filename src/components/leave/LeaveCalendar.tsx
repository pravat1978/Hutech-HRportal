import React, { useState } from "react";
import Layout from "../layout/Layout";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Filter,
  ChevronDown,
  Download,
  Printer,
} from "lucide-react";

interface Holiday {
  id: number;
  name: string;
  date: string;
  type: "National" | "Regional" | "Company";
  description?: string;
}

interface LeaveDay {
  id: number;
  employeeId: string;
  employeeName: string;
  date: string;
  type:
    | "Sick"
    | "Casual"
    | "Earned"
    | "Maternity"
    | "Paternity"
    | "Bereavement"
    | "Unpaid";
  status: "Approved" | "Pending" | "Rejected";
  duration: "Full Day" | "First Half" | "Second Half";
}

const LeaveCalendar = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<"month" | "year">("month");

  // Sample holidays data
  const [holidays, setHolidays] = useState<Holiday[]>([
    {
      id: 1,
      name: "New Year's Day",
      date: `${currentYear}-01-01`,
      type: "National",
      description: "New Year's Day celebration",
    },
    {
      id: 2,
      name: "Republic Day",
      date: `${currentYear}-01-26`,
      type: "National",
      description: "Republic Day celebration",
    },
    {
      id: 3,
      name: "Holi",
      date: `${currentYear}-03-08`,
      type: "National",
      description: "Festival of colors",
    },
    {
      id: 4,
      name: "Good Friday",
      date: `${currentYear}-04-07`,
      type: "National",
    },
    {
      id: 5,
      name: "Labor Day",
      date: `${currentYear}-05-01`,
      type: "National",
    },
    {
      id: 6,
      name: "Independence Day",
      date: `${currentYear}-08-15`,
      type: "National",
      description: "Independence Day celebration",
    },
    {
      id: 7,
      name: "Gandhi Jayanti",
      date: `${currentYear}-10-02`,
      type: "National",
    },
    {
      id: 8,
      name: "Diwali",
      date: `${currentYear}-11-12`,
      type: "National",
      description: "Festival of lights",
    },
    {
      id: 9,
      name: "Christmas",
      date: `${currentYear}-12-25`,
      type: "National",
    },
    {
      id: 10,
      name: "Company Foundation Day",
      date: `${currentYear}-06-15`,
      type: "Company",
      description: "Annual company celebration",
    },
  ]);

  // Sample leave data
  const [leaves, setLeaves] = useState<LeaveDay[]>([
    {
      id: 1,
      employeeId: "HTS001",
      employeeName: "Nitya Sahu",
      date: `${currentYear}-07-10`,
      type: "Casual",
      status: "Approved",
      duration: "Full Day",
    },
    {
      id: 2,
      employeeId: "HTS001",
      employeeName: "Nitya Sahu",
      date: `${currentYear}-07-11`,
      type: "Casual",
      status: "Approved",
      duration: "Full Day",
    },
    {
      id: 3,
      employeeId: "HTS002",
      employeeName: "Bhabani Sahu",
      date: `${currentYear}-07-15`,
      type: "Sick",
      status: "Approved",
      duration: "Full Day",
    },
    {
      id: 4,
      employeeId: "HTS003",
      employeeName: "Sandeep Krishnan",
      date: `${currentYear}-07-20`,
      type: "Earned",
      status: "Pending",
      duration: "Full Day",
    },
  ]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevYear = () => {
    setCurrentYear(currentYear - 1);
  };

  const nextYear = () => {
    setCurrentYear(currentYear + 1);
  };

  const isHoliday = (date: string) => {
    return holidays.find((holiday) => holiday.date === date);
  };

  const isLeaveDay = (date: string) => {
    return leaves.find((leave) => leave.date === date);
  };

  const renderMonthCalendar = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="h-24 border border-gray-200 bg-gray-50"
        ></div>,
      );
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const holiday = isHoliday(date);
      const leaveDay = isLeaveDay(date);

      days.push(
        <div
          key={day}
          className={`h-24 border border-gray-200 p-1 ${holiday ? "bg-red-50" : ""} ${leaveDay ? "bg-blue-50" : ""}`}
        >
          <div className="flex justify-between items-start">
            <span className="font-medium">{day}</span>
            {holiday && (
              <span className="text-xs px-1.5 py-0.5 bg-red-100 text-red-800 rounded-full">
                Holiday
              </span>
            )}
            {leaveDay && (
              <span className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                Leave
              </span>
            )}
          </div>
          {holiday && (
            <div className="mt-1 text-xs text-red-700">{holiday.name}</div>
          )}
          {leaveDay && (
            <div className="mt-1 text-xs text-blue-700">
              {leaveDay.employeeName} - {leaveDay.type}
            </div>
          )}
        </div>,
      );
    }

    return days;
  };

  const renderYearCalendar = () => {
    return months.map((month, index) => {
      const daysInMonth = getDaysInMonth(currentYear, index);
      const firstDayOfMonth = getFirstDayOfMonth(currentYear, index);

      // Count holidays and leaves in this month
      const monthHolidays = holidays.filter((holiday) => {
        const holidayDate = new Date(holiday.date);
        return (
          holidayDate.getMonth() === index &&
          holidayDate.getFullYear() === currentYear
        );
      });

      const monthLeaves = leaves.filter((leave) => {
        const leaveDate = new Date(leave.date);
        return (
          leaveDate.getMonth() === index &&
          leaveDate.getFullYear() === currentYear
        );
      });

      return (
        <div
          key={month}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <div className="bg-gray-50 p-2 font-medium text-center border-b border-gray-200">
            {month}
          </div>
          <div className="p-3">
            <div className="grid grid-cols-7 gap-1 text-xs text-center">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div key={day} className="font-medium">
                  {day}
                </div>
              ))}

              {/* Empty cells for days before the first day of the month */}
              {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                <div key={`empty-${i}`} className="h-6"></div>
              ))}

              {/* Days of the month */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const date = `${currentYear}-${String(index + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                const isHol = isHoliday(date);
                const isLeave = isLeaveDay(date);

                return (
                  <div
                    key={`day-${day}`}
                    className={`h-6 flex items-center justify-center rounded-full w-6 mx-auto
                      ${isHol ? "bg-red-100 text-red-800" : ""}
                      ${isLeave ? "bg-blue-100 text-blue-800" : ""}
                    `}
                  >
                    {day}
                  </div>
                );
              })}
            </div>

            <div className="mt-2 text-xs">
              <div className="flex justify-between">
                <span>Holidays: {monthHolidays.length}</span>
                <span>Leaves: {monthLeaves.length}</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Leave Calendar</h1>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <button
                className={`px-4 py-2 rounded-md ${viewMode === "month" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"}`}
                onClick={() => setViewMode("month")}
              >
                Month
              </button>
              <button
                className={`px-4 py-2 rounded-md ${viewMode === "year" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"}`}
                onClick={() => setViewMode("year")}
              >
                Year
              </button>
            </div>
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

        {/* Calendar Legend */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-100 rounded-full mr-2"></div>
            <span className="text-sm">Holiday</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-100 rounded-full mr-2"></div>
            <span className="text-sm">Leave</span>
          </div>
        </div>

        {viewMode === "month" ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <button
                onClick={prevMonth}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <ChevronLeft size={20} />
              </button>
              <h2 className="text-xl font-semibold">
                {months[currentMonth]} {currentYear}
              </h2>
              <button
                onClick={nextMonth}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-7 gap-1 mb-2 text-center font-medium">
                <div className="text-red-500">Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div className="text-red-500">Sat</div>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {renderMonthCalendar()}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <button
                onClick={prevYear}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <ChevronLeft size={20} />
              </button>
              <h2 className="text-xl font-semibold">{currentYear}</h2>
              <button
                onClick={nextYear}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {renderYearCalendar()}
              </div>
            </div>
          </div>
        )}

        {/* Holiday List */}
        <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Holidays in {currentYear}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Holiday Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {holidays
                  .filter(
                    (holiday) =>
                      new Date(holiday.date).getFullYear() === currentYear,
                  )
                  .sort(
                    (a, b) =>
                      new Date(a.date).getTime() - new Date(b.date).getTime(),
                  )
                  .map((holiday) => (
                    <tr key={holiday.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(holiday.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {holiday.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              holiday.type === "National"
                                ? "bg-red-100 text-red-800"
                                : holiday.type === "Regional"
                                  ? "bg-purple-100 text-purple-800"
                                  : "bg-blue-100 text-blue-800"
                            }`}
                        >
                          {holiday.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {holiday.description || "-"}
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

export default LeaveCalendar;
