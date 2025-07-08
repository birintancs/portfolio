'use client'

import { useState } from 'react'

type CompanyKey = 'upstatement' | 'apple' | 'scout' | 'starry' | 'mullenlowe'

interface Experience {
  role: string
  company: string
  date: string
  bullets: string[]
}

const experiences: Record<CompanyKey, Experience> = {
  upstatement: {
    role: 'Lead Engineer',
    company: 'Upstatement',
    date: 'May 2018 – Present',
    bullets: [
      'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, and more.',
      'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements.',
      'Collaborate with designers, PMs, and engineers to transform creative concepts into production realities for clients and stakeholders.',
      'Provide leadership within engineering through close collaboration, knowledge shares, and mentorship.'
    ]
  },
  apple: {
    role: 'Software Engineer Intern',
    company: 'Apple',
    date: 'Jan 2017 – Dec 2017',
    bullets: [
      'Built internal tools to support hardware validation processes.',
      'Worked closely with cross-functional teams to ship reliable software for Apple’s product lines.'
    ]
  },
  scout: {
    role: 'Developer',
    company: 'Scout Studio',
    date: 'Sep 2016 – Dec 2016',
    bullets: [
      'Collaborated with designers to develop and ship client websites and apps.',
      'Improved site accessibility and performance across devices.'
    ]
  },
  starry: {
    role: 'Software Engineer Co-op',
    company: 'Starry',
    date: 'Jan 2016 – Aug 2016',
    bullets: [
      'Created internal dashboards to visualize network performance data.',
      'Automated monitoring processes to improve network reliability.'
    ]
  },
  mullenlowe: {
    role: 'Web Developer Intern',
    company: 'MullenLowe',
    date: 'Jun 2015 – Aug 2015',
    bullets: [
      'Assisted in building marketing sites and campaign pages.',
      'Maintained front-end codebase using HTML, CSS, and JavaScript.'
    ]
  }
}

export default function ExperienceSection() {
  const [activeCompany, setActiveCompany] = useState<CompanyKey>('upstatement')

  return (
    <section className="px-6 max-w-4xl mx-auto py-20 md:px-32 lg:px-6 h-[95vh] lg:h-[85vh] flex flex-col justify-start md:justify-center">
        <div className='md:px-0'>
            <h2 className="text-xl text-primary flex items-center gap-4 mb-8">
                <span className="text-sm text-primary">02.</span> <span className="text-gray-100 font-semibold">Experience</span>
                <div className="flex-grow h-px bg-gray-600"></div>
            </h2>

            <div className="flex flex-col md:flex-row gap-6 md
            :gap-12">
                {/* Left: Company List */}

                <div className="overflow-scroll flex md:flex-col md:space-x-0 text-sm md:text-base">
                {(Object.keys(experiences) as CompanyKey[]).map((company) => (
                    <button
                    key={company}
                    onClick={() => setActiveCompany(company)}
                    className={`text-left px-4 md:py-4 transition ${
                        activeCompany === company
                        ? 'md:border-l-2 border-b-2 md:border-b-0 border-primary text-primary md:bg-bg3'
                        : 'border-b-2 md:border-b-0 md:border-l-2 border-text5 text-text5 hover:text-primary hover:bg-bg3'
                    }`}
                    >
                    {experiences[company].company}
                    </button>
                ))}
                </div>

                {/* Right: Job Details */}
                <div>
                <h3 className="text-lg text-gray-100 font-medium">
                    {experiences[activeCompany].role}{' '}
                    <span className="text-primary">@ {experiences[activeCompany].company}</span>
                </h3>
                <p className="text-sm text-gray-400 mb-4">{experiences[activeCompany].date}</p>
                <ul className=" space-y-3 text-gray-300 max-w-2xl md:max-w-lg lg:max-w-2xl">
                    {experiences[activeCompany].bullets.map((bullet, i) => (
                    <li key={i} className="relative pl-6 text-gray-300 leading-relaxed before:content-['\25B6'] before:absolute before:left-0 before:top-0 before:text-primary">{bullet}</li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
