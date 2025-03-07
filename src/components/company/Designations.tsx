import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Plus, Edit, Trash2, Save, X } from "lucide-react";

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

  const handleEdit = (id: number, title: string) => {
    setEditingId(id);
    setEditedTitle(title);
  };

  const handleSave = () => {
    setDesignations(
      designations.map((designation) =>
        designation.id === editingId
          ? { ...designation, title: editedTitle }
          : designation,
      ),
    );
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleDelete = (id: number) => {
    setDesignations(
      designations.filter((designation) => designation.id !== id),
    );
  };

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex items-center mb-6 bg-blue-500 text-white">
          <div className="py-3 px-6 font-semibold">Designations</div>
          <div className="py-3 px-6 bg-white text-black">Grades</div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold uppercase">DESIGNATIONS</h2>
          </div>

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
                          >
                            <Save size={16} />
                          </button>
                          <button
                            onClick={handleCancel}
                            className="p-1 text-red-600 hover:text-red-800 transition-colors"
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
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(designation.id)}
                            className="p-1 text-red-600 hover:text-red-800 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-gray-200">
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
              <Plus size={16} />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Designations;
