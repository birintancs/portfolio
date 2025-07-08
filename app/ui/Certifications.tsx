'use client'

import Image from 'next/image'

const certifications = [
  { name: 'Comptia A+', image: '/certs/APlus.png' },
  { name: 'Comptia Security+', image: '/certs/securityPlus.png' },
  { name: 'Comptia Network+', image: '/certs/networkPlus.png' },
  { name: 'ITIL Foundations 4', image: '/certs/ITIL.png' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-7xl mx-auto py-20 px-6">
      {/* Section Title */}
      <h2 className="text-xl text-orange-400 mb-12 flex items-center gap-4">
        <span className="text-sm text-orange-400">04.</span>
        <span className="text-gray-100 font-semibold">Certifications</span>
        <div className="flex-grow h-px bg-gray-600"></div>
      </h2>

      {/* Invitation Text */}
      <p className="text-gray-400 text-base md:text-lg mb-12">I’ve completed various certifications to strengthen my skills and continue to pursue new learning opportunities.</p>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-center justify-center p-3 bg-bg2 rounded-lg hover:scale-105 transition">
            <Image
              src={cert.image}
              alt={cert.name}
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
