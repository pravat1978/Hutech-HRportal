import React from "react";
import Layout from "../layout/Layout";

const StatutoryInfo = () => {
  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold mb-6">Statutory Information</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Company Registration</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Registration Number
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="REG123456789"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Incorporation
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="January 15, 2010"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Legal Entity Type
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="Corporation"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Registered Office
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  defaultValue="123 Business Park, Tech Avenue, San Francisco, CA 94105, United States"
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Tax Information</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tax Identification Number
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="TAX987654321"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  VAT/GST Registration
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="VAT123456789"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tax Filing Period
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="Quarterly"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tax Jurisdiction
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="Federal, State of California"
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Labor Compliance</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Employer Identification Number (EIN)
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="EIN12-3456789"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Workers' Compensation Insurance
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="WC-987654321"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Unemployment Insurance Account
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="UI-123456789"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Labor Law Posting Compliance
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked
                    readOnly
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    All required labor law postings are current and displayed
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Licenses & Permits</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business License
                </label>
                <div className="flex justify-between">
                  <input
                    type="text"
                    className="w-3/4 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    defaultValue="BL-123456"
                    readOnly
                  />
                  <div className="text-sm text-gray-500">
                    <div>Expires: Dec 31, 2023</div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Health & Safety Permit
                </label>
                <div className="flex justify-between">
                  <input
                    type="text"
                    className="w-3/4 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    defaultValue="HS-789012"
                    readOnly
                  />
                  <div className="text-sm text-gray-500">
                    <div>Expires: Oct 15, 2023</div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Environmental Permit
                </label>
                <div className="flex justify-between">
                  <input
                    type="text"
                    className="w-3/4 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    defaultValue="EP-345678"
                    readOnly
                  />
                  <div className="text-sm text-gray-500">
                    <div>Expires: Mar 22, 2024</div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Industry-Specific Licenses
                </label>
                <div className="flex justify-between">
                  <input
                    type="text"
                    className="w-3/4 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    defaultValue="ISL-901234"
                    readOnly
                  />
                  <div className="text-sm text-gray-500">
                    <div>Expires: Aug 10, 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button className="bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors">
            Update Information
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default StatutoryInfo;
