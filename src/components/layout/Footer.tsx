import React from "react";
import { Separator } from "../ui/separator";
import { ExternalLink, Github, Mail } from "lucide-react";

interface FooterProps {
  companyName?: string;
  year?: number;
  links?: Array<{
    label: string;
    href: string;
    icon?: React.ReactNode;
  }>;
}

const Footer = ({
  companyName = "Your Company",
  year = new Date().getFullYear(),
  links = [
    { label: "Privacy Policy", href: "#", icon: <ExternalLink size={16} /> },
    { label: "Terms of Service", href: "#", icon: <ExternalLink size={16} /> },
    {
      label: "Contact",
      href: "mailto:info@example.com",
      icon: <Mail size={16} />,
    },
    { label: "GitHub", href: "https://github.com", icon: <Github size={16} /> },
  ],
}: FooterProps) => {
  return (
    <footer className="w-full h-[60px] bg-[#1e2844] text-white py-2 px-4 flex items-center justify-between">
      <div className="text-sm">
        &copy; {year} {companyName}. All rights reserved.
      </div>

      <div className="flex items-center space-x-4">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <Separator orientation="vertical" className="h-4 bg-gray-400" />
            )}
            <a
              href={link.href}
              className="text-sm flex items-center hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{link.label}</span>
              {link.icon && <span className="ml-1">{link.icon}</span>}
            </a>
          </React.Fragment>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
