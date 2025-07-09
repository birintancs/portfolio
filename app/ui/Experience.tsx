'use client'

import { useState } from 'react'

type CompanyKey = 'Service Ontario' | 'KGS Research'

interface Experience {
  role: string
  company: string
  date: string
  bullets: string[]
}

const experiences: Record<CompanyKey, Experience> = {
  "Service Ontario": {
    role: 'Customer Service Representative',
    company: 'Service Ontario',
    date: 'Jan 2025 – June 2025',
    bullets: [
      'Delivered front-line support to a high volume of clients and providing accurate information across various government programs and services in a fast-paced, high-pressure environment.',
      'Resolved customer issues by using probing techniques, assessing situations effectively, and applying relevant rules and procedures with a focus on professionalism, clarity, and empathy.',
      ' Maintained accurate records and managed sensitive customer information using databases ensuring organized administrative support'
    ]
  },
  "KGS Research": {
    role: 'Customer Service Representative',
    company: 'KGS Research',
    date: 'Jun 2020 – Oct 2020',
    bullets: [
      'Demonstrated exceptional communication skills by effectively engaging and assisting clients, resulting in improved customer satisfaction and resolution times',
      'Efficiently conducted a high volume of calls, utilizing troubleshooting skills to quickly resolve issues, ensuring minimal downtime and maximizing customer satisfaction',
      'Developed and deployed a Python script to detect and automatically terminate voicemail calls, optimizing call handling and increasing efficiency by 66 percent, resulting in a higher number of successful client engagements'
    ]
  }
}

export default function ExperienceSection() {
  const [activeCompany, setActiveCompany] = useState<CompanyKey>('Service Ontario')

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
