import React from "react";
import Layout from "../layout/Layout";
import {
  MapPin,
  Users,
  Briefcase,
  Bell,
  FileText,
  FileCode,
  UserCog,
  CreditCard,
} from "lucide-react";
import { Link } from "react-router-dom";

const CompanyProfile = () => {
  const menuItems = [
    {
      icon: <MapPin size={24} />,
      title: "Address",
      description: "Manage company locations",
      link: "/company-profile/address",
    },
    {
      icon: <Users size={24} />,
      title: "Department",
      description: "Organize company structure",
      link: "/company-profile/department",
    },
    {
      icon: <Briefcase size={24} />,
      title: "Designations",
      description: "Define job titles and roles",
      link: "/company-profile/designations",
    },
    {
      icon: <Bell size={24} />,
      title: "Announcements",
      description: "Company-wide communications",
      link: "/company-profile/announcements",
    },
    {
      icon: <FileText size={24} />,
      title: "Policies",
      description: "Company rules and guidelines",
      link: "/company-profile/policies",
    },
    {
      icon: <FileCode size={24} />,
      title: "Statutory Info",
      description: "Legal and compliance details",
      link: "/company-profile/statutory-info",
    },
    {
      icon: <FileText size={24} />,
      title: "Company ID",
      description: "Company identification details",
      link: "/company-profile/company-id",
    },
    {
      icon: <UserCog size={24} />,
      title: "Admins",
      description: "Manage system administrators",
      link: "/company-profile/admins",
    },
    {
      icon: <CreditCard size={24} />,
      title: "My Plan",
      description: "Subscription and billing",
      link: "/company-profile/my-plan",
    },
  ];

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold mb-6">Company Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#1e2844]/10 flex items-center justify-center text-[#1e2844] mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CompanyProfile;
