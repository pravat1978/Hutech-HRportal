import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Plus, Edit, Trash2, Save, X } from "lucide-react";
import { Link } from "react-router-dom";

const Grades = () => {
  const [grades, setGrades] = useState([
    {
      id: 1,
      title: "L1",
      employees: 3,
    },
    {
      id: 2,
      title: "L2",
      employees: 0,
    },
    {
      id: 3,
      title: "L3",
      employees: 0,
    },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleEdit = (id: number, title: string) => {
    setEditingId(id);
    setEditedTitle(title);
  };

  const handleSave = () => {
    setGrades(
      grades.map((grade) =>
        grade.id === editingId ? { ...grade, title: editedTitle } : grade,
      ),
    );
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleDelete = (id: number) => {
    setGrades(grades.filter((grade) => grade.id !== id));
  };

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex items-center mb-6 bg-blue-500 text-white">
          <Link
            to="/company-profile/designations"
            className="py-3 px-6 bg-white text-black"
          >
            Designations
          </Link>
          <div className="py-3 px-6 font-semibold">Grades</div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-bold uppercase">GRADES</h2>
            <div className="flex items-center">
              <span className="mr-2">On</span>
              <button
                onClick={handleToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isToggleOn ? "bg-blue-500" : "bg-gray-300"}`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${isToggleOn ? "translate-x-6" : "translate-x-1"}`}
                />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Grade
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Employees
                    <div className="text-xs font-normal">(Auto calculated)</div>
                  </th>
                  <th className="px-6 py-3 w-24"></th>
                </tr>
              </thead>
              <tbody>
                {grades.map((grade) => (
                  <tr
                    key={grade.id}
                    className={`border-t border-gray-100 ${editingId === grade.id ? "bg-blue-50" : "hover:bg-gray-50"}`}
                  >
                    <td className="px-6 py-4">
                      {editingId === grade.id ? (
                        <input
                          type="text"
                          value={editedTitle}
                          onChange={(e) => setEditedTitle(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      ) : (
                        <span className="text-sm">{grade.title}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm">{grade.employees}</td>
                    <td className="px-6 py-4 text-right">
                      {editingId === grade.id ? (
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
                            onClick={() => handleEdit(grade.id, grade.title)}
                            className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(grade.id)}
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
            <button
              onClick={() => {
                const newId = Math.max(...grades.map((g) => g.id), 0) + 1;
                setGrades([
                  ...grades,
                  {
                    id: newId,
                    title: `L${newId}`,
                    employees: 0,
                  },
                ]);
                // Set this new grade to edit mode immediately
                setEditingId(newId);
                setEditedTitle(`L${newId}`);
              }}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Plus size={16} />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Grades;
