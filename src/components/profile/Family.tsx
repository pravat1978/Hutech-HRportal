import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Plus } from "lucide-react";

const Family = () => {
  const [familyMembers, setFamilyMembers] = useState([]);
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [showFamilyForm, setShowFamilyForm] = useState(false);
  const [showEmergencyForm, setShowEmergencyForm] = useState(false);
  const [newFamilyMember, setNewFamilyMember] = useState({
    name: "",
    relationship: "",
    dateOfBirth: "",
    dependant: false,
  });
  const [newEmergencyContact, setNewEmergencyContact] = useState({
    name: "",
    relationship: "",
    phoneNumber: "",
  });

  const handleFamilyInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewFamilyMember({
      ...newFamilyMember,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleEmergencyInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmergencyContact({
      ...newEmergencyContact,
      [name]: value,
    });
  };

  const handleAddFamilyMember = () => {
    if (!newFamilyMember.name || !newFamilyMember.relationship) return;

    const newId =
      familyMembers.length > 0
        ? Math.max(...familyMembers.map((item) => item.id)) + 1
        : 1;
    setFamilyMembers([...familyMembers, { id: newId, ...newFamilyMember }]);
    setNewFamilyMember({
      name: "",
      relationship: "",
      dateOfBirth: "",
      dependant: false,
    });
    setShowFamilyForm(false);
  };

  const handleAddEmergencyContact = () => {
    if (!newEmergencyContact.name || !newEmergencyContact.phoneNumber) return;

    const newId =
      emergencyContacts.length > 0
        ? Math.max(...emergencyContacts.map((item) => item.id)) + 1
        : 1;
    setEmergencyContacts([
      ...emergencyContacts,
      { id: newId, ...newEmergencyContact },
    ]);
    setNewEmergencyContact({
      name: "",
      relationship: "",
      phoneNumber: "",
    });
    setShowEmergencyForm(false);
  };

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        {/* Family Members Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-semibold">FAMILY MEMBERS</h2>
          </div>

          <div className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-gray-700 font-medium">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-medium">
                    Relationship
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-medium">
                    Date of Birth
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-medium">
                    Dependant
                  </th>
                </tr>
              </thead>
              <tbody>
                {familyMembers.map((member) => (
                  <tr key={member.id} className="border-b border-gray-100">
                    <td className="px-6 py-4">{member.name}</td>
                    <td className="px-6 py-4">{member.relationship}</td>
                    <td className="px-6 py-4">{member.dateOfBirth}</td>
                    <td className="px-6 py-4">
                      {member.dependant ? "Yes" : "No"}
                    </td>
                  </tr>
                ))}
                {familyMembers.length === 0 && !showFamilyForm && (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      No family members added yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {showFamilyForm && (
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={newFamilyMember.name}
                      onChange={handleFamilyInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Relationship
                    </label>
                    <select
                      name="relationship"
                      value={newFamilyMember.relationship}
                      onChange={handleFamilyInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Relationship</option>
                      <option value="Spouse">Spouse</option>
                      <option value="Child">Child</option>
                      <option value="Parent">Parent</option>
                      <option value="Sibling">Sibling</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={newFamilyMember.dateOfBirth}
                      onChange={handleFamilyInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="dependant"
                      name="dependant"
                      checked={newFamilyMember.dependant}
                      onChange={handleFamilyInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="dependant"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Dependant
                    </label>
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowFamilyForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddFamilyMember}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}

            {!showFamilyForm && (
              <div className="p-4">
                <button
                  onClick={() => setShowFamilyForm(true)}
                  className="flex items-center text-blue-500 hover:text-blue-700"
                >
                  <Plus size={20} className="mr-1" />
                  <span>Add</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-semibold">EMERGENCY CONTACT</h2>
          </div>

          <div className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-gray-700 font-medium">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-medium">
                    Relationship
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-medium">
                    Phone Number
                  </th>
                </tr>
              </thead>
              <tbody>
                {emergencyContacts.map((contact) => (
                  <tr key={contact.id} className="border-b border-gray-100">
                    <td className="px-6 py-4">{contact.name}</td>
                    <td className="px-6 py-4">{contact.relationship}</td>
                    <td className="px-6 py-4">{contact.phoneNumber}</td>
                  </tr>
                ))}
                {emergencyContacts.length === 0 && !showEmergencyForm && (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      No emergency contacts added yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {showEmergencyForm && (
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={newEmergencyContact.name}
                      onChange={handleEmergencyInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Relationship
                    </label>
                    <select
                      name="relationship"
                      value={newEmergencyContact.relationship}
                      onChange={handleEmergencyInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Relationship</option>
                      <option value="Spouse">Spouse</option>
                      <option value="Parent">Parent</option>
                      <option value="Sibling">Sibling</option>
                      <option value="Friend">Friend</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={newEmergencyContact.phoneNumber}
                      onChange={handleEmergencyInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowEmergencyForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddEmergencyContact}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}

            {!showEmergencyForm && (
              <div className="p-4">
                <button
                  onClick={() => setShowEmergencyForm(true)}
                  className="flex items-center text-blue-500 hover:text-blue-700"
                >
                  <Plus size={20} className="mr-1" />
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

export default Family;
