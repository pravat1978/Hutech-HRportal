import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Edit, Save, X, Plus } from "lucide-react";

const Work = () => {
  const [workInfo, setWorkInfo] = useState({
    employeeId: "HTS002",
    dateOfJoining: "02/12/2019",
    probationPeriod: "0",
    employeeType: "Full Time",
    workLocation: "Corporate Office",
    probationStatus: "On Probation",
    workExperience: "18 Years & 5 Months",
  });

  const [employmentHistory, setEmploymentHistory] = useState([
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Humantech Solutions India Pvt. Ltd.",
      period: "Dec 2019 - Present",
      description:
        "Leading development of HR management system and implementing new features.",
      current: true,
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Tech Innovations Inc.",
      period: "Jun 2015 - Nov 2019",
      description:
        "Developed and maintained web applications for enterprise clients.",
      current: false,
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "StartUp Solutions",
      period: "Jan 2012 - May 2015",
      description:
        "Assisted in development of mobile applications and websites.",
      current: false,
    },
  ]);

  const [skills, setSkills] = useState([
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "AWS",
    "Docker",
  ]);

  const [certifications, setCertifications] = useState([
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issueDate: "Jan 2022",
      expiryDate: "Jan 2025",
    },
    {
      id: 2,
      name: "MongoDB Certified Developer",
      issueDate: "Mar 2021",
      expiryDate: "No Expiration",
    },
  ]);

  const [resignationInfo, setResignationInfo] = useState({
    status: "Active",
    resignationDate: "-",
    resignationStatus: "-",
    lastWorkingDay: "-",
    noticePeriod: "-",
  });

  const [editingSection, setEditingSection] = useState("");
  const [tempWorkInfo, setTempWorkInfo] = useState({ ...workInfo });
  const [tempEmploymentHistory, setTempEmploymentHistory] = useState([
    ...employmentHistory,
  ]);
  const [tempSkills, setTempSkills] = useState([...skills]);
  const [tempCertifications, setTempCertifications] = useState([
    ...certifications,
  ]);
  const [tempResignationInfo, setTempResignationInfo] = useState({
    ...resignationInfo,
  });
  const [newSkill, setNewSkill] = useState("");

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-semibold">BASIC INFO</h2>
            {editingSection === "basic" ? (
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setWorkInfo(tempWorkInfo);
                    setEditingSection("");
                  }}
                  className="p-1 text-green-600 hover:text-green-800 transition-colors flex items-center gap-1"
                >
                  <Save size={18} />
                  <span className="text-sm">Save</span>
                </button>
                <button
                  onClick={() => {
                    setTempWorkInfo({ ...workInfo });
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
                  setTempWorkInfo({ ...workInfo });
                  setEditingSection("basic");
                }}
                className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Edit size={18} />
              </button>
            )}
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-700">
                    Employee ID
                  </h3>
                  {editingSection === "basic" ? (
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={tempWorkInfo.employeeId}
                      onChange={(e) =>
                        setTempWorkInfo({
                          ...tempWorkInfo,
                          employeeId: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p className="text-gray-600">{workInfo.employeeId}</p>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-700">
                    Probation Period
                  </h3>
                  {editingSection === "basic" ? (
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={tempWorkInfo.probationPeriod}
                      onChange={(e) =>
                        setTempWorkInfo({
                          ...tempWorkInfo,
                          probationPeriod: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p className="text-gray-600">{workInfo.probationPeriod}</p>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-700">
                    Work Location
                  </h3>
                  {editingSection === "basic" ? (
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={tempWorkInfo.workLocation}
                      onChange={(e) =>
                        setTempWorkInfo({
                          ...tempWorkInfo,
                          workLocation: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p className="text-gray-600">{workInfo.workLocation}</p>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-700">
                    Work Experience
                  </h3>
                  {editingSection === "basic" ? (
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={tempWorkInfo.workExperience}
                      onChange={(e) =>
                        setTempWorkInfo({
                          ...tempWorkInfo,
                          workExperience: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p className="text-gray-600">{workInfo.workExperience}</p>
                  )}
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-700">
                    Date of Joining
                  </h3>
                  {editingSection === "basic" ? (
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={tempWorkInfo.dateOfJoining}
                      onChange={(e) =>
                        setTempWorkInfo({
                          ...tempWorkInfo,
                          dateOfJoining: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <p className="text-gray-600">{workInfo.dateOfJoining}</p>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-700">
                    Employee Type
                  </h3>
                  {editingSection === "basic" ? (
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={tempWorkInfo.employeeType}
                      onChange={(e) =>
                        setTempWorkInfo({
                          ...tempWorkInfo,
                          employeeType: e.target.value,
                        })
                      }
                    >
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Contract">Contract</option>
                      <option value="Intern">Intern</option>
                    </select>
                  ) : (
                    <p className="text-gray-600">{workInfo.employeeType}</p>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-700">
                    Probation Status
                  </h3>
                  {editingSection === "basic" ? (
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={tempWorkInfo.probationStatus}
                      onChange={(e) =>
                        setTempWorkInfo({
                          ...tempWorkInfo,
                          probationStatus: e.target.value,
                        })
                      }
                    >
                      <option value="On Probation">On Probation</option>
                      <option value="Completed">Completed</option>
                      <option value="Extended">Extended</option>
                      <option value="Not Applicable">Not Applicable</option>
                    </select>
                  ) : (
                    <p className="text-gray-600">{workInfo.probationStatus}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional work-related sections can be added here */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-semibold">EMPLOYMENT HISTORY</h2>
            {editingSection === "history" ? (
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setEmploymentHistory(tempEmploymentHistory);
                    setEditingSection("");
                  }}
                  className="p-1 text-green-600 hover:text-green-800 transition-colors flex items-center gap-1"
                >
                  <Save size={18} />
                  <span className="text-sm">Save</span>
                </button>
                <button
                  onClick={() => {
                    setTempEmploymentHistory([...employmentHistory]);
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
                  setTempEmploymentHistory([...employmentHistory]);
                  setEditingSection("history");
                }}
                className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Edit size={18} />
              </button>
            )}
          </div>

          <div className="p-6">
            {editingSection === "history" ? (
              <div className="space-y-6">
                {tempEmploymentHistory.map((job, index) => (
                  <div
                    key={job.id}
                    className="p-4 border border-gray-200 rounded-md"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium">Job {index + 1}</h3>
                      <button
                        onClick={() => {
                          const newHistory = [...tempEmploymentHistory];
                          newHistory.splice(index, 1);
                          setTempEmploymentHistory(newHistory);
                        }}
                        className="p-1 text-red-600 hover:text-red-800 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Job Title
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          value={job.title}
                          onChange={(e) => {
                            const newHistory = [...tempEmploymentHistory];
                            newHistory[index].title = e.target.value;
                            setTempEmploymentHistory(newHistory);
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          value={job.company}
                          onChange={(e) => {
                            const newHistory = [...tempEmploymentHistory];
                            newHistory[index].company = e.target.value;
                            setTempEmploymentHistory(newHistory);
                          }}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Period
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        value={job.period}
                        onChange={(e) => {
                          const newHistory = [...tempEmploymentHistory];
                          newHistory[index].period = e.target.value;
                          setTempEmploymentHistory(newHistory);
                        }}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        rows={3}
                        value={job.description}
                        onChange={(e) => {
                          const newHistory = [...tempEmploymentHistory];
                          newHistory[index].description = e.target.value;
                          setTempEmploymentHistory(newHistory);
                        }}
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={`current-job-${job.id}`}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        checked={job.current}
                        onChange={(e) => {
                          const newHistory = [...tempEmploymentHistory];
                          newHistory[index].current = e.target.checked;
                          setTempEmploymentHistory(newHistory);
                        }}
                      />
                      <label
                        htmlFor={`current-job-${job.id}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        Current Position
                      </label>
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => {
                    const newId =
                      Math.max(
                        ...tempEmploymentHistory.map((job) => job.id),
                        0,
                      ) + 1;
                    setTempEmploymentHistory([
                      ...tempEmploymentHistory,
                      {
                        id: newId,
                        title: "",
                        company: "",
                        period: "",
                        description: "",
                        current: false,
                      },
                    ]);
                  }}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>+ Add Another Position</span>
                </button>
              </div>
            ) : (
              <div className="border-l-2 border-gray-200 pl-4 ml-4">
                {employmentHistory.map((job, index) => (
                  <div
                    key={job.id}
                    className={`relative ${index < employmentHistory.length - 1 ? "mb-8" : ""}`}
                  >
                    <div
                      className={`absolute -left-6 mt-1 h-4 w-4 rounded-full ${job.current ? "bg-blue-500" : "bg-gray-400"}`}
                    ></div>
                    <div className="mb-2">
                      <h3 className="text-lg font-medium">{job.title}</h3>
                      <p className="text-sm text-gray-500">{job.company}</p>
                    </div>
                    <p className="text-sm text-gray-600">{job.period}</p>
                    <p className="mt-2 text-gray-700">{job.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-semibold">SKILLS & CERTIFICATIONS</h2>
            {editingSection === "skills" ? (
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setSkills(tempSkills);
                    setCertifications(tempCertifications);
                    setEditingSection("");
                  }}
                  className="p-1 text-green-600 hover:text-green-800 transition-colors flex items-center gap-1"
                >
                  <Save size={18} />
                  <span className="text-sm">Save</span>
                </button>
                <button
                  onClick={() => {
                    setTempSkills([...skills]);
                    setTempCertifications([...certifications]);
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
                  setTempSkills([...skills]);
                  setTempCertifications([...certifications]);
                  setEditingSection("skills");
                }}
                className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Edit size={18} />
              </button>
            )}
          </div>

          <div className="p-6">
            {editingSection === "skills" ? (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {tempSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center"
                      >
                        {skill}
                        <button
                          onClick={() => {
                            const newSkills = [...tempSkills];
                            newSkills.splice(index, 1);
                            setTempSkills(newSkills);
                          }}
                          className="ml-2 text-blue-800 hover:text-blue-900"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Add a new skill"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter" && newSkill.trim() !== "") {
                          setTempSkills([...tempSkills, newSkill.trim()]);
                          setNewSkill("");
                          e.preventDefault();
                        }
                      }}
                    />
                    <button
                      onClick={() => {
                        if (newSkill.trim() !== "") {
                          setTempSkills([...tempSkills, newSkill.trim()]);
                          setNewSkill("");
                        }
                      }}
                      className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Certifications</h3>
                  <div className="space-y-4 mb-4">
                    {tempCertifications.map((cert, index) => (
                      <div
                        key={cert.id}
                        className="p-3 border border-gray-200 rounded-md relative"
                      >
                        <button
                          onClick={() => {
                            const newCerts = [...tempCertifications];
                            newCerts.splice(index, 1);
                            setTempCertifications(newCerts);
                          }}
                          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                        >
                          <X size={16} />
                        </button>
                        <div className="mb-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Certification Name
                          </label>
                          <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            value={cert.name}
                            onChange={(e) => {
                              const newCerts = [...tempCertifications];
                              newCerts[index].name = e.target.value;
                              setTempCertifications(newCerts);
                            }}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Issue Date
                            </label>
                            <input
                              type="text"
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                              value={cert.issueDate}
                              onChange={(e) => {
                                const newCerts = [...tempCertifications];
                                newCerts[index].issueDate = e.target.value;
                                setTempCertifications(newCerts);
                              }}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                              value={cert.expiryDate}
                              onChange={(e) => {
                                const newCerts = [...tempCertifications];
                                newCerts[index].expiryDate = e.target.value;
                                setTempCertifications(newCerts);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      const newId =
                        Math.max(...tempCertifications.map((c) => c.id), 0) + 1;
                      setTempCertifications([
                        ...tempCertifications,
                        {
                          id: newId,
                          name: "",
                          issueDate: "",
                          expiryDate: "",
                        },
                      ]);
                    }}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Plus size={16} />
                    <span>Add Certification</span>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Certifications</h3>
                  <div className="space-y-4">
                    {certifications.map((cert) => (
                      <div
                        key={cert.id}
                        className="p-3 border border-gray-200 rounded-md"
                      >
                        <h4 className="font-medium">{cert.name}</h4>
                        <p className="text-sm text-gray-600">
                          Issued: {cert.issueDate} • Expires: {cert.expiryDate}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-semibold">RESIGNATION INFO</h2>
            {editingSection === "resignation" ? (
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setResignationInfo(tempResignationInfo);
                    setEditingSection("");
                  }}
                  className="p-1 text-green-600 hover:text-green-800 transition-colors flex items-center gap-1"
                >
                  <Save size={18} />
                  <span className="text-sm">Save</span>
                </button>
                <button
                  onClick={() => {
                    setTempResignationInfo({ ...resignationInfo });
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
                  setTempResignationInfo({ ...resignationInfo });
                  setEditingSection("resignation");
                }}
                className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Edit size={18} />
              </button>
            )}
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-700">
                    Employee Status
                    <span className="ml-2 inline-flex items-center justify-center w-5 h-5 bg-gray-400 text-white rounded-full text-xs">
                      i
                    </span>
                  </h3>
                  {editingSection === "resignation" ? (
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mt-1"
                      value={tempResignationInfo.status}
                      onChange={(e) =>
                        setTempResignationInfo({
                          ...tempResignationInfo,
                          status: e.target.value,
                        })
                      }
                    >
                      <option value="Active">Active</option>
                      <option value="Resigned">Resigned</option>
                      <option value="Terminated">Terminated</option>
                      <option value="On Notice Period">On Notice Period</option>
                    </select>
                  ) : (
                    <p className="text-gray-600">{resignationInfo.status}</p>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-700">
                    Resignation Date
                  </h3>
                  {editingSection === "resignation" ? (
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mt-1"
                      value={tempResignationInfo.resignationDate}
                      onChange={(e) =>
                        setTempResignationInfo({
                          ...tempResignationInfo,
                          resignationDate: e.target.value,
                        })
                      }
                      placeholder="MM/DD/YYYY"
                    />
                  ) : (
                    <p className="text-gray-600">
                      {resignationInfo.resignationDate}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-700">
                    Resignation Status
                  </h3>
                  {editingSection === "resignation" ? (
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mt-1"
                      value={tempResignationInfo.resignationStatus}
                      onChange={(e) =>
                        setTempResignationInfo({
                          ...tempResignationInfo,
                          resignationStatus: e.target.value,
                        })
                      }
                    >
                      <option value="-">-</option>
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  ) : (
                    <p className="text-gray-600">
                      {resignationInfo.resignationStatus}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-700">
                    Last Working Day
                  </h3>
                  {editingSection === "resignation" ? (
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mt-1"
                      value={tempResignationInfo.lastWorkingDay}
                      onChange={(e) =>
                        setTempResignationInfo({
                          ...tempResignationInfo,
                          lastWorkingDay: e.target.value,
                        })
                      }
                      placeholder="MM/DD/YYYY"
                    />
                  ) : (
                    <p className="text-gray-600">
                      {resignationInfo.lastWorkingDay}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-700">
                    Notice Period
                  </h3>
                  {editingSection === "resignation" ? (
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mt-1"
                      value={tempResignationInfo.noticePeriod}
                      onChange={(e) =>
                        setTempResignationInfo({
                          ...tempResignationInfo,
                          noticePeriod: e.target.value,
                        })
                      }
                    >
                      <option value="-">-</option>
                      <option value="30 Days">30 Days</option>
                      <option value="60 Days">60 Days</option>
                      <option value="90 Days">90 Days</option>
                    </select>
                  ) : (
                    <p className="text-gray-600">
                      {resignationInfo.noticePeriod}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Work;
