import React from 'react';
import { Poppins } from "next/font/google"
import { Montserrat } from 'next/font/google';
import ProjectItem from './ProjectItem';


const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'], preload: true })
const montserrat = Montserrat({weight: ['700'], subsets: ['latin'], preload: true })

const projects = [
  {
    title: 'Vulnerability Management',
    tools: ['HyperV', 'Nessus', 'Nmap', 'Wireshark', 'Microsoft Configuration Manager'],
    description:
      'Built a virtual lab environment to simulate and address real-world vulnerabilities in a Windows 10 machine with deprecated software. Conducted vulnerability assessments, remediated vulnerabilities, and validated system compliance.',
    repo: new URL('https://github.com/birintancs/Vulnerability-Management-Project')
  },
  {
    title: 'Active Directory',
    tools: ['Active Directory', 'PowerShell', 'Splunk', 'Sysmon', 'ServiceNow'],
    description:
      'Configured and managed Active Directory, automated user creation with PowerShell, and deployed Splunk for security monitoring. Simulated cyberattacks to enhance incident detection and response workflows.',
      repo: new URL('https://github.com/birintancs/ActiveDirectory-Project')
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
            <ProjectItem key={index} Title={project.title} Tools={project.tools} Desc={project.description} Repo={project.repo}/>
          ))}
        </div>

      </div>
    </section>
  )
}
//