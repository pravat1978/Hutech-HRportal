import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Edit, Save, X, Plus, Trash2 } from "lucide-react";

const StatutoryInfo = () => {
  const [activeTab, setActiveTab] = useState("pf");
  const [showTaxSection, setShowTaxSection] = useState(false);
  const [showCompanyOfficials, setShowCompanyOfficials] = useState(false);
  const [showBankAccounts, setShowBankAccounts] = useState(true);
  const [showAddBankAccountForm, setShowAddBankAccountForm] = useState(false);
  const [editingBankAccount, setEditingBankAccount] = useState(null);
  const [companyOfficialsTab, setCompanyOfficialsTab] = useState("directors");
  const [editMode, setEditMode] = useState(false);
  const [pfDetails, setPfDetails] = useState({
    pfNumber: "MHBAN00000000",
    pfRegistrationDate: "01/01/2023",
    pfRegistrationCertificate: "PF_Certificate.pdf",
    pfSignatory: "Pravat Ranjan Jena",
    pfSignatoryDesignation: "Chief Executive Officer",
    pfSignatoryEmail: "pravat@humantech.co.in",
    pfSignatoryPhone: "+91 9876543210",
  });

  const [esiDetails, setEsiDetails] = useState({
    esiNumber: "31000000000000000",
    esiRegistrationDate: "01/01/2023",
    esiRegistrationCertificate: "ESI_Certificate.pdf",
    esiSignatory: "Pravat Ranjan Jena",
    esiSignatoryDesignation: "Chief Executive Officer",
    esiSignatoryEmail: "pravat@humantech.co.in",
    esiSignatoryPhone: "+91 9876543210",
  });

  const [ptDetails, setPtDetails] = useState({
    ptNumber: "27000000000P",
    ptRegistrationDate: "01/01/2023",
    ptRegistrationCertificate: "PT_Certificate.pdf",
    ptSignatory: "Pravat Ranjan Jena",
    ptSignatoryDesignation: "Chief Executive Officer",
    ptSignatoryEmail: "pravat@humantech.co.in",
    ptSignatoryPhone: "+91 9876543210",
  });

  const [lwfDetails, setLwfDetails] = useState({
    lwfNumber: "MH00000000",
    lwfRegistrationDate: "01/01/2023",
    lwfRegistrationCertificate: "LWF_Certificate.pdf",
    lwfSignatory: "Pravat Ranjan Jena",
    lwfSignatoryDesignation: "Chief Executive Officer",
    lwfSignatoryEmail: "pravat@humantech.co.in",
    lwfSignatoryPhone: "+91 9876543210",
  });

  const handleSave = () => {
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "pf":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  PF Number
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={pfDetails.pfNumber}
                  onChange={(e) =>
                    setPfDetails({ ...pfDetails, pfNumber: e.target.value })
                  }
                  readOnly={!editMode}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Registration Date
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={pfDetails.pfRegistrationDate}
                  onChange={(e) =>
                    setPfDetails({
                      ...pfDetails,
                      pfRegistrationDate: e.target.value,
                    })
                  }
                  readOnly={!editMode}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Registration Certificate
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={pfDetails.pfRegistrationCertificate}
                  onChange={(e) =>
                    setPfDetails({
                      ...pfDetails,
                      pfRegistrationCertificate: e.target.value,
                    })
                  }
                  readOnly={!editMode}
                />
                {editMode && (
                  <button className="ml-2 bg-gray-200 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-300 transition-colors">
                    Browse
                  </button>
                )}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-md font-semibold mb-3">Signatory Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={pfDetails.pfSignatory}
                    onChange={(e) =>
                      setPfDetails({
                        ...pfDetails,
                        pfSignatory: e.target.value,
                      })
                    }
                    readOnly={!editMode}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Designation
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={pfDetails.pfSignatoryDesignation}
                    onChange={(e) =>
                      setPfDetails({
                        ...pfDetails,
                        pfSignatoryDesignation: e.target.value,
                      })
                    }
                    readOnly={!editMode}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={pfDetails.pfSignatoryEmail}
                    onChange={(e) =>
                      setPfDetails({
                        ...pfDetails,
                        pfSignatoryEmail: e.target.value,
                      })
                    }
                    readOnly={!editMode}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={pfDetails.pfSignatoryPhone}
                    onChange={(e) =>
                      setPfDetails({
                        ...pfDetails,
                        pfSignatoryPhone: e.target.value,
                      })
                    }
                    readOnly={!editMode}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case "esi":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ESI Number
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={esiDetails.esiNumber}
                  onChange={(e) =>
                    setEsiDetails({ ...esiDetails, esiNumber: e.target.value })
                  }
                  readOnly={!editMode}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Registration Date
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={esiDetails.esiRegistrationDate}
                  onChange={(e) =>
                    setEsiDetails({
                      ...esiDetails,
                      esiRegistrationDate: e.target.value,
                    })
                  }
                  readOnly={!editMode}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Registration Certificate
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={esiDetails.esiRegistrationCertificate}
                  onChange={(e) =>
                    setEsiDetails({
                      ...esiDetails,
                      esiRegistrationCertificate: e.target.value,
                    })
                  }
                  readOnly={!editMode}
                />
                {editMode && (
                  <button className="ml-2 bg-gray-200 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-300 transition-colors">
                    Browse
                  </button>
                )}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-md font-semibold mb-3">Signatory Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={esiDetails.esiSignatory}
                    onChange={(e) =>
                      setEsiDetails({
                        ...esiDetails,
                        esiSignatory: e.target.value,
                      })
                    }
                    readOnly={!editMode}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Designation
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={esiDetails.esiSignatoryDesignation}
                    onChange={(e) =>
                      setEsiDetails({
                        ...esiDetails,
                        esiSignatoryDesignation: e.target.value,
                      })
                    }
                    readOnly={!editMode}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={esiDetails.esiSignatoryEmail}
                    onChange={(e) =>
                      setEsiDetails({
                        ...esiDetails,
                        esiSignatoryEmail: e.target.value,
                      })
                    }
                    readOnly={!editMode}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={esiDetails.esiSignatoryPhone}
                    onChange={(e) =>
                      setEsiDetails({
                        ...esiDetails,
                        esiSignatoryPhone: e.target.value,
                      })
                    }
                    readOnly={!editMode}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case "pt":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  PT Number
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={ptDetails.ptNumber}
                  onChange={(e) =>
                    setPtDetails({ ...ptDetails, ptNumber: e.target.value })
                  }
                  readOnly={!editMode}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Registration Date
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={ptDetails.ptRegistrationDate}
                  onChange={(e) =>
                    setPtDetails({
                      ...ptDetails,
                      ptRegistrationDate: e.target.value,
                    })
                  }
                  readOnly={!editMode}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Registration Certificate
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={ptDetails.ptRegistrationCertificate}
                  onChange={(e) =>
                    setPtDetails({
                      ...ptDetails,
                      ptRegistrationCertificate: e.target.value,
                    })
                  }
                  readOnly={!editMode}
                />
                {editMode && (
                  <button className="ml-2 bg-gray-200 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-300 transition-colors">
                    Browse
                  </button>
                )}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-md font-semibold mb-3">Signatory Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={ptDetails.ptSignatory}
                    onChange={(e) =>
                      setPtDetails({
                        ...ptDetails,
                        ptSignatory: e.target.value,
                      })
                    }
                    readOnly={!editMode}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Designation
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={ptDetails.ptSignatoryDesignation}
                    onChange={(e) =>
                      setPtDetails({
                        ...ptDetails,
                        ptSignatoryDesignation: e.target.value,
                      })
                    }
                    readOnly={!editMode}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={ptDetails.ptSignatoryEmail}
                    onChange={(e) =>
                      setPtDetails({
                        ...ptDetails,
                        ptSignatoryEmail: e.target.value,
                      })
                    }
                    readOnly={!editMode}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={ptDetails.ptSignatoryPhone}
                    onChange={(e) =>
                      setPtDetails({
                        ...ptDetails,
                        ptSignatoryPhone: e.target.value,
                      })
                    }
                    readOnly={!editMode}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case "lwf":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  LWF Number
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={lwfDetails.lwfNumber}
                  onChange={(e) =>
                    setLwfDetails({ ...lwfDetails, lwfNumber: e.target.value })
                  }
                  readOnly={!editMode}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Registration Date
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={lwfDetails.lwfRegistrationDate}
                  onChange={(e) =>
                    setLwfDetails({
                      ...lwfDetails,
                      lwfRegistrationDate: e.target.value,
                    })
                  }
                  readOnly={!editMode}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Registration Certificate
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={lwfDetails.lwfRegistrationCertificate}
                  onChange={(e) =>
                    setLwfDetails({
                      ...lwfDetails,
                      lwfRegistrationCertificate: e.target.value,
                    })
                  }
                  readOnly={!editMode}
                />
                {editMode && (
                  <button className="ml-2 bg-gray-200 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-300 transition-colors">
                    Browse
                  </button>
                )}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-md font-semibold mb-3">Signatory Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={lwfDetails.lwfSignatory}
                    onChange={(e) =>
                      setLwfDetails({
                        ...lwfDetails,
                        lwfSignatory: e.target.value,
                      })
                    }
                    readOnly={!editMode}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Designation
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={lwfDetails.lwfSignatoryDesignation}
                    onChange={(e) =>
                      setLwfDetails({
                        ...lwfDetails,
                        lwfSignatoryDesignation: e.target.value,
                      })
                    }
                    readOnly={!editMode}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={lwfDetails.lwfSignatoryEmail}
                    onChange={(e) =>
                      setLwfDetails({
                        ...lwfDetails,
                        lwfSignatoryEmail: e.target.value,
                      })
                    }
                    readOnly={!editMode}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={lwfDetails.lwfSignatoryPhone}
                    onChange={(e) =>
                      setLwfDetails({
                        ...lwfDetails,
                        lwfSignatoryPhone: e.target.value,
                      })
                    }
                    readOnly={!editMode}
                  />
                </div>
              </div>
            </div>
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
          <h1 className="text-2xl font-bold">Statutory Information</h1>
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
          <div className="flex border-b border-gray-200">
            <button
              className={`py-3 px-6 font-medium ${activeTab === "pf" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setActiveTab("pf")}
            >
              PF
            </button>
            <button
              className={`py-3 px-6 font-medium ${activeTab === "esi" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setActiveTab("esi")}
            >
              ESI
            </button>
            <button
              className={`py-3 px-6 font-medium ${activeTab === "pt" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setActiveTab("pt")}
            >
              PT
            </button>
            <button
              className={`py-3 px-6 font-medium ${activeTab === "lwf" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setActiveTab("lwf")}
            >
              LWF
            </button>
            <button
              className={`py-3 px-6 font-medium ${showTaxSection ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setShowTaxSection(!showTaxSection)}
            >
              Tax Section
            </button>
            <button
              className={`py-3 px-6 font-medium ${showCompanyOfficials ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setShowCompanyOfficials(!showCompanyOfficials)}
            >
              Company Officials
            </button>
            <button
              className={`py-3 px-6 font-medium ${showBankAccounts ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setShowBankAccounts(!showBankAccounts)}
            >
              Bank Accounts
            </button>
          </div>

          <div className="p-6">{renderTabContent()}</div>
        </div>

        {showTaxSection && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold uppercase">TAX SECTION</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-md font-semibold">TDS</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      TAN Number
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value="BLRA12345A"
                      readOnly={!editMode}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Deductor Type
                    </label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      disabled={!editMode}
                    >
                      <option value="company">Company</option>
                      <option value="firm">Firm</option>
                      <option value="individual">Individual</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Deductor Category
                    </label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      disabled={!editMode}
                    >
                      <option value="company">Company</option>
                      <option value="government">Government</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-md font-semibold">GST</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      GST Number
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value="29ABCDE1234F1Z5"
                      readOnly={!editMode}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Registration Date
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value="01/07/2017"
                      readOnly={!editMode}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Registration Certificate
                    </label>
                    <div className="flex items-center">
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        value="GST_Certificate.pdf"
                        readOnly={!editMode}
                      />
                      {editMode && (
                        <button className="ml-2 bg-gray-200 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-300 transition-colors">
                          Browse
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-md font-semibold">Income Tax</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      PAN Number
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value="ABCDE1234F"
                      readOnly={!editMode}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Assessment Year
                    </label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      disabled={!editMode}
                    >
                      <option value="2023-24">2023-24</option>
                      <option value="2022-23">2022-23</option>
                      <option value="2021-22">2021-22</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Filing Status
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    disabled={!editMode}
                  >
                    <option value="filed">Filed</option>
                    <option value="pending">Pending</option>
                    <option value="extension">Extension Requested</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {showCompanyOfficials && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
            <div className="flex border-b border-gray-200">
              <button
                className={`py-3 px-6 font-medium ${companyOfficialsTab === "directors" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
                onClick={() => setCompanyOfficialsTab("directors")}
              >
                Directors
              </button>
              <button
                className={`py-3 px-6 font-medium ${companyOfficialsTab === "auditors" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
                onClick={() => setCompanyOfficialsTab("auditors")}
              >
                Auditors
              </button>
              <button
                className={`py-3 px-6 font-medium ${companyOfficialsTab === "secretary" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
                onClick={() => setCompanyOfficialsTab("secretary")}
              >
                Company Secretary
              </button>
            </div>

            <div className="p-6">
              {companyOfficialsTab === "directors" && (
                <div>
                  <h2 className="text-lg font-semibold uppercase mb-4">
                    DIRECTORS
                  </h2>
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
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            {editMode ? (
                              <input
                                type="text"
                                defaultValue="Pravat Ranjan Jena"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                              />
                            ) : (
                              <span className="text-sm">
                                Pravat Ranjan Jena
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            {editMode ? (
                              <input
                                type="email"
                                defaultValue="pravat@humantech.co.in"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                              />
                            ) : (
                              <span className="text-sm">
                                pravat@humantech.co.in
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            {editMode ? (
                              <input
                                type="text"
                                defaultValue="23232324"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                              />
                            ) : (
                              <span className="text-sm">23232324</span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            {editMode ? (
                              <input
                                type="text"
                                defaultValue="8765432189"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                              />
                            ) : (
                              <span className="text-sm">8765432189</span>
                            )}
                          </td>
                          {editMode && (
                            <td className="px-6 py-4 text-right">
                              <button className="p-1 text-red-600 hover:text-red-800 transition-colors">
                                <Trash2 size={16} />
                              </button>
                            </td>
                          )}
                        </tr>
                      </tbody>
                    </table>
                  </div>
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

              {companyOfficialsTab === "auditors" && (
                <div>
                  <h2 className="text-lg font-semibold uppercase mb-4">
                    AUDITORS
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
              )}

              {companyOfficialsTab === "secretary" && (
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
              )}
            </div>
          </div>
        )}

        {showBankAccounts && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold uppercase">
                BANK ACCOUNT INFO
              </h2>
            </div>
            <div className="p-6">
              {showAddBankAccountForm || editingBankAccount ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bank Name
                      </label>
                      <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Select Bank</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="axis">Axis Bank</option>
                        <option value="kotak">Kotak Mahindra Bank</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Account Number
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="50100123456789"
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
                        placeholder="HDFC0001234"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Branch
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Whitefield, Bangalore"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Account Type
                      </label>
                      <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Select Account Type</option>
                        <option value="current">Current Account</option>
                        <option value="savings">Savings Account</option>
                        <option value="od">Overdraft Account</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Primary Account
                      </label>
                      <div className="flex items-center mt-2">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Set as primary account
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Account Purpose
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Select Purpose</option>
                      <option value="operations">Operations</option>
                      <option value="payroll">Payroll</option>
                      <option value="taxes">Taxes</option>
                      <option value="investments">Investments</option>
                    </select>
                  </div>

                  <div className="flex space-x-3 mt-4">
                    <button
                      onClick={() => {
                        setShowAddBankAccountForm(false);
                        setEditingBankAccount(null);
                        // Here you would normally save the account data
                      }}
                      className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                    >
                      <Save size={16} />
                      <span>
                        {editingBankAccount ? "Update Account" : "Save Account"}
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        setShowAddBankAccountForm(false);
                        setEditingBankAccount(null);
                      }}
                      className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <X size={16} />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Bank Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Account Number
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            IFSC Code
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Branch
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Account Type
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Primary
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Purpose
                          </th>
                          {editMode && <th className="px-6 py-3 w-24"></th>}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            HDFC Bank
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            50100123456789
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            HDFC0001234
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Whitefield, Bangalore
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Current
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Yes
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Operations
                          </td>
                          {editMode && (
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex justify-end space-x-2">
                                <button
                                  onClick={() =>
                                    setEditingBankAccount({
                                      bankName: "HDFC Bank",
                                      accountNumber: "50100123456789",
                                      ifscCode: "HDFC0001234",
                                      branch: "Whitefield, Bangalore",
                                      accountType: "current",
                                      isPrimary: true,
                                      purpose: "operations",
                                    })
                                  }
                                  className="text-blue-600 hover:text-blue-900"
                                >
                                  <Edit size={16} />
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          )}
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ICICI Bank
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            123456789012
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ICIC0001234
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Electronic City, Bangalore
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Current
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                              No
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Payroll
                          </td>
                          {editMode && (
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex justify-end space-x-2">
                                <button
                                  onClick={() =>
                                    setEditingBankAccount({
                                      bankName: "ICICI Bank",
                                      accountNumber: "123456789012",
                                      ifscCode: "ICIC0001234",
                                      branch: "Electronic City, Bangalore",
                                      accountType: "current",
                                      isPrimary: false,
                                      purpose: "payroll",
                                    })
                                  }
                                  className="text-blue-600 hover:text-blue-900"
                                >
                                  <Edit size={16} />
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          )}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {editMode && (
                    <div className="mt-4">
                      <button
                        onClick={() => setShowAddBankAccountForm(true)}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Plus size={16} />
                        <span>Add Bank Account</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default StatutoryInfo;
