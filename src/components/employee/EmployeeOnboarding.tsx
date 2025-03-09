import React, { useState } from "react";
import Layout from "../layout/Layout";
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const EmployeeOnboarding = () => {
  const [preOnboardingEnabled, setPreOnboardingEnabled] = useState(true);
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "personalInfo",
  );
  const [editingField, setEditingField] = useState<{
    sectionId: string;
    fieldName: string;
  } | null>(null);
  const [fieldValues, setFieldValues] = useState<{ [key: string]: string }>({});
  const [formSections, setFormSections] = useState([
    {
      id: "personalInfo",
      title: "Personal Information",
      required: true,
      preOnboarding: true,
      fields: [
        { name: "fullName", label: "Full Name", type: "text", required: true },
        {
          name: "email",
          label: "Email Address",
          type: "email",
          required: true,
        },
        { name: "phone", label: "Phone Number", type: "tel", required: true },
        {
          name: "dateOfBirth",
          label: "Date of Birth",
          type: "date",
          required: true,
        },
        {
          name: "gender",
          label: "Gender",
          type: "select",
          options: ["Male", "Female", "Other"],
          required: true,
        },
        {
          name: "maritalStatus",
          label: "Marital Status",
          type: "select",
          options: ["Single", "Married", "Divorced", "Widowed"],
          required: false,
        },
      ],
    },
    {
      id: "addressInfo",
      title: "Address Information",
      required: true,
      preOnboarding: true,
      fields: [
        {
          name: "addressLine1",
          label: "Address Line 1",
          type: "text",
          required: true,
        },
        {
          name: "addressLine2",
          label: "Address Line 2",
          type: "text",
          required: false,
        },
        { name: "city", label: "City", type: "text", required: true },
        {
          name: "state",
          label: "State/Province",
          type: "text",
          required: true,
        },
        {
          name: "postalCode",
          label: "Postal Code",
          type: "text",
          required: true,
        },
        { name: "country", label: "Country", type: "text", required: true },
      ],
    },
    {
      id: "identificationInfo",
      title: "Identification Documents",
      required: true,
      preOnboarding: true,
      fields: [
        {
          name: "aadharCard",
          label: "Aadhar Card Number",
          type: "text",
          required: true,
        },
        {
          name: "panCard",
          label: "PAN Card Number",
          type: "text",
          required: true,
        },
        {
          name: "passport",
          label: "Passport Number",
          type: "text",
          required: false,
        },
        {
          name: "drivingLicense",
          label: "Driving License",
          type: "text",
          required: false,
        },
      ],
    },
    {
      id: "bankInfo",
      title: "Bank Information",
      required: true,
      preOnboarding: false,
      fields: [
        { name: "bankName", label: "Bank Name", type: "text", required: true },
        {
          name: "accountNumber",
          label: "Account Number",
          type: "text",
          required: true,
        },
        { name: "ifscCode", label: "IFSC Code", type: "text", required: true },
        {
          name: "accountType",
          label: "Account Type",
          type: "select",
          options: ["Savings", "Current"],
          required: true,
        },
      ],
    },
    {
      id: "emergencyContact",
      title: "Emergency Contact",
      required: true,
      preOnboarding: false,
      fields: [
        {
          name: "emergencyName",
          label: "Contact Name",
          type: "text",
          required: true,
        },
        {
          name: "emergencyRelation",
          label: "Relationship",
          type: "text",
          required: true,
        },
        {
          name: "emergencyPhone",
          label: "Phone Number",
          type: "tel",
          required: true,
        },
        {
          name: "emergencyEmail",
          label: "Email Address",
          type: "email",
          required: false,
        },
      ],
    },
    {
      id: "educationInfo",
      title: "Education Information",
      required: false,
      preOnboarding: false,
      fields: [
        {
          name: "highestDegree",
          label: "Highest Degree",
          type: "text",
          required: true,
        },
        {
          name: "university",
          label: "University/Institution",
          type: "text",
          required: true,
        },
        {
          name: "graduationYear",
          label: "Year of Graduation",
          type: "number",
          required: true,
        },
        {
          name: "specialization",
          label: "Specialization",
          type: "text",
          required: false,
        },
      ],
    },
    {
      id: "employmentHistory",
      title: "Employment History",
      required: false,
      preOnboarding: false,
      fields: [
        {
          name: "previousEmployer",
          label: "Previous Employer",
          type: "text",
          required: false,
        },
        { name: "jobTitle", label: "Job Title", type: "text", required: false },
        {
          name: "employmentPeriod",
          label: "Employment Period",
          type: "text",
          required: false,
        },
        {
          name: "reasonForLeaving",
          label: "Reason for Leaving",
          type: "textarea",
          required: false,
        },
      ],
    },
  ]);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const togglePreOnboarding = () => {
    setPreOnboardingEnabled(!preOnboardingEnabled);
  };

  const handleEditField = (
    sectionId: string,
    fieldName: string,
    currentValue: string = "",
  ) => {
    setEditingField({ sectionId, fieldName });
    setFieldValues((prev) => ({
      ...prev,
      [`${sectionId}-${fieldName}`]: currentValue,
    }));
  };

  const handleSaveField = (sectionId: string, fieldName: string) => {
    // Here you would typically save the value to your backend
    console.log(
      `Saving field ${fieldName} in section ${sectionId} with value:`,
      fieldValues[`${sectionId}-${fieldName}`],
    );
    setEditingField(null);
  };

  const handleCancelEdit = () => {
    setEditingField(null);
  };

  const handleFieldChange = (
    sectionId: string,
    fieldName: string,
    value: string,
  ) => {
    setFieldValues((prev) => ({
      ...prev,
      [`${sectionId}-${fieldName}`]: value,
    }));
  };

  // Toggle functions removed

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Employee Onboarding</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-semibold">
              Onboarding Form Configuration
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Configure which sections are required and which should be included
              in pre-onboarding
            </p>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {formSections.map((section) => (
                <div
                  key={section.id}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div
                    className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
                    onClick={() => toggleSection(section.id)}
                  >
                    <div className="flex items-center space-x-4">
                      <h3 className="font-medium">{section.title}</h3>
                      {section.required && (
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                          Required
                        </span>
                      )}
                      {section.preOnboarding && preOnboardingEnabled && (
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                          Pre-Onboarding
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4">
                      {expandedSection === section.id ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </div>
                  </div>

                  {expandedSection === section.id && (
                    <div className="p-4 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.fields.map((field, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 border border-gray-200 rounded-md"
                          >
                            <div className="w-full">
                              <div className="flex justify-between items-center mb-1">
                                <p className="font-medium">{field.label}</p>
                                <div>
                                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                                    {field.required ? "Required" : "Optional"}
                                  </span>
                                </div>
                              </div>
                              {editingField &&
                              editingField.sectionId === section.id &&
                              editingField.fieldName === field.name ? (
                                <div className="flex items-center gap-2">
                                  {field.type === "select" ? (
                                    <select
                                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                                      value={
                                        fieldValues[
                                          `${section.id}-${field.name}`
                                        ] || ""
                                      }
                                      onChange={(e) =>
                                        handleFieldChange(
                                          section.id,
                                          field.name,
                                          e.target.value,
                                        )
                                      }
                                    >
                                      <option value="">
                                        Select {field.label}
                                      </option>
                                      {field.options?.map((option, i) => (
                                        <option key={i} value={option}>
                                          {option}
                                        </option>
                                      ))}
                                    </select>
                                  ) : field.type === "textarea" ? (
                                    <textarea
                                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                                      value={
                                        fieldValues[
                                          `${section.id}-${field.name}`
                                        ] || ""
                                      }
                                      onChange={(e) =>
                                        handleFieldChange(
                                          section.id,
                                          field.name,
                                          e.target.value,
                                        )
                                      }
                                      placeholder={`Enter ${field.label.toLowerCase()}`}
                                      rows={3}
                                    />
                                  ) : (
                                    <input
                                      type={field.type}
                                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                                      value={
                                        fieldValues[
                                          `${section.id}-${field.name}`
                                        ] || ""
                                      }
                                      onChange={(e) =>
                                        handleFieldChange(
                                          section.id,
                                          field.name,
                                          e.target.value,
                                        )
                                      }
                                      placeholder={`Enter ${field.label.toLowerCase()}`}
                                    />
                                  )}
                                  <button
                                    onClick={() =>
                                      handleSaveField(section.id, field.name)
                                    }
                                    className="p-1 text-green-600 hover:text-green-800 transition-colors"
                                  >
                                    <Save size={16} />
                                  </button>
                                  <button
                                    onClick={handleCancelEdit}
                                    className="p-1 text-red-600 hover:text-red-800 transition-colors"
                                  >
                                    <X size={16} />
                                  </button>
                                </div>
                              ) : (
                                <div className="flex justify-between items-center">
                                  <p className="text-sm text-gray-500">
                                    {field.type === "select"
                                      ? "Dropdown"
                                      : field.type.charAt(0).toUpperCase() +
                                        field.type.slice(1)}
                                  </p>
                                  <button
                                    onClick={() =>
                                      handleEditField(section.id, field.name)
                                    }
                                    className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                                  >
                                    <Edit size={16} />
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-semibold">Onboarding Process</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="font-medium">Send Invitation</h3>
                <p className="text-sm text-gray-500">
                  Send onboarding invitation to employee's email
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="font-medium">Pre-Onboarding</h3>
                <p className="text-sm text-gray-500">
                  Employee completes pre-onboarding forms
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="font-medium">HR Review</h3>
                <p className="text-sm text-gray-500">
                  HR reviews submitted information
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className="font-medium">Complete Onboarding</h3>
                <p className="text-sm text-gray-500">
                  Employee completes remaining onboarding forms
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                5
              </div>
              <div>
                <h3 className="font-medium">Onboarding Complete</h3>
                <p className="text-sm text-gray-500">
                  Employee is fully onboarded into the system
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EmployeeOnboarding;
