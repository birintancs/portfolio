'use client'

const projects = [
  {
    title: 'Vulnerability Management Lab with SCCM & Security Tools',
    description:
      'Configured a virtual network using HyperV and Microsoft SCCM to demonstrate the full lifecycle of vulnerability management: detection, analysis, and remediation. Tools such as Nessus, Nmap, Wireshark, and SCCM were used to secure and monitor a Windows 10 client system.',
    tags: ['HyperV', 'SCCM', 'Nessus', 'Nmap', 'Wireshark', 'Kali Linux', 'Windows Server'],
    videoUrl: 'https://www.youtube.com/embed/6o9BL8Zkr80', 
    links: [
      { label: 'GitHub', url: 'https://github.com/yourusername/vulnerability-management-lab' } 
    ]
  },
  {
    title: 'Active Directory Security & Monitoring Lab',
    description:
      'Built and configured an Active Directory environment with Splunk, Sysmon, and ServiceNow to simulate advanced system administration and security monitoring. Demonstrated incident detection and response workflows using simulated attacks from Kali Linux.',
    tags: ['Active Directory', 'PowerShell', 'Splunk', 'Sysmon', 'ServiceNow', 'Kali Linux'],
    videoUrl: 'https://www.youtube.com/embed/t0k_98AuQvE',
    links: [
      { label: 'GitHub', url: 'https://github.com/yourusername/active-directory-lab' }
    ]
  }
]
// Trigger Redeploy
export default function ProjectSection() {
  return (
    <section id="projects" className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-xl text-orange-400 mb-12 flex items-center gap-4">
        <span className="text-sm text-orange-400">03.</span>
        <span className="text-gray-100 font-semibold">Projects</span>
        <div className="flex-grow h-px bg-gray-600"></div>
      </h2>

      <div className="flex flex-col space-y-20">
        {projects.map((project, index) => (
          <div key={index} className={`flex flex-col lg:flex-row items-center gap-20 lg:items-start ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>            
            <div className="w-10/12 lg:w-5/12 relative order-2 lg:order-none aspect-video">
              <iframe
                className="w-full h-full rounded-md shadow-xl"
                src={project.videoUrl}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className={`lg:w-1/2 text-center lg:text-left space-y-4 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
              <p className="text-sm text-primary">Featured Project</p>
              <h3 className="text-2xl text-white font-semibold">{project.title}</h3>
              <p className="bg-bg3 px-5 py-7 text-text5 text-sm text-start">{project.description}</p>
              <div className={`flex flex-wrap gap-3 text-xs text-white justify-center lg:justify-start ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                {project.tags.map((tag, i) => (
                  <span key={i} className='bg-orange-500 rounded-full px-3 py-1'>{tag}</span>
                ))}
              </div>
              <div className={`flex gap-4 justify-center lg:justify-start ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
