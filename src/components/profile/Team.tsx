import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Edit, Save, X, UserPlus } from "lucide-react";

const Team = () => {
  const [reportingManagers, setReportingManagers] = useState({
    primary: [],
    secondary: [],
  });

  const [directReports, setDirectReports] = useState([
    {
      id: 1,
      name: "Amlana Aparajita",
      department: "Staffing Service",
      designation: "Sr. Business Analyst",
    },
    {
      id: 2,
      name: "Virinchi Kumar",
      department: "Staffing Service",
      designation: "Sr Associate Developer L1",
    },
    {
      id: 3,
      name: "Rajeev Iyer",
      department: "Staffing Service",
      designation: "Director",
    },
    {
      id: 4,
      name: "Swayamprava Nanda",
      department: "Human Resource",
      designation: "HR Executive",
    },
  ]);

  const [editingSection, setEditingSection] = useState("");
  const [tempReportingManagers, setTempReportingManagers] = useState({
    primary: [...reportingManagers.primary],
    secondary: [...reportingManagers.secondary],
  });
  const [tempDirectReports, setTempDirectReports] = useState([
    ...directReports,
  ]);
  const [newManager, setNewManager] = useState({
    name: "",
    type: "Primary",
    department: "",
    designation: "",
  });
  const [newDirectReport, setNewDirectReport] = useState({
    name: "",
    department: "",
    designation: "",
  });

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-semibold">TEAM</h2>
            {editingSection === "team" ? (
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setReportingManagers(tempReportingManagers);
                    setDirectReports(tempDirectReports);
                    setEditingSection("");
                  }}
                  className="p-1 text-green-600 hover:text-green-800 transition-colors flex items-center gap-1"
                >
                  <Save size={18} />
                  <span className="text-sm">Save</span>
                </button>
                <button
                  onClick={() => {
                    setTempReportingManagers({ ...reportingManagers });
                    setTempDirectReports([...directReports]);
                    setEditingSection("");
                  }}
                  className="p-1 text-red-600 hover:text-red-800 transition-colors flex items-center gap-1"
                >
                  <X size={18} />
                  <span className="text-sm">Cancel</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setTempReportingManagers({ ...reportingManagers });
                  setTempDirectReports([...directReports]);
                  setEditingSection("team");
                }}
                className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Edit size={18} />
              </button>
            )}
          </div>

          <div className="p-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
                <h3 className="text-xl font-semibold">REPORTING MANAGER</h3>
                {editingSection === "team" && (
                  <button
                    onClick={() => {
                      const dialog =
                        document.getElementById("add-manager-dialog");
                      if (dialog) dialog.style.display = "block";
                    }}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <UserPlus size={16} />
                    <span>Add</span>
                  </button>
                )}
              </div>
              <div className="p-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                          Department
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                          Designation
                        </th>
                        {editingSection === "team" && (
                          <th className="px-6 py-3 w-24"></th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {tempReportingManagers.primary.length === 0 && (
                        <tr className="border-b border-gray-200">
                          <td
                            colSpan={editingSection === "team" ? 5 : 4}
                            className="px-6 py-4 text-sm text-gray-500"
                          >
                            No Primary managers assigned.
                          </td>
                        </tr>
                      )}
                      {tempReportingManagers.primary.map((manager, index) => (
                        <tr
                          key={`primary-${index}`}
                          className="border-b border-gray-200"
                        >
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {manager.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            Primary
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {manager.department}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {manager.designation}
                          </td>
                          {editingSection === "team" && (
                            <td className="px-6 py-4 text-right">
                              <button
                                onClick={() => {
                                  const newManagers = {
                                    ...tempReportingManagers,
                                  };
                                  newManagers.primary.splice(index, 1);
                                  setTempReportingManagers(newManagers);
                                }}
                                className="p-1 text-red-600 hover:text-red-800 transition-colors"
                              >
                                <X size={16} />
                              </button>
                            </td>
                          )}
                        </tr>
                      ))}
                      {tempReportingManagers.secondary.length === 0 && (
                        <tr className="border-b border-gray-200">
                          <td
                            colSpan={editingSection === "team" ? 5 : 4}
                            className="px-6 py-4 text-sm text-gray-500"
                          >
                            No Secondary managers assigned.
                          </td>
                        </tr>
                      )}
                      {tempReportingManagers.secondary.map((manager, index) => (
                        <tr
                          key={`secondary-${index}`}
                          className="border-b border-gray-200"
                        >
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {manager.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            Secondary
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {manager.department}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {manager.designation}
                          </td>
                          {editingSection === "team" && (
                            <td className="px-6 py-4 text-right">
                              <button
                                onClick={() => {
                                  const newManagers = {
                                    ...tempReportingManagers,
                                  };
                                  newManagers.secondary.splice(index, 1);
                                  setTempReportingManagers(newManagers);
                                }}
                                className="p-1 text-red-600 hover:text-red-800 transition-colors"
                              >
                                <X size={16} />
                              </button>
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div
                  id="add-manager-dialog"
                  className="hidden mt-4 p-4 border border-gray-200 rounded-md bg-gray-50"
                >
                  <h4 className="font-medium mb-3">Add New Manager</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        value={newManager.name}
                        onChange={(e) =>
                          setNewManager({
                            ...newManager,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Type
                      </label>
                      <select
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        value={newManager.type}
                        onChange={(e) =>
                          setNewManager({
                            ...newManager,
                            type: e.target.value,
                          })
                        }
                      >
                        <option value="Primary">Primary</option>
                        <option value="Secondary">Secondary</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Department
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        value={newManager.department}
                        onChange={(e) =>
                          setNewManager({
                            ...newManager,
                            department: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Designation
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        value={newManager.designation}
                        onChange={(e) =>
                          setNewManager({
                            ...newManager,
                            designation: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => {
                        if (newManager.name.trim() === "") return;

                        const newManagers = { ...tempReportingManagers };
                        if (newManager.type === "Primary") {
                          newManagers.primary.push({
                            name: newManager.name,
                            department: newManager.department,
                            designation: newManager.designation,
                          });
                        } else {
                          newManagers.secondary.push({
                            name: newManager.name,
                            department: newManager.department,
                            designation: newManager.designation,
                          });
                        }

                        setTempReportingManagers(newManagers);
                        setNewManager({
                          name: "",
                          type: "Primary",
                          department: "",
                          designation: "",
                        });

                        const dialog =
                          document.getElementById("add-manager-dialog");
                        if (dialog) dialog.style.display = "none";
                      }}
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <Save size={16} />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={() => {
                        setNewManager({
                          name: "",
                          type: "Primary",
                          department: "",
                          designation: "",
                        });
                        const dialog =
                          document.getElementById("add-manager-dialog");
                        if (dialog) dialog.style.display = "none";
                      }}
                      className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <X size={16} />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
                <h3 className="text-xl font-semibold">DIRECT REPORTS</h3>
                {editingSection === "team" && (
                  <button
                    onClick={() => {
                      const dialog =
                        document.getElementById("add-report-dialog");
                      if (dialog) dialog.style.display = "block";
                    }}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <UserPlus size={16} />
                    <span>Add</span>
                  </button>
                )}
              </div>
              <div className="p-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                          Department
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                          Designation
                        </th>
                        {editingSection === "team" && (
                          <th className="px-6 py-3 w-24"></th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {tempDirectReports.length === 0 ? (
                        <tr className="border-b border-gray-200">
                          <td
                            colSpan={editingSection === "team" ? 4 : 3}
                            className="px-6 py-4 text-sm text-gray-500"
                          >
                            No direct reports found.
                          </td>
                        </tr>
                      ) : (
                        tempDirectReports.map((report, index) => (
                          <tr
                            key={report.id}
                            className="border-b border-gray-200"
                          >
                            <td className="px-6 py-4 text-sm text-gray-900">
                              {report.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                              {report.department}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                              {report.designation}
                            </td>
                            {editingSection === "team" && (
                              <td className="px-6 py-4 text-right">
                                <button
                                  onClick={() => {
                                    const newReports = [...tempDirectReports];
                                    newReports.splice(index, 1);
                                    setTempDirectReports(newReports);
                                  }}
                                  className="p-1 text-red-600 hover:text-red-800 transition-colors"
                                >
                                  <X size={16} />
                                </button>
                              </td>
                            )}
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div
                  id="add-report-dialog"
                  className="hidden mt-4 p-4 border border-gray-200 rounded-md bg-gray-50"
                >
                  <h4 className="font-medium mb-3">Add New Direct Report</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        value={newDirectReport.name}
                        onChange={(e) =>
                          setNewDirectReport({
                            ...newDirectReport,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Department
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        value={newDirectReport.department}
                        onChange={(e) =>
                          setNewDirectReport({
                            ...newDirectReport,
                            department: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Designation
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        value={newDirectReport.designation}
                        onChange={(e) =>
                          setNewDirectReport({
                            ...newDirectReport,
                            designation: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => {
                        if (newDirectReport.name.trim() === "") return;

                        const newId =
                          Math.max(...tempDirectReports.map((r) => r.id), 0) +
                          1;
                        setTempDirectReports([
                          ...tempDirectReports,
                          {
                            id: newId,
                            name: newDirectReport.name,
                            department: newDirectReport.department,
                            designation: newDirectReport.designation,
                          },
                        ]);

                        setNewDirectReport({
                          name: "",
                          department: "",
                          designation: "",
                        });

                        const dialog =
                          document.getElementById("add-report-dialog");
                        if (dialog) dialog.style.display = "none";
                      }}
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <Save size={16} />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={() => {
                        setNewDirectReport({
                          name: "",
                          department: "",
                          designation: "",
                        });
                        const dialog =
                          document.getElementById("add-report-dialog");
                        if (dialog) dialog.style.display = "none";
                      }}
                      className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <X size={16} />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
