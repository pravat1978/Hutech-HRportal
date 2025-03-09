import React, { useState } from "react";
import Layout from "../layout/Layout";
import {
  Search,
  Filter,
  ChevronDown,
  Mail,
  Phone,
  Eye,
  Edit,
  Trash2,
  Check,
  X,
  Printer,
  Download,
  Building,
  Briefcase,
  Calendar,
  MapPin,
  User,
} from "lucide-react";

interface Employee {
  selected?: boolean;
  id: string;
  name: string;
  department: string;
  designation: string;
  grade: string;
  manager: string;
  email: string;
  phone: string;
  lastSignIn: string;
  avatar?: string;
}

const Directory = () => {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null,
  );
  const [showProfileOverlay, setShowProfileOverlay] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: "HTS001",
      name: "Nitya Sahu",
      department: "Executive",
      designation: "Chief Executive Officer",
      grade: "L5",
      manager: "-",
      email: "nityapriya.sahu@hutechsolutions.com",
      phone: "6371600322",
      lastSignIn: "2023-06-20T14:30:00",
      avatar: "",
    },
    {
      id: "HTS002",
      name: "Bhabani Sahu",
      department: "Staffing Service",
      designation: "Sr. Business Analyst",
      grade: "L3",
      manager: "Nitya Sahu",
      email: "bhabani@hutechsolutions.com",
      phone: "9337061322",
      lastSignIn: "2023-06-20T13:15:00",
      avatar: "",
    },
    {
      id: "HTS003",
      name: "Sandeep Krishnan",
      department: "Staffing Service",
      designation: "Sr Associate Developer L1",
      grade: "L2",
      manager: "Nitya Sahu",
      email: "sandeep@hutechsolutions.com",
      phone: "7406078524",
      lastSignIn: "2023-06-19T16:45:00",
      avatar: "",
    },
    {
      id: "HTS004",
      name: "Gopal Rana",
      department: "Staffing Service",
      designation: "Director",
      grade: "L4",
      manager: "Nitya Sahu",
      email: "gopal@hutechsolutions.com",
      phone: "9938641684",
      lastSignIn: "2023-06-20T10:30:00",
      avatar: "",
    },
    {
      id: "HTS005",
      name: "Samir Bitt",
      department: "Human Resource",
      designation: "HR Executive",
      grade: "L2",
      manager: "Nitya Sahu",
      email: "samir@hutechsolutions.com",
      phone: "9632273012",
      lastSignIn: "2023-06-18T09:15:00",
      avatar: "",
    },
    {
      id: "EMP006",
      name: "Anisha Thomas",
      department: "Human Resource",
      designation: "HR Manager",
      grade: "L3",
      manager: "Pravat Ranjan Jena",
      email: "anisha@humantech.co.in",
      phone: "+91 9876543215",
      lastSignIn: "2023-06-20T11:45:00",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anisha",
    },
    {
      id: "EMP007",
      name: "Abhinandan Baloji",
      department: "Staffing Service",
      designation: "Team Lead",
      grade: "L3",
      manager: "Rajeev Iyer",
      email: "abhinandan@humantech.co.in",
      phone: "+91 9876543216",
      lastSignIn: "2023-06-19T14:20:00",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abhinandan",
    },
  ]);

  // Function to format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60),
    );

    if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  // Filter employees based on search term
  const filteredEmployees = employees.filter((employee) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      employee.id.toLowerCase().includes(searchLower) ||
      employee.name.toLowerCase().includes(searchLower) ||
      employee.department.toLowerCase().includes(searchLower) ||
      employee.designation.toLowerCase().includes(searchLower) ||
      employee.grade.toLowerCase().includes(searchLower) ||
      employee.manager.toLowerCase().includes(searchLower) ||
      employee.email.toLowerCase().includes(searchLower) ||
      employee.phone.toLowerCase().includes(searchLower)
    );
  });

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Employee Directory</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search employees..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
            </div>
            <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
              <Filter size={16} />
              <span>Filter</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto" style={{ position: "relative" }}>
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      onChange={(e) => {
                        // Logic to select/deselect all employees
                      }}
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-[56px] bg-gray-50 z-10">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-[120px] bg-gray-50 z-10">
                    Employee Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Manager
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Signed In
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider sticky right-0 bg-gray-50 z-10">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredEmployees
                  .slice(
                    (currentPage - 1) * itemsPerPage,
                    currentPage * itemsPerPage,
                  )
                  .map((employee) => (
                    <tr key={employee.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sticky left-0 bg-white z-10">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sticky left-[56px] bg-white z-10">
                        {employee.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap sticky left-[120px] bg-white z-10">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full overflow-hidden bg-blue-500 text-white">
                            <div className="h-full w-full flex items-center justify-center font-semibold">
                              {employee.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                          </div>
                          <div className="ml-4">
                            <div
                              className="text-sm font-medium text-gray-900 cursor-pointer hover:text-blue-600"
                              onClick={() => {
                                setSelectedEmployee(employee);
                                setShowProfileOverlay(true);
                              }}
                            >
                              {employee.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {employee.manager}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {employee.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <span>{employee.phone}</span>
                          <span className="ml-2 text-green-500">
                            <Check size={16} />
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Yes
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium sticky right-0 bg-white z-10">
                        <button
                          className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                          title="Edit"
                        >
                          <Edit size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                {filteredEmployees.length === 0 && (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No employees found matching your search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 bg-white border-t border-gray-200 flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-700">1 to 55 of 55</span>
            </div>
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
                disabled={
                  currentPage * itemsPerPage >= filteredEmployees.length
                }
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
                      filteredEmployees.length,
                    )}
                  </span>{" "}
                  to{" "}
                  <span className="font-medium">
                    {Math.min(
                      currentPage * itemsPerPage,
                      filteredEmployees.length,
                    )}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium">
                    {filteredEmployees.length}
                  </span>{" "}
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
                    length: Math.ceil(filteredEmployees.length / itemsPerPage),
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
                    disabled={
                      currentPage * itemsPerPage >= filteredEmployees.length
                    }
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

      {/* Employee Profile Overlay */}
      {showProfileOverlay && selectedEmployee && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-lg">
              <h3 className="text-lg font-semibold">Employee Profile</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => window.print()}
                  className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                  title="Print"
                >
                  <Printer size={18} />
                </button>
                <button
                  onClick={() => {
                    // Logic to download employee data
                    alert("Downloading employee data...");
                  }}
                  className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                  title="Download"
                >
                  <Download size={18} />
                </button>
                <button
                  onClick={() => setShowProfileOverlay(false)}
                  className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left column - Basic info */}
                <div className="md:w-1/3">
                  <div className="flex flex-col items-center mb-6">
                    <div className="h-24 w-24 rounded-full overflow-hidden bg-blue-500 text-white mb-4">
                      <div className="h-full w-full flex items-center justify-center text-2xl font-semibold">
                        {selectedEmployee.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-center">
                      {selectedEmployee.name}
                    </h2>
                    <p className="text-gray-600 text-center">
                      {selectedEmployee.designation}
                    </p>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <Building size={14} className="mr-1" />
                      <span>{selectedEmployee.department}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-md font-semibold mb-3">
                      Contact Information
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <Mail size={14} className="mr-2 text-gray-500" />
                        <span>{selectedEmployee.email}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone size={14} className="mr-2 text-gray-500" />
                        <span>{selectedEmployee.phone}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin size={14} className="mr-2 text-gray-500" />
                        <span>Bhubaneswar, Odisha</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column - Detailed info */}
                <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-gray-200 md:pl-6 pt-4 md:pt-0">
                  <div className="mb-6">
                    <h3 className="text-md font-semibold mb-3">
                      Employee Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Employee ID</p>
                        <p className="text-sm font-medium">
                          {selectedEmployee.id}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Grade</p>
                        <p className="text-sm font-medium">
                          {selectedEmployee.grade}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Manager</p>
                        <p className="text-sm font-medium">
                          {selectedEmployee.manager}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Last Sign In</p>
                        <p className="text-sm font-medium">
                          {formatDate(selectedEmployee.lastSignIn)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-md font-semibold mb-3">
                      Work Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Department</p>
                        <p className="text-sm font-medium">
                          {selectedEmployee.department}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Designation</p>
                        <p className="text-sm font-medium">
                          {selectedEmployee.designation}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Work Location</p>
                        <p className="text-sm font-medium">
                          Bhubaneswar Office
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Join Date</p>
                        <p className="text-sm font-medium">01/01/2022</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-md font-semibold mb-3">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Date of Birth</p>
                        <p className="text-sm font-medium">15/05/1990</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Gender</p>
                        <p className="text-sm font-medium">Male</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Marital Status</p>
                        <p className="text-sm font-medium">Married</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Blood Group</p>
                        <p className="text-sm font-medium">O+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setShowProfileOverlay(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Directory;
