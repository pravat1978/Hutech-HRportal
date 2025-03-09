import React, { useState } from "react";
import Layout from "../layout/Layout";
import {
  FileText,
  Upload,
  Download,
  Eye,
  Edit,
  X,
  Save,
  Trash2,
  Plus,
} from "lucide-react";

interface Document {
  id: number;
  name: string;
  description: string;
  status: "Pending" | "Verified" | "Rejected";
  dateUploaded?: string;
  fileUrl?: string;
  required: boolean;
}

const Documents = () => {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: 1,
      name: "Aadhar Card",
      description: "Government issued identity card",
      status: "Pending",
      required: true,
    },
    {
      id: 2,
      name: "PAN Card",
      description: "Permanent Account Number card",
      status: "Verified",
      dateUploaded: "2023-05-15",
      fileUrl: "#",
      required: true,
    },
    {
      id: 3,
      name: "Passport",
      description: "International travel document",
      status: "Rejected",
      dateUploaded: "2023-04-10",
      fileUrl: "#",
      required: false,
    },
  ]);

  const [previewDocument, setPreviewDocument] = useState<Document | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [editingDocument, setEditingDocument] = useState<Document | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newDocument, setNewDocument] = useState<Omit<Document, "id">>({
    name: "",
    description: "",
    status: "Pending",
    required: false,
  });

  const handlePreview = (document: Document) => {
    setPreviewDocument(document);
    setShowPreview(true);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
    setPreviewDocument(null);
  };

  const handleEdit = (document: Document) => {
    setEditingDocument({ ...document });
  };

  const handleSaveEdit = () => {
    if (editingDocument) {
      setDocuments(
        documents.map((doc) =>
          doc.id === editingDocument.id ? editingDocument : doc,
        ),
      );
      setEditingDocument(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingDocument(null);
  };

  const handleDelete = (id: number) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  const handleAddDocument = () => {
    const newId = Math.max(0, ...documents.map((doc) => doc.id)) + 1;
    setDocuments([
      ...documents,
      {
        id: newId,
        ...newDocument,
        status: "Pending",
      },
    ]);
    setNewDocument({
      name: "",
      description: "",
      status: "Pending",
      required: false,
    });
    setShowAddForm(false);
  };

  const handleUpload = (id: number) => {
    // In a real app, this would trigger a file upload dialog
    alert(
      `Upload functionality would be implemented here for document ID: ${id}`,
    );
  };

  const handleDownload = (document: Document) => {
    // In a real app, this would trigger a file download
    alert(
      `Download functionality would be implemented here for: ${document.name}`,
    );
  };

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-semibold">DOCUMENTS</h2>
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors"
            >
              <Plus size={16} />
              <span>Add Document</span>
            </button>
          </div>

          {showAddForm && (
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-semibold mb-4">Add New Document</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Document Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={newDocument.name}
                    onChange={(e) =>
                      setNewDocument({ ...newDocument, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={newDocument.description}
                    onChange={(e) =>
                      setNewDocument({
                        ...newDocument,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="required"
                    checked={newDocument.required}
                    onChange={(e) =>
                      setNewDocument({
                        ...newDocument,
                        required: e.target.checked,
                      })
                    }
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="required"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Required Document
                  </label>
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleAddDocument}
                  className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors"
                >
                  <Save size={16} />
                  <span>Save</span>
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <X size={16} />
                  <span>Cancel</span>
                </button>
              </div>
            </div>
          )}

          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Document
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date Uploaded
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {documents.map((document) => (
                    <tr key={document.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        {editingDocument &&
                        editingDocument.id === document.id ? (
                          <div className="space-y-2">
                            <input
                              type="text"
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                              value={editingDocument.name}
                              onChange={(e) =>
                                setEditingDocument({
                                  ...editingDocument,
                                  name: e.target.value,
                                })
                              }
                            />
                            <input
                              type="text"
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                              value={editingDocument.description}
                              onChange={(e) =>
                                setEditingDocument({
                                  ...editingDocument,
                                  description: e.target.value,
                                })
                              }
                            />
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id={`required-${document.id}`}
                                checked={editingDocument.required}
                                onChange={(e) =>
                                  setEditingDocument({
                                    ...editingDocument,
                                    required: e.target.checked,
                                  })
                                }
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                              <label
                                htmlFor={`required-${document.id}`}
                                className="ml-2 block text-sm text-gray-700"
                              >
                                Required
                              </label>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-gray-100 rounded-md">
                              <FileText className="h-6 w-6 text-gray-500" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {document.name}
                                {document.required && (
                                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                    Required
                                  </span>
                                )}
                              </div>
                              <div className="text-sm text-gray-500">
                                {document.description}
                              </div>
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {editingDocument &&
                        editingDocument.id === document.id ? (
                          <select
                            className="p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            value={editingDocument.status}
                            onChange={(e) =>
                              setEditingDocument({
                                ...editingDocument,
                                status: e.target.value as
                                  | "Pending"
                                  | "Verified"
                                  | "Rejected",
                              })
                            }
                          >
                            <option value="Pending">Pending</option>
                            <option value="Verified">Verified</option>
                            <option value="Rejected">Rejected</option>
                          </select>
                        ) : (
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              document.status === "Verified"
                                ? "bg-green-100 text-green-800"
                                : document.status === "Rejected"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {document.status}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {document.dateUploaded || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {editingDocument &&
                        editingDocument.id === document.id ? (
                          <div className="flex justify-end space-x-2">
                            <button
                              onClick={handleSaveEdit}
                              className="p-1 text-green-600 hover:text-green-800 transition-colors"
                              title="Save"
                            >
                              <Save size={16} />
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="p-1 text-red-600 hover:text-red-800 transition-colors"
                              title="Cancel"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ) : (
                          <div className="flex justify-end space-x-2">
                            {document.fileUrl ? (
                              <>
                                <button
                                  onClick={() => handlePreview(document)}
                                  className="p-1 text-gray-600 hover:text-gray-800 transition-colors"
                                  title="Preview"
                                >
                                  <Eye size={16} />
                                </button>
                                <button
                                  onClick={() => handleDownload(document)}
                                  className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                                  title="Download"
                                >
                                  <Download size={16} />
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => handleUpload(document.id)}
                                className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                                title="Upload"
                              >
                                <Upload size={16} />
                              </button>
                            )}
                            <button
                              onClick={() => handleEdit(document)}
                              className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                              title="Edit"
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              onClick={() => handleDelete(document.id)}
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
                  {documents.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-6 py-4 text-center text-gray-500"
                      >
                        No documents found. Click the "Add Document" button to
                        create one.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Document Preview Modal */}
      {showPreview && previewDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] flex flex-col">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">{previewDocument.name}</h3>
              <button
                onClick={handleClosePreview}
                className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4 flex-1 overflow-auto">
              <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <FileText size={64} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">
                    Document preview would appear here
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    (In a real application, the actual document would be
                    displayed)
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => handleDownload(previewDocument)}
                className="flex items-center gap-2 bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors"
              >
                <Download size={16} />
                <span>Download</span>
              </button>
              <button
                onClick={handleClosePreview}
                className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
              >
                <X size={16} />
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Documents;
