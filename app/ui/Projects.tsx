'use client'

import Image from 'next/image'

type Project = {
  title: string
  description: string
  tags: string[]
  image: string
  links: { label: string; url: string }[]
}

const projects: Project[] = [
  {
    title: 'Spotify Profile',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, tracks, recently played songs, and more. Create and save new playlists of recommended tracks.',
    tags: ['React', 'Express', 'Spotify API', 'Heroku', 'Styled Components'],
    image: '/spotify.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/yourusername/spotify-profile' },
      { label: 'Live Site', url: 'https://spotify-profile.com' }
    ]
  },
  {
    title: 'Halcyon Theme',
    description:
      'A minimal, dark blue theme for VS Code, Atom, iTerm2, and more. Available on multiple theme marketplaces.',
    tags: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
    image: '/halcyon.png',
    links: [
      { label: 'Marketplace', url: 'https://marketplace.visualstudio.com/' }
    ]
  }
]

export default function ProjectSection() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-xl text-text3 font-semibold mb-12">
        <span className="text-sm text-primary">03.</span> Projects
      </h2>

      <div className="flex flex-col space-y-20">
        {projects.map((project, index) => (
          <div key={index} className={`flex flex-col lg:flex-row items-center gap-20 lg:items-start ${index % 2 === 0 ? '' : 'lg:flex-row-reverse' }`}>
            {/* Image */}
            <div className="w-10/12 lg:w-5/12 relative bg-white order-2 lg:order-none">
              <Image
                src={''}
                alt={project.title}
                width={800}
                height={450}
                className="rounded-md shadow-xl object-cover"
              />
              <div className='absolute top-0 left-0 lg:w-full bg-orange-500 lg:h-full z-100 opacity-45 hover:opacity-0 hover:cursor-pointer' ></div>
            </div>

            {/* Text Content */}
            <div className={`lg:w-1/2 text-center lg:text-left space-y-4 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
              <p className="text-sm text-primary">Featured Project</p>
              <h3 className="text-2xl text-white font-semibold">{project.title}</h3>
              <p className="bg-bg3 px-5 py-7 text-st text-text5 text-sm text-start">{project.description}</p>
              <div className={` flex flex-wrap gap-3 text-xs text-white justify-center lg:justify-start ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
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
