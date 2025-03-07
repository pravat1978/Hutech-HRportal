import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Edit, Plus, X, Save, XCircle, Check } from "lucide-react";

const Address = () => {
  const [editingRegistered, setEditingRegistered] = useState(false);
  const [editingCorporate, setEditingCorporate] = useState(false);
  const [editingRegisteredTitle, setEditingRegisteredTitle] = useState(false);
  const [editingCorporateTitle, setEditingCorporateTitle] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [registeredTitle, setRegisteredTitle] = useState("REGISTERED OFFICE");
  const [corporateTitle, setCorporateTitle] = useState("CORPORATE OFFICE");
  const [offices, setOffices] = useState([]);

  const registeredOffice = {
    companyName: "Humantech Solutions India Private Limited",
    legalName: "Humantech Solutions India Pvt. Ltd.",
    addressLine1: "Roopena Agrahara, Bomannahalli",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    postalCode: "560068",
  };

  const corporateOffice = {
    companyName: "Humantech Solutions India Private Limited",
    legalName: "Humantech Solutions India Pvt. Ltd.",
    addressLine1:
      "Akshay Techpark, Plot 72 & 73, Rd Number 3, EPIP Zone, KIADB Export Promotion Industrial Area",
    city: "Whitefield",
    state: "Bengaluru, Karnataka",
    country: "India",
    postalCode: "560066",
  };

  const [newOffice, setNewOffice] = useState({
    title: "",
    companyName: "",
    legalName: "",
    addressLine1: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  });

  const handleNewOfficeChange = (e) => {
    const { name, value } = e.target;
    setNewOffice((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddOffice = () => {
    setOffices((prev) => [newOffice, ...prev]);
    setNewOffice({
      title: "",
      companyName: "",
      legalName: "",
      addressLine1: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
    });
    setShowAddForm(false);
  };

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Company Address</h1>
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors"
          >
            <Plus size={16} />
            <span>Add Address</span>
          </button>
        </div>

        {showAddForm && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
              <h2 className="text-xl font-semibold uppercase">
                ADD NEW OFFICE
              </h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="p-1 text-red-600 hover:text-red-800 transition-colors"
              >
                <XCircle size={18} />
              </button>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Office Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={newOffice.title}
                    onChange={handleNewOfficeChange}
                    placeholder="e.g. Branch Office"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={newOffice.companyName}
                    onChange={handleNewOfficeChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Legal Name
                  </label>
                  <input
                    type="text"
                    name="legalName"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={newOffice.legalName}
                    onChange={handleNewOfficeChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    name="addressLine1"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={newOffice.addressLine1}
                    onChange={handleNewOfficeChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={newOffice.city}
                      onChange={handleNewOfficeChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={newOffice.state}
                      onChange={handleNewOfficeChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={newOffice.postalCode}
                      onChange={handleNewOfficeChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={newOffice.country}
                      onChange={handleNewOfficeChange}
                    />
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={handleAddOffice}
                    className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors"
                  >
                    <Save size={16} />
                    <span>Save</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <X size={16} />
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {offices.map((office, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
              <h2 className="text-xl font-semibold uppercase">
                {office.title}
              </h2>
              <button className="p-1 text-blue-600 hover:text-blue-800 transition-colors">
                <Edit size={18} />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{office.companyName}</h3>
                <p className="text-gray-600">{office.legalName}</p>
                <p className="text-gray-600">{office.addressLine1}</p>
                <p className="text-gray-600">
                  {office.city}, {office.state}, {office.country} -{" "}
                  {office.postalCode}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-1 gap-8">
          {/* Registered Office */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
              {!editingRegisteredTitle ? (
                <div className="flex items-center">
                  <h2 className="text-xl font-semibold uppercase">
                    {registeredTitle}
                  </h2>
                  <button
                    onClick={() => setEditingRegisteredTitle(true)}
                    className="ml-2 p-1 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <Edit size={14} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center">
                  <input
                    type="text"
                    value={registeredTitle}
                    onChange={(e) => setRegisteredTitle(e.target.value)}
                    className="text-xl font-semibold uppercase bg-white border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => setEditingRegisteredTitle(false)}
                    className="ml-2 p-1 text-green-600 hover:text-green-800 transition-colors"
                  >
                    <Check size={18} />
                  </button>
                </div>
              )}
              {!editingRegistered && (
                <button
                  onClick={() => setEditingRegistered(true)}
                  className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Edit size={18} />
                </button>
              )}
              {editingRegistered && (
                <button
                  onClick={() => setEditingRegistered(false)}
                  className="p-1 text-red-600 hover:text-red-800 transition-colors"
                >
                  <XCircle size={18} />
                </button>
              )}
            </div>

            <div className="p-6">
              {!editingRegistered ? (
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">
                    {registeredOffice.companyName}
                  </h3>
                  <p className="text-gray-600">{registeredOffice.legalName}</p>
                  <p className="text-gray-600">
                    {registeredOffice.addressLine1}
                  </p>
                  <p className="text-gray-600">
                    {registeredOffice.city}, {registeredOffice.state},{" "}
                    {registeredOffice.country} - {registeredOffice.postalCode}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      defaultValue={registeredOffice.companyName}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Legal Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      defaultValue={registeredOffice.legalName}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      defaultValue={registeredOffice.addressLine1}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={registeredOffice.city}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={registeredOffice.state}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={registeredOffice.postalCode}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={registeredOffice.country}
                      />
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={() => setEditingRegistered(false)}
                      className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors"
                    >
                      <Save size={16} />
                      <span>Save</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingRegistered(false)}
                      className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <X size={16} />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Corporate Office */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
              {!editingCorporateTitle ? (
                <div className="flex items-center">
                  <h2 className="text-xl font-semibold uppercase">
                    {corporateTitle}
                  </h2>
                  <button
                    onClick={() => setEditingCorporateTitle(true)}
                    className="ml-2 p-1 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <Edit size={14} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center">
                  <input
                    type="text"
                    value={corporateTitle}
                    onChange={(e) => setCorporateTitle(e.target.value)}
                    className="text-xl font-semibold uppercase bg-white border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => setEditingCorporateTitle(false)}
                    className="ml-2 p-1 text-green-600 hover:text-green-800 transition-colors"
                  >
                    <Check size={18} />
                  </button>
                </div>
              )}
              {!editingCorporate && (
                <button
                  onClick={() => setEditingCorporate(true)}
                  className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Edit size={18} />
                </button>
              )}
              {editingCorporate && (
                <button
                  onClick={() => setEditingCorporate(false)}
                  className="p-1 text-red-600 hover:text-red-800 transition-colors"
                >
                  <XCircle size={18} />
                </button>
              )}
            </div>

            <div className="p-6">
              {!editingCorporate ? (
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">
                    {corporateOffice.companyName}
                  </h3>
                  <p className="text-gray-600">
                    {corporateOffice.legalName}, {corporateOffice.addressLine1}
                  </p>
                  <p className="text-gray-600">{corporateOffice.city},</p>
                  <p className="text-gray-600">
                    {corporateOffice.state}, {corporateOffice.country} -{" "}
                    {corporateOffice.postalCode}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      defaultValue={corporateOffice.companyName}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Legal Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      defaultValue={corporateOffice.legalName}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      defaultValue={corporateOffice.addressLine1}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={corporateOffice.city}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={corporateOffice.state}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={corporateOffice.postalCode}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={corporateOffice.country}
                      />
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={() => setEditingCorporate(false)}
                      className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors"
                    >
                      <Save size={16} />
                      <span>Save</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingCorporate(false)}
                      className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <X size={16} />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Address;
