import React, { ReactNode } from 'react';
import { Poppins } from "next/font/google"
import { Montserrat } from 'next/font/google';
import ProjectItem from './ProjectItem';
import { UserGroupIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';


const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin']})
const montserrat = Montserrat({weight: ['700'], subsets: ['latin']})

const projects = [
  {
    title: 'Vulnerability Management',
    tools: ['HyperV', 'Nessus', 'Nmap', 'Wireshark', 'Microsoft Configuration Manager'],
    description:
      'Built a virtual lab environment to simulate and address real-world vulnerabilities in a Windows 10 machine with deprecated software. Conducted vulnerability assessments, remediated vulnerabilities, and validated system compliance.',
    repo: 'https://github.com/birintancs/Vulnerability-Management-Project',
    icon: <ShieldCheckIcon className="md:w-28 md:h-28 sm:w-10 sm:h-10 text-orange-400"/> as ReactNode
  },
  {
    title: 'Active Directory',
    tools: ['Active Directory', 'PowerShell', 'Splunk', 'Sysmon', 'ServiceNow'],
    description: 'Configured and managed Active Directory, automated user creation with PowerShell, and deployed Splunk for security monitoring. Simulated cyberattacks to enhance incident detection and response workflows.',
    repo: 'https://github.com/birintancs/ActiveDirectory-Project',
    icon: <UserGroupIcon className="md:w-28 md:h-28 sm:w-10 sm:h-10 text-orange-400"/> as ReactNode
  },
];
// bg-[#1B212F]
export default function Projects() {
  return (
    <section id='Projects' className={`${poppins.className} py-16 md:py-24 bg-[#1B212F]`}>
      <div className='container text-center mx-auto'>
        <h1 className={`text-3xl md:text-5xl font-extrabold mb-12 md:mb-20 text-white ${montserrat.className} tracking-wide`}>Projects</h1>
        <div className='flex flex-col gap-20 items-center'>
          {projects.map((project, index) => (
            <ProjectItem key={index} Title={project.title} Tools={project.tools} Desc={project.description} Repo={project.repo} Icon={project.icon}/>
          ))}
        </div>

      </div>
    </section>
  )
}
//