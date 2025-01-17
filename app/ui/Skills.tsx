import React from 'react';
import { Poppins } from "next/font/google"
import { Montserrat } from 'next/font/google';
import { CodeBracketIcon, DevicePhoneMobileIcon, DocumentTextIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'], preload: true })
const montserrat = Montserrat({weight: ['700'], subsets: ['latin'], preload: true})

const skills = [
    {
      category: 'Languages',
      items: ['Python', 'NoSQL (MongoDB)', ],
      icon: <CodeBracketIcon className="w-8 h-8 text-orange-400" />,
    },
    {
      category: 'Security Tools',
      items: [
        'Windows Firewall',
        'Antivirus Software',
        'Nessus',
        'SIEM',
        'Splunk',
        'Configuration Manager',
        'NMAP',
      ],
      icon: <ShieldCheckIcon className="w-8 h-8 text-orange-400" />,
    },
    {
      category: 'Ticketing Systems',
      items: ['ServiceNow'],
      icon: <DocumentTextIcon className="w-8 h-8 text-orange-400" />,
    },
    {
      category: 'Web Development & Design',
      items: [
        'Responsive Web Design',
        'Javascript, CSS, HTML',
        'Next.js',
        'Tailwind',
        'React.js',
        'Figma for UI/UX Design',
      ],
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-orange-400" />,
    },
  ];
// card-background: bg-[#1B212F]
const Skill: React.FC = () => {
  return (
    <section id="Skills" className={`py-16 md:py-24 bg-[#1E2A44] text-white ${poppins.className}`}>
      <div className="container mx-auto px-16 md:px-24 text-center md:min-h-[650px]">
        <h2 className={`text-3xl md:text-5xl font-extrabold mb-12 md:mb-20 text-white ${montserrat.className} tracking-wide`}>Skills</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skillCategory, index) => (
            <div key={index} className="p-6 bg-[#1B212F] rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="flex items-center justify-center mb-4">
                    {skillCategory.icon}
                </div>
                <h3 className="text-lg font-semibold text-orange-400 mb-5">
                {skillCategory.category}
                </h3>
                <ul className="text-gray-300 text-left pl-2">
                    {skillCategory.items.map((item, idx) => (
                    <li key={idx} className="mb-2 flex items-center space-x-2 justify-start">
                        <span className="inline-block w-2 h-2 bg-orange-400 rounded-full"></span>
                        <span className='text-white text-sm'>{item}</span>
                    </li>
                    ))}
                </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
