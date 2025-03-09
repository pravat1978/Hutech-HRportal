import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Filter,
  ChevronDown,
  Download,
  Printer,
  Search,
  Globe,
  MapPin,
  Building,
  Gift,
  X,
} from "lucide-react";

interface Holiday {
  id: number;
  name: string;
  date: string;
  type: "National" | "Regional" | "Company" | "Optional";
  description?: string;
  location?: string;
}

const EnhancedHolidayCalendar = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [viewMode, setViewMode] = useState<"month" | "year">("month");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedHoliday, setSelectedHoliday] = useState<Holiday | null>(null);
  const [selectedMonthHolidays, setSelectedMonthHolidays] = useState<
    Holiday[] | null
  >(null);
  const [filterType, setFilterType] = useState<string>("all");
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  // Updated holidays data with more entries and better organization
  const [holidays, setHolidays] = useState<Holiday[]>([
    {
      id: 1,
      name: "New Year's Day",
      date: `${currentYear}-01-01`,
      type: "National",
      description: "New Year's Day celebration",
      location: "All Locations",
    },
    {
      id: 2,
      name: "Republic Day",
      date: `${currentYear}-01-26`,
      type: "National",
      description: "Republic Day celebration",
      location: "All Locations",
    },
    {
      id: 3,
      name: "Holi",
      date: `${currentYear}-03-08`,
      type: "National",
      description: "Festival of colors",
      location: "All Locations",
    },
    {
      id: 4,
      name: "Good Friday",
      date: `${currentYear}-04-07`,
      type: "National",
      location: "All Locations",
    },
    {
      id: 5,
      name: "Labor Day",
      date: `${currentYear}-05-01`,
      type: "National",
      location: "All Locations",
    },
    {
      id: 6,
      name: "Independence Day",
      date: `${currentYear}-08-15`,
      type: "National",
      description: "Independence Day celebration",
      location: "All Locations",
    },
    {
      id: 7,
      name: "Gandhi Jayanti",
      date: `${currentYear}-10-02`,
      type: "National",
      location: "All Locations",
    },
    {
      id: 8,
      name: "Diwali",
      date: `${currentYear}-11-12`,
      type: "National",
      description: "Festival of lights",
      location: "All Locations",
    },
    {
      id: 9,
      name: "Christmas",
      date: `${currentYear}-12-25`,
      type: "National",
      location: "All Locations",
    },
    {
      id: 10,
      name: "Company Foundation Day",
      date: `${currentYear}-06-15`,
      type: "Company",
      description: "Annual company celebration",
      location: "All Offices",
    },
    {
      id: 11,
      name: "Onam",
      date: `${currentYear}-09-10`,
      type: "Regional",
      description: "Kerala harvest festival",
      location: "Kerala Office",
    },
    {
      id: 12,
      name: "Pongal",
      date: `${currentYear}-01-14`,
      type: "Regional",
      description: "Tamil harvest festival",
      location: "Tamil Nadu Office",
    },
    {
      id: 13,
      name: "Durga Puja",
      date: `${currentYear}-10-22`,
      type: "Regional",
      description: "Bengali festival",
      location: "West Bengal Office",
    },
    {
      id: 14,
      name: "Optional Holiday",
      date: `${currentYear}-07-10`,
      type: "Optional",
      description: "Flexible holiday that can be taken by employees",
      location: "All Locations",
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

  const getHolidayTypeColor = (type: string) => {
    switch (type) {
      case "National":
        return "bg-red-100 text-red-800 border-red-200";
      case "Regional":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Company":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Optional":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getHolidayTypeIcon = (type: string) => {
    switch (type) {
      case "National":
        return <Globe className="h-4 w-4 mr-1" />;
      case "Regional":
        return <MapPin className="h-4 w-4 mr-1" />;
      case "Company":
        return <Building className="h-4 w-4 mr-1" />;
      case "Optional":
        return <Gift className="h-4 w-4 mr-1" />;
      default:
        return null;
    }
  };

  const filteredHolidays = holidays.filter((holiday) => {
    const matchesSearch =
      holiday.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (holiday.description || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || holiday.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const renderMonthCalendar = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="h-28 border border-gray-200 bg-gray-50"
        ></div>,
      );
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const holiday = isHoliday(date);
      const isToday = new Date().toISOString().split("T")[0] === date;
      const isWeekend =
        new Date(date).getDay() === 0 || new Date(date).getDay() === 6;

      days.push(
        <div
          key={day}
          className={`h-28 border border-gray-200 p-1 relative ${holiday ? "bg-white" : ""} ${isToday ? "border-blue-500 border-2" : ""} ${isWeekend && !holiday ? "bg-gray-50" : ""}`}
          onClick={() => {
            if (holiday) {
              setSelectedHoliday(holiday);
            } else {
              // Show all holidays for this month
              const monthHolidays = holidays.filter((h) => {
                const holidayDate = new Date(h.date);
                return (
                  holidayDate.getMonth() === currentMonth &&
                  holidayDate.getFullYear() === currentYear
                );
              });
              if (monthHolidays.length > 0) {
                setSelectedMonthHolidays(monthHolidays);
              }
            }
          }}
        >
          <div className="flex justify-between items-start">
            <span
              className={`font-medium ${isToday ? "bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center" : ""} ${isWeekend && !holiday ? "text-gray-500" : ""}`}
            >
              {day}
            </span>
            {holiday && (
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full flex items-center ${getHolidayTypeColor(holiday.type)}`}
              >
                {getHolidayTypeIcon(holiday.type)}
                {holiday.type}
              </span>
            )}
          </div>
          {holiday && (
            <div
              className={`mt-1 text-xs p-1 rounded ${getHolidayTypeColor(holiday.type)} cursor-pointer hover:opacity-80 transition-opacity`}
            >
              {holiday.name}
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

      // Count holidays in this month
      const monthHolidays = holidays.filter((holiday) => {
        const holidayDate = new Date(holiday.date);
        return (
          holidayDate.getMonth() === index &&
          holidayDate.getFullYear() === currentYear
        );
      });

      return (
        <div
          key={month}
          className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="bg-gray-50 p-2 font-medium text-center border-b border-gray-200">
            {month}
          </div>
          <div className="p-3">
            <div className="grid grid-cols-7 gap-1 text-xs text-center">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, i) => (
                <div
                  key={day}
                  className={`font-medium ${i === 0 || i === 6 ? "text-gray-500" : ""}`}
                >
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
                const holiday = isHoliday(date);
                const isToday = new Date().toISOString().split("T")[0] === date;
                const isWeekend =
                  new Date(date).getDay() === 0 ||
                  new Date(date).getDay() === 6;

                return (
                  <div
                    key={`day-${day}`}
                    className={`h-6 flex items-center justify-center rounded-full w-6 mx-auto cursor-pointer transition-all hover:scale-110
                      ${holiday ? getHolidayTypeColor(holiday.type) : ""}
                      ${isToday ? "ring-2 ring-blue-500" : ""}
                      ${isWeekend && !holiday ? "text-gray-400" : ""}
                    `}
                    onClick={() => {
                      if (holiday) {
                        setSelectedHoliday(holiday);
                      } else {
                        // Show all holidays for this month
                        const monthIndex = index;
                        const monthHolidays = holidays.filter((h) => {
                          const holidayDate = new Date(h.date);
                          return (
                            holidayDate.getMonth() === monthIndex &&
                            holidayDate.getFullYear() === currentYear
                          );
                        });
                        if (monthHolidays.length > 0) {
                          setSelectedMonthHolidays(monthHolidays);
                        }
                      }
                    }}
                    title={holiday ? holiday.name : ""}
                  >
                    {day}
                  </div>
                );
              })}
            </div>

            <div className="mt-2 text-xs">
              <div className="flex justify-between">
                <span className="font-medium">
                  Holidays: {monthHolidays.length}
                </span>
                {monthHolidays.length > 0 && (
                  <button
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Show month holidays in modal
                      const monthHolidays = holidays.filter((h) => {
                        const holidayDate = new Date(h.date);
                        return (
                          holidayDate.getMonth() === index &&
                          holidayDate.getFullYear() === currentYear
                        );
                      });
                      setSelectedMonthHolidays(monthHolidays);
                    }}
                  >
                    View Holidays
                  </button>
                )}
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
          <h1 className="text-2xl font-bold">Holiday Calendar</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search holidays..."
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
            <div className="relative">
              <button
                className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                onClick={() => setShowFilterMenu(!showFilterMenu)}
              >
                <Filter size={16} />
                <span>Filter</span>
                <ChevronDown size={16} />
              </button>
              {showFilterMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200 animate-in fade-in slide-in-from-top-5 duration-200">
                  <div className="py-1">
                    <button
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${filterType === "all" ? "bg-gray-100" : ""}`}
                      onClick={() => {
                        setFilterType("all");
                        setShowFilterMenu(false);
                      }}
                    >
                      All Types
                    </button>
                    <button
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${filterType === "National" ? "bg-gray-100" : ""}`}
                      onClick={() => {
                        setFilterType("National");
                        setShowFilterMenu(false);
                      }}
                    >
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-2 text-red-600" />
                        National Holidays
                      </div>
                    </button>
                    <button
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${filterType === "Regional" ? "bg-gray-100" : ""}`}
                      onClick={() => {
                        setFilterType("Regional");
                        setShowFilterMenu(false);
                      }}
                    >
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                        Regional Holidays
                      </div>
                    </button>
                    <button
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${filterType === "Company" ? "bg-gray-100" : ""}`}
                      onClick={() => {
                        setFilterType("Company");
                        setShowFilterMenu(false);
                      }}
                    >
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2 text-blue-600" />
                        Company Holidays
                      </div>
                    </button>
                    <button
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${filterType === "Optional" ? "bg-gray-100" : ""}`}
                      onClick={() => {
                        setFilterType("Optional");
                        setShowFilterMenu(false);
                      }}
                    >
                      <div className="flex items-center">
                        <Gift className="h-4 w-4 mr-2 text-green-600" />
                        Optional Holidays
                      </div>
                    </button>
                  </div>
                </div>
              )}
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

        {/* Calendar Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200 sticky top-0 z-10">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-100 border border-red-200 rounded-full mr-2"></div>
            <span className="text-sm flex items-center">
              <Globe className="h-3 w-3 mr-1 text-red-600" /> National Holiday
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-purple-100 border border-purple-200 rounded-full mr-2"></div>
            <span className="text-sm flex items-center">
              <MapPin className="h-3 w-3 mr-1 text-purple-600" /> Regional
              Holiday
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-100 border border-blue-200 rounded-full mr-2"></div>
            <span className="text-sm flex items-center">
              <Building className="h-3 w-3 mr-1 text-blue-600" /> Company
              Holiday
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-100 border border-green-200 rounded-full mr-2"></div>
            <span className="text-sm flex items-center">
              <Gift className="h-3 w-3 mr-1 text-green-600" /> Optional Holiday
            </span>
          </div>
          <div className="flex items-center ml-auto">
            <div className="w-4 h-4 border-2 border-blue-500 rounded-full mr-2"></div>
            <span className="text-sm">Today</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-50 rounded-full mr-2"></div>
            <span className="text-sm">Weekend</span>
          </div>
        </div>

        {viewMode === "month" ? (
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden mb-6 hover:shadow-lg transition-shadow">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <button
                onClick={prevMonth}
                className="p-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <h2 className="text-xl font-semibold">
                {months[currentMonth]} {currentYear}
              </h2>
              <button
                onClick={nextMonth}
                className="p-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="grid grid-cols-7 gap-1 text-center font-medium w-full">
                  <div className="text-red-500">Sun</div>
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div className="text-red-500">Sat</div>
                </div>
                {/* View all holidays for this month button */}
                <button
                  className="ml-4 text-blue-600 hover:text-blue-800 transition-colors text-sm flex items-center"
                  onClick={() => {
                    const monthHolidays = holidays.filter((h) => {
                      const holidayDate = new Date(h.date);
                      return (
                        holidayDate.getMonth() === currentMonth &&
                        holidayDate.getFullYear() === currentYear
                      );
                    });
                    if (monthHolidays.length > 0) {
                      setSelectedMonthHolidays(monthHolidays);
                    }
                  }}
                >
                  View All Holidays
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {renderMonthCalendar()}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden mb-6 hover:shadow-lg transition-shadow">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <button
                onClick={prevYear}
                className="p-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <h2 className="text-xl font-semibold">{currentYear}</h2>
              <button
                onClick={nextYear}
                className="p-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <ChevronRight size={24} />
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
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
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
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredHolidays
                  .filter(
                    (holiday) =>
                      new Date(holiday.date).getFullYear() === currentYear,
                  )
                  .sort(
                    (a, b) =>
                      new Date(a.date).getTime() - new Date(b.date).getTime(),
                  )
                  .map((holiday) => (
                    <tr
                      key={holiday.id}
                      className={`hover:bg-gray-50 cursor-pointer transition-colors ${selectedHoliday?.id === holiday.id ? "bg-blue-50" : ""}`}
                      onClick={() => setSelectedHoliday(holiday)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(holiday.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          weekday: "short",
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {holiday.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span
                          className={`px-2 py-1 inline-flex items-center text-xs leading-5 font-semibold rounded-full ${getHolidayTypeColor(holiday.type)}`}
                        >
                          {getHolidayTypeIcon(holiday.type)}
                          {holiday.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {holiday.location || "All Locations"}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {holiday.description || "-"}
                      </td>
                    </tr>
                  ))}
                {filteredHolidays.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No holidays found matching your search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Month Holidays Modal */}
        {selectedMonthHolidays && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedMonthHolidays(null)}
          >
            <div
              className="bg-white rounded-lg max-w-2xl w-full p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">
                  Holidays in{" "}
                  {
                    months[
                      selectedMonthHolidays[0]
                        ? new Date(selectedMonthHolidays[0].date).getMonth()
                        : currentMonth
                    ]
                  }{" "}
                  {currentYear}
                </h3>
                <button
                  onClick={() => setSelectedMonthHolidays(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="overflow-y-auto max-h-[60vh]">
                  <table className="w-full">
                    <thead className="bg-gray-50 sticky top-0">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Holiday Name
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Location
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {selectedMonthHolidays
                        .sort(
                          (a, b) =>
                            new Date(a.date).getTime() -
                            new Date(b.date).getTime(),
                        )
                        .map((holiday) => (
                          <tr
                            key={holiday.id}
                            className="hover:bg-gray-50 cursor-pointer"
                            onClick={() => {
                              setSelectedHoliday(holiday);
                              setSelectedMonthHolidays(null);
                            }}
                          >
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                              {new Date(holiday.date).toLocaleDateString(
                                "en-US",
                                {
                                  day: "numeric",
                                  weekday: "short",
                                },
                              )}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                              {holiday.name}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm">
                              <span
                                className={`px-2 py-1 inline-flex items-center text-xs leading-5 font-semibold rounded-full ${getHolidayTypeColor(holiday.type)}`}
                              >
                                {getHolidayTypeIcon(holiday.type)}
                                {holiday.type}
                              </span>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                              {holiday.location || "All Locations"}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Holiday Detail Modal */}
        {selectedHoliday && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedHoliday(null)}
          >
            <div
              className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">
                  {selectedHoliday.name}
                </h3>
                <button
                  onClick={() => setSelectedHoliday(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-4 animate-in fade-in duration-300">
                <div>
                  <span
                    className={`px-3 py-1 inline-flex items-center text-sm leading-5 font-semibold rounded-full ${getHolidayTypeColor(selectedHoliday.type)}`}
                  >
                    {getHolidayTypeIcon(selectedHoliday.type)}
                    {selectedHoliday.type} Holiday
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                  <span className="text-gray-700">
                    {new Date(selectedHoliday.date).toLocaleDateString(
                      "en-US",
                      {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </span>
                </div>
                {selectedHoliday.location && (
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                    <span className="text-gray-700">
                      {selectedHoliday.location}
                    </span>
                  </div>
                )}
                {selectedHoliday.description && (
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Description
                    </h4>
                    <p className="text-gray-600">
                      {selectedHoliday.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default EnhancedHolidayCalendar;
