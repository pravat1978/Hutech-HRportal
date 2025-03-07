import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Plus, Edit, Trash2, Save, X } from "lucide-react";
import { Link } from "react-router-dom";

const Designations = () => {
  const [designations, setDesignations] = useState([
    {
      id: 1,
      title: "Android App Developer",
      employees: 1,
    },
    {
      id: 2,
      title: "Associate L1 Business Analyst",
      employees: 1,
    },
    {
      id: 3,
      title: "Associate Quality Engineer",
      employees: 2,
    },
    {
      id: 4,
      title: "Associate Quality Engineer L1",
      employees: 1,
    },
    {
      id: 5,
      title: "Chief Executive Officer",
      employees: 1,
    },
    {
      id: 6,
      title: "Chief Technology Officer",
      employees: 1,
    },
    {
      id: 7,
      title: "Senior Software Engineer",
      employees: 3,
    },
    {
      id: 8,
      title: "Software Engineer",
      employees: 5,
    },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [newDesignation, setNewDesignation] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const handleEdit = (id: number, title: string) => {
    setEditingId(id);
    setEditedTitle(title);
  };

  const handleSave = () => {
    if (editedTitle.trim() === "") return;

    setDesignations(
      designations.map((designation) =>
        designation.id === editingId
          ? { ...designation, title: editedTitle }
          : designation,
      ),
    );
    setEditingId(null);
    setEditedTitle("");
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedTitle("");
  };

  const handleDelete = (id: number) => {
    setDesignations(
      designations.filter((designation) => designation.id !== id),
    );
  };

  const handleAddDesignation = () => {
    if (newDesignation.trim() === "") return;

    const newId = Math.max(...designations.map((d) => d.id), 0) + 1;
    setDesignations([
      ...designations,
      {
        id: newId,
        title: newDesignation,
        employees: 0,
      },
    ]);
    setNewDesignation("");
    setShowAddForm(false);
  };

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex items-center mb-6 bg-blue-500 text-white">
          <div className="py-3 px-6 font-semibold">Designations</div>
          <Link
            to="/company-profile/grades"
            className="py-3 px-6 bg-white text-black"
          >
            Grades
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-bold uppercase">DESIGNATIONS</h2>
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors"
            >
              <Plus size={16} />
              <span>Add Designation</span>
            </button>
          </div>

          {showAddForm && (
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={newDesignation}
                  onChange={(e) => setNewDesignation(e.target.value)}
                  placeholder="Enter designation title"
                  className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  onClick={handleAddDesignation}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  <Save size={16} className="inline mr-1" />
                  Save
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <X size={16} className="inline mr-1" />
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Designation
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Employees
                    <div className="text-xs font-normal">(Auto calculated)</div>
                  </th>
                  <th className="px-6 py-3 w-24"></th>
                </tr>
              </thead>
              <tbody>
                {designations.map((designation) => (
                  <tr
                    key={designation.id}
                    className={`border-t border-gray-100 ${editingId === designation.id ? "bg-blue-50" : "hover:bg-gray-50"}`}
                  >
                    <td className="px-6 py-4">
                      {editingId === designation.id ? (
                        <input
                          type="text"
                          value={editedTitle}
                          onChange={(e) => setEditedTitle(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      ) : (
                        <span className="text-sm">{designation.title}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {designation.employees}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {editingId === designation.id ? (
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={handleSave}
                            className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                            title="Save"
                          >
                            <Save size={16} />
                          </button>
                          <button
                            onClick={handleCancel}
                            className="p-1 text-red-600 hover:text-red-800 transition-colors"
                            title="Cancel"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ) : (
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() =>
                              handleEdit(designation.id, designation.title)
                            }
                            className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                            title="Edit"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(designation.id)}
                            className="p-1 text-red-600 hover:text-red-800 transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
                {designations.length === 0 && (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      No designations found. Click the "Add Designation" button
                      to create one.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {!showAddForm && (
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={() => setShowAddForm(true)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Plus size={16} />
                <span>Add</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Designations;
