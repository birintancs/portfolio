import React from 'react';
import { Poppins } from "next/font/google"
import { Montserrat } from 'next/font/google';
import { CodeBracketIcon, DevicePhoneMobileIcon, DocumentTextIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin']})
const montserrat = Montserrat({weight: ['700'], subsets: ['latin']})
console.log("Montserrat Config", montserrat)

const skills = [
    {
      category: 'Languages',
      items: ['Python', 'NoSQL (MongoDB)', 'SQL (Postgre)'],
      icon: <CodeBracketIcon className="w-9 h-9 white" />,
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
      icon: <ShieldCheckIcon className="w-9 h-9 white" />,
    },
    {
      category: 'Ticketing Systems',
      items: ['ServiceNow, Jira'],
      icon: <DocumentTextIcon className="w-9 h-9 white" />,
    },
    {
      category: 'Web Dev & Design',
      items: [
        'Responsive Web Design',
        'Javascript, CSS, HTML',
        'Next.js',
        'Tailwind',
        'React.js',
        'Figma for UI/UX Design',
      ],
      icon: <DevicePhoneMobileIcon className="w-9 h-9 white" />,
    },
  ];
// card-background: bg-[#1B212F]
const Skill: React.FC = () => {
  return (
    <section id="Skills" className={`py-16 md:py-24 bg-bg1 text-white ${poppins.className}`}> {/* Skills Section */}
      <div className="container mx-auto px-16 md:px-24 text-center">
        <h2 className={`text-3xl md:text-5xl font-extrabold mb-12 md:mb-20 text-white ${montserrat.className} tracking-wide`}>Skills</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skillCategory, index) => (
            <div key={index} className="relative pt-12 p-6 bg-bg2 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="absolute mb-4 rounded-full bg-orange-400 p-3 top-[-25px] left-8">
                    {skillCategory.icon}
                </div>
                <h3 className="text-xl font-semibold white mb-5 text-left">
                {skillCategory.category}
                <hr className='w-1/3 bg-orange-400 border-[1.5px] border-orange-400 mt-[6px]'/>
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