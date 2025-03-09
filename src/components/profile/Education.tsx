import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Edit, Save, X, Plus, Trash2 } from "lucide-react";

const Education = () => {
  const [editingSection, setEditingSection] = useState("");
  const [education, setEducation] = useState([]);
  const [tempEducation, setTempEducation] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEducation, setNewEducation] = useState({
    degree: "",
    institution: "",
    collegeName: "",
    universityName: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    grade: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEducation({
      ...newEducation,
      [name]: value,
    });
  };

  const handleAddEducation = () => {
    if (!newEducation.degree || !newEducation.institution) return;

    const newId =
      education.length > 0
        ? Math.max(...education.map((item) => item.id)) + 1
        : 1;
    const educationEntry = {
      id: newId,
      ...newEducation,
    };

    setEducation([...education, educationEntry]);
    setTempEducation([...education, educationEntry]);
    setNewEducation({
      degree: "",
      institution: "",
      collegeName: "",
      universityName: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      grade: "",
      description: "",
    });
    setShowAddForm(false);
  };

  const handleDeleteEducation = (id) => {
    setTempEducation(tempEducation.filter((item) => item.id !== id));
  };

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-semibold">EDUCATIONAL INFO</h2>
            {editingSection === "education" ? (
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setEducation(tempEducation);
                    setEditingSection("");
                  }}
                  className="p-1 text-green-600 hover:text-green-800 transition-colors flex items-center gap-1"
                >
                  <Save size={18} />
                  <span className="text-sm">Save</span>
                </button>
                <button
                  onClick={() => {
                    setTempEducation([...education]);
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
                  setTempEducation([...education]);
                  setEditingSection("education");
                }}
                className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Edit size={18} />
              </button>
            )}
          </div>

          <div className="p-6">
            {tempEducation.length > 0 ? (
              <div className="space-y-6">
                {tempEducation.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
                  >
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{item.degree}</h3>
                        <p className="text-gray-600">{item.institution}</p>
                        {item.fieldOfStudy && (
                          <p className="text-gray-500">{item.fieldOfStudy}</p>
                        )}
                        <p className="text-gray-500">
                          {item.startDate} - {item.endDate || "Present"}
                        </p>
                        {item.grade && (
                          <p className="text-gray-500">Grade: {item.grade}</p>
                        )}
                        {item.description && (
                          <p className="text-gray-500 mt-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                      {editingSection === "education" && (
                        <button
                          onClick={() => handleDeleteEducation(item.id)}
                          className="p-1 text-red-600 hover:text-red-800 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No educational information available.
              </div>
            )}

            {(editingSection === "education" || showAddForm) && (
              <div className="mt-6 p-4 border border-gray-200 rounded-md bg-white">
                <h3 className="text-lg font-semibold mb-6">EDUCATIONAL INFO</h3>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Qualification Type
                  </label>
                  <div className="relative">
                    <select
                      name="degree"
                      value={newEducation.degree}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 appearance-none"
                    >
                      <option value="">Select Qualification Type</option>
                      <option value="Bachelor's Degree">
                        Bachelor's Degree
                      </option>
                      <option value="Master's Degree">Master's Degree</option>
                      <option value="Doctorate">Doctorate</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Certificate">Certificate</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Course Name
                    </label>
                    <input
                      type="text"
                      name="fieldOfStudy"
                      value={newEducation.fieldOfStudy}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Course Type
                    </label>
                    <div className="relative">
                      <select
                        name="grade"
                        value={newEducation.grade}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 appearance-none"
                      >
                        <option value="">Select Course Type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Online">Online</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stream
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={newEducation.description}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Course Start Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="startDate"
                        value={newEducation.startDate}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-blue-500">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Course End Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="endDate"
                        value={newEducation.endDate}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-blue-500">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      College Name
                    </label>
                    <input
                      type="text"
                      name="collegeName"
                      value={newEducation.collegeName}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    University Name
                  </label>
                  <input
                    type="text"
                    name="universityName"
                    value={newEducation.universityName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex justify-end space-x-3 mt-8">
                  <button
                    onClick={() => {
                      setShowAddForm(false);
                      setNewEducation({
                        degree: "",
                        institution: "",
                        collegeName: "",
                        universityName: "",
                        fieldOfStudy: "",
                        startDate: "",
                        endDate: "",
                        grade: "",
                        description: "",
                      });
                    }}
                    className="flex items-center gap-2 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <X size={16} />
                    <span>CANCEL</span>
                  </button>
                  <button
                    onClick={handleAddEducation}
                    className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>SAVE</span>
                  </button>
                </div>
              </div>
            )}

            {!showAddForm && editingSection !== "education" && (
              <div className="mt-6">
                <button
                  onClick={() => setShowAddForm(true)}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Plus size={20} className="text-blue-600" />
                  <span>Add</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
