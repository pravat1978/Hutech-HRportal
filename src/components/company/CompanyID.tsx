import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Edit, Save, X, Plus, Trash2 } from "lucide-react";

const CompanyID = () => {
  const [activeTab, setActiveTab] = useState("directors");
  const [editMode, setEditMode] = useState(false);
  const [companyInfo, setCompanyInfo] = useState({
    entityType: "Private Limited",
    cin: "U72900KA2022PTC000000",
    dateOfIncorporation: "01/01/2022",
    companyPAN: "ABCDE1234F",
    companyTAN: "BLRA12345A",
    gst: "29ABCDE1234F1Z5",
  });

  const [directors, setDirectors] = useState([
    {
      id: 1,
      name: "Pravat Ranjan Jena",
      email: "pravat@humantech.co.in",
      din: "23232324",
      phone: "8765432189",
    },
  ]);

  const handleSave = () => {
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleAddDirector = () => {
    const newId = Math.max(...directors.map((d) => d.id), 0) + 1;
    setDirectors([
      ...directors,
      {
        id: newId,
        name: "",
        email: "",
        din: "",
        phone: "",
      },
    ]);
  };

  const handleDirectorChange = (id, field, value) => {
    setDirectors(
      directors.map((director) =>
        director.id === id ? { ...director, [field]: value } : director,
      ),
    );
  };

  const handleDeleteDirector = (id) => {
    setDirectors(directors.filter((director) => director.id !== id));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "directors":
        return (
          <div>
            <h2 className="text-lg font-semibold uppercase mb-4">DIRECTORS</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                      Email ID
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                      DIN
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                      Phone Number
                    </th>
                    {editMode && <th className="px-6 py-3 w-24"></th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {directors.map((director) => (
                    <tr key={director.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        {editMode ? (
                          <input
                            type="text"
                            value={director.name}
                            onChange={(e) =>
                              handleDirectorChange(
                                director.id,
                                "name",
                                e.target.value,
                              )
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        ) : (
                          <span className="text-sm">{director.name}</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {editMode ? (
                          <input
                            type="email"
                            value={director.email}
                            onChange={(e) =>
                              handleDirectorChange(
                                director.id,
                                "email",
                                e.target.value,
                              )
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        ) : (
                          <span className="text-sm">{director.email}</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {editMode ? (
                          <input
                            type="text"
                            value={director.din}
                            onChange={(e) =>
                              handleDirectorChange(
                                director.id,
                                "din",
                                e.target.value,
                              )
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        ) : (
                          <span className="text-sm">{director.din}</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {editMode ? (
                          <input
                            type="text"
                            value={director.phone}
                            onChange={(e) =>
                              handleDirectorChange(
                                director.id,
                                "phone",
                                e.target.value,
                              )
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        ) : (
                          <span className="text-sm">{director.phone}</span>
                        )}
                      </td>
                      {editMode && (
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => handleDeleteDirector(director.id)}
                            className="p-1 text-red-600 hover:text-red-800 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {editMode && (
              <div className="mt-4">
                <button
                  onClick={handleAddDirector}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Plus size={16} />
                  <span>Add</span>
                </button>
              </div>
            )}
          </div>
        );
      case "auditors":
        return (
          <div>
            <h2 className="text-lg font-semibold uppercase mb-4">AUDITORS</h2>
            {editMode ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Auditor Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Firm Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Auditing Firm Name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Registration Number
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Auditor Registration Number"
                  />
                </div>
                <div className="flex space-x-3">
                  <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                    <Save size={16} />
                    <span>Save Auditor</span>
                  </button>
                  <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                    <X size={16} />
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-gray-500 mb-4">
                  No auditors information available.
                </p>
                {editMode && (
                  <div className="mt-4">
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                      <Plus size={16} />
                      <span>Add</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      case "secretary":
        return (
          <div>
            <h2 className="text-lg font-semibold uppercase mb-4">
              COMPANY SECRETARY
            </h2>
            {editMode ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Secretary Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Membership Number
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="ICSI Membership Number"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Certificate of Practice Number
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="COP Number"
                  />
                </div>
                <div className="flex space-x-3">
                  <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                    <Save size={16} />
                    <span>Save Secretary</span>
                  </button>
                  <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                    <X size={16} />
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-gray-500 mb-4">
                  No company secretary information available.
                </p>
                {editMode && (
                  <div className="mt-4">
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                      <Plus size={16} />
                      <span>Add</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Company ID</h1>
          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors"
            >
              <Edit size={16} />
              <span>Edit</span>
            </button>
          ) : (
            <div className="flex space-x-3">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                <Save size={16} />
                <span>Save</span>
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
              >
                <X size={16} />
                <span>Cancel</span>
              </button>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="p-6">
            <h2 className="text-lg font-semibold uppercase mb-4">COMPANY ID</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Entity Type
                </label>
                <div className="flex items-center">
                  {editMode ? (
                    <input
                      type="text"
                      value={companyInfo.entityType}
                      onChange={(e) =>
                        setCompanyInfo({
                          ...companyInfo,
                          entityType: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <span className="text-sm">{companyInfo.entityType}</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CIN
                </label>
                <div className="flex items-center">
                  {editMode ? (
                    <input
                      type="text"
                      value={companyInfo.cin}
                      onChange={(e) =>
                        setCompanyInfo({ ...companyInfo, cin: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <span className="text-sm">{companyInfo.cin}</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Incorporation
                </label>
                <div className="flex items-center">
                  {editMode ? (
                    <input
                      type="text"
                      value={companyInfo.dateOfIncorporation}
                      onChange={(e) =>
                        setCompanyInfo({
                          ...companyInfo,
                          dateOfIncorporation: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <span className="text-sm">
                      {companyInfo.dateOfIncorporation}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company PAN
                </label>
                <div className="flex items-center">
                  {editMode ? (
                    <div className="relative w-full">
                      <input
                        type="text"
                        value={companyInfo.companyPAN}
                        onChange={(e) =>
                          setCompanyInfo({
                            ...companyInfo,
                            companyPAN: e.target.value,
                          })
                        }
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                      <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-400 text-white rounded-full p-1">
                        <X size={14} />
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span className="text-sm">{companyInfo.companyPAN}</span>
                      <span className="ml-2 bg-orange-400 text-white rounded-full p-1">
                        <X size={14} />
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company TAN
                </label>
                <div className="flex items-center">
                  {editMode ? (
                    <input
                      type="text"
                      value={companyInfo.companyTAN}
                      onChange={(e) =>
                        setCompanyInfo({
                          ...companyInfo,
                          companyTAN: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <span className="text-sm">{companyInfo.companyTAN}</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  GST
                </label>
                <div className="flex items-center">
                  {editMode ? (
                    <div className="relative w-full">
                      <input
                        type="text"
                        value={companyInfo.gst}
                        onChange={(e) =>
                          setCompanyInfo({
                            ...companyInfo,
                            gst: e.target.value,
                          })
                        }
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                      <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-400 text-white rounded-full p-1">
                        <X size={14} />
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span className="text-sm">{companyInfo.gst}</span>
                      <span className="ml-2 bg-orange-400 text-white rounded-full p-1">
                        <X size={14} />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="flex border-b border-gray-200">
            <button
              className={`py-3 px-6 font-medium ${activeTab === "directors" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setActiveTab("directors")}
            >
              Directors
            </button>
            <button
              className={`py-3 px-6 font-medium ${activeTab === "auditors" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setActiveTab("auditors")}
            >
              Auditors
            </button>
            <button
              className={`py-3 px-6 font-medium ${activeTab === "secretary" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setActiveTab("secretary")}
            >
              Company Secretary
            </button>
          </div>

          <div className="p-6">{renderTabContent()}</div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-semibold uppercase mb-4">
              BANK ACCOUNT INFO
            </h2>
            {editMode ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Bank Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Account Number
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Account Number"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      IFSC Code
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="IFSC Code"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Branch
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Branch Name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Account Type
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select Account Type</option>
                    <option value="current">Current Account</option>
                    <option value="savings">Savings Account</option>
                  </select>
                </div>
                <div className="flex space-x-3">
                  <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                    <Save size={16} />
                    <span>Save Account</span>
                  </button>
                  <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                    <X size={16} />
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-gray-500 mb-4">
                  No bank account information available.
                </p>
                {editMode && (
                  <div className="mt-4">
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                      <Plus size={16} />
                      <span>Add</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CompanyID;
