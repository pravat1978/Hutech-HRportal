import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Plus, Edit, Trash2, Save, X, Check } from "lucide-react";

const Department = () => {
  const [departments, setDepartments] = useState([
    {
      id: 1,
      name: "CRM (Salesforce, Mendix)",
      employees: 0,
      manager: "Amlana Aparajita",
      subDepartments: "",
    },
    {
      id: 2,
      name: "ERP",
      employees: 0,
      manager: "Rajeev Iyer",
      subDepartments: "",
    },
    {
      id: 3,
      name: "Finance",
      employees: 1,
      manager: "Swayamprava Nanda",
      subDepartments: "",
    },
    {
      id: 4,
      name: "Human Resource",
      employees: 1,
      manager: "Anisha Thomas",
      subDepartments: "",
    },
    {
      id: 5,
      name: "Product & Innovation",
      employees: 0,
      manager: "",
      subDepartments: "",
    },
    {
      id: 6,
      name: "Staffing Service",
      employees: 52,
      manager: "Abhinandan Baloji",
      subDepartments: "",
    },
    {
      id: 7,
      name: "Track and Trace (IoT)",
      employees: 0,
      manager: "Rajeev Iyer",
      subDepartments: "",
    },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedDepartment, setEditedDepartment] = useState({
    id: 0,
    name: "",
    employees: 0,
    manager: "",
    subDepartments: "",
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [newDepartment, setNewDepartment] = useState({
    name: "",
    manager: "",
    subDepartments: "",
  });

  const handleEdit = (dept) => {
    setEditingId(dept.id);
    setEditedDepartment({
      id: dept.id,
      name: dept.name,
      employees: dept.employees,
      manager: dept.manager,
      subDepartments: dept.subDepartments,
    });
  };

  const handleSave = () => {
    // Collect all sub departments from the edit form
    const container = document.getElementById("editSubDepartmentsContainer");
    let allSubDepartments = "";

    if (container) {
      const inputs = container.querySelectorAll("input");
      const values = Array.from(inputs)
        .map((input) => input.value.trim())
        .filter((value) => value !== "");

      allSubDepartments = values.join(", ");
    }

    const updatedDepartment = {
      ...editedDepartment,
      subDepartments: allSubDepartments,
    };

    setDepartments(
      departments.map((dept) =>
        dept.id === editingId ? updatedDepartment : dept,
      ),
    );
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDepartment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNewDepartmentChange = (e) => {
    const { name, value } = e.target;
    setNewDepartment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddDepartment = () => {
    // Collect all sub departments from the form
    const container = document.getElementById("subDepartmentsContainer");
    let allSubDepartments = "";

    if (container) {
      const inputs = container.querySelectorAll("input");
      const values = Array.from(inputs)
        .map((input) => input.value.trim())
        .filter((value) => value !== "");

      allSubDepartments = values.join(", ");
    }

    const newId = Math.max(...departments.map((dept) => dept.id)) + 1;
    setDepartments([
      ...departments,
      {
        id: newId,
        name: newDepartment.name,
        employees: 0,
        manager: newDepartment.manager,
        subDepartments: allSubDepartments,
      },
    ]);
    setNewDepartment({
      name: "",
      manager: "",
      subDepartments: "",
    });
    setShowAddForm(false);
  };

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold uppercase">DEPARTMENTS</h1>
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors"
          >
            <Plus size={16} />
            <span>Add Department</span>
          </button>
        </div>

        {showAddForm && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8 p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add New Department</h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Department Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={newDepartment.name}
                  onChange={handleNewDepartmentChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Department Head
                </label>
                <input
                  type="text"
                  name="manager"
                  value={newDepartment.manager}
                  onChange={handleNewDepartmentChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sub Departments
                </label>
                <div id="subDepartmentsContainer">
                  <div className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      name="subDepartments"
                      value={newDepartment.subDepartments}
                      onChange={handleNewDepartmentChange}
                      className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      type="button"
                      className="p-1 text-red-600 hover:text-red-800 transition-colors"
                      onClick={(e) => {
                        // Only delete if there's more than one field
                        const container = document.getElementById(
                          "subDepartmentsContainer",
                        );
                        if (container && container.children.length > 1) {
                          e.currentTarget.parentElement?.remove();
                        }
                      }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 mt-1"
                  onClick={() => {
                    const container = document.getElementById(
                      "subDepartmentsContainer",
                    );
                    if (container) {
                      const newField = document.createElement("div");
                      newField.className = "flex items-center space-x-2 mb-2";
                      newField.innerHTML = `
                        <input
                          type="text"
                          class="flex-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button
                          type="button"
                          class="p-1 text-red-600 hover:text-red-800 transition-colors"
                          onclick="this.parentElement.remove();"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                        </button>
                      `;
                      container.appendChild(newField);
                    }
                  }}
                >
                  <Plus size={16} />
                  <span>Add Another</span>
                </button>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleAddDepartment}
                  className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors"
                >
                  <Save size={16} />
                  <span>Save</span>
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <X size={16} />
                  <span>Cancel</span>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sub Departments
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department Head
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employees
                    <br />
                    <span className="text-xs font-normal normal-case">
                      (Auto calculated)
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {departments.map((dept) => (
                  <tr key={dept.id} className="hover:bg-gray-50">
                    {editingId === dept.id ? (
                      // Editing mode
                      <>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="text"
                            name="name"
                            value={editedDepartment.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div id="editSubDepartmentsContainer">
                            <div className="flex items-center space-x-2 mb-2">
                              <input
                                type="text"
                                name="subDepartments"
                                value={editedDepartment.subDepartments}
                                onChange={handleChange}
                                className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                              />
                              <button
                                type="button"
                                className="p-1 text-red-600 hover:text-red-800 transition-colors"
                                onClick={(e) => {
                                  // Only delete if there's more than one field
                                  const container = document.getElementById(
                                    "editSubDepartmentsContainer",
                                  );
                                  if (
                                    container &&
                                    container.children.length > 1
                                  ) {
                                    e.currentTarget.parentElement?.remove();
                                  }
                                }}
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 mt-1"
                            onClick={() => {
                              const container = document.getElementById(
                                "editSubDepartmentsContainer",
                              );
                              if (container) {
                                const newField = document.createElement("div");
                                newField.className =
                                  "flex items-center space-x-2 mb-2";
                                newField.innerHTML = `
                                  <input
                                    type="text"
                                    class="flex-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                  />
                                  <button
                                    type="button"
                                    class="p-1 text-red-600 hover:text-red-800 transition-colors"
                                    onclick="this.parentElement.remove();"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                                  </button>
                                `;
                                container.appendChild(newField);
                              }
                            }}
                          >
                            <Plus size={16} />
                            <span>Add Another</span>
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="text"
                            name="manager"
                            value={editedDepartment.manager}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="flex justify-end space-x-2">
                            <button
                              onClick={handleSave}
                              className="p-1 text-green-600 hover:text-green-800 transition-colors"
                            >
                              <Check size={16} />
                            </button>
                            <button
                              onClick={handleCancel}
                              className="p-1 text-red-600 hover:text-red-800 transition-colors"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        </td>
                      </>
                    ) : (
                      // Display mode
                      <>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {dept.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {dept.subDepartments || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {dept.manager || "-"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                          <div className="flex justify-end items-center gap-4">
                            <span className="font-medium">
                              {dept.employees}
                            </span>
                            <button
                              onClick={() => handleEdit(dept)}
                              className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              <Edit size={16} />
                            </button>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
                <tr>
                  <td colSpan={4} className="px-6 py-4">
                    <button
                      onClick={() => setShowAddForm(true)}
                      className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                    >
                      <Plus size={16} />
                      <span>Add</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Department;
