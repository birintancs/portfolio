import { useState } from "react";

type TabKey = "programming" | "it";

const skills: Record<TabKey, string[]> = {
  programming: [
    "Python",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind",
    "HTML",
    "CSS",
    "PostgreSQL",
    "MongoDB",
    "Figma"
  ],
  it: [
    "Windows Firewall",
    "Nessus",
    "SIEM",
    "Splunk",
    "NMAP",
    "ServiceNow",
    "Configuration Manager",
    "Jira",
    "Antivirus Software"
  ]
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<TabKey>("programming");

  return (
    <div className="max-w-2xl p-6 rounded-2xl bg-bg3 mt-12 shadow-2xl">
      <h2 className="text-2xl font-semibold text-white mb-4">Technical Proficiencies</h2>

      <div className="flex border-gray-600 mb-6">
        <button
          onClick={() => setActiveTab("programming")}
          className={`px-4 py-2 text-sm font-medium border-b-2 ${
            activeTab === "programming"
              ? "border-primary text-primary"
              : "text-gray-300 hover:text-primary border-gray-300 hover:border-primary"
          }`}
        >
          Programming
        </button>
        <button
          onClick={() => setActiveTab("it")}
          className={`ml-4 px-4 py-2 text-sm font-medium border-b-2 ${
            activeTab === "it"
              ? "border-primary text-primary"
              : "text-gray-300 hover:text-primary hover:border-primary border-gray-300"
          }`}
        >
          I.T. & Security
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills[activeTab].map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm font-medium bg-gray-700 text-white rounded-full hover:bg-primary transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
