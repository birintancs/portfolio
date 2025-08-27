'use client'

import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto pt-20 pb-40 px-6 text-center">
      {/* Heading */}
      <h2 className="text-xl text-orange-400 mb-6 flex items-center justify-center gap-4">
        <span className="text-sm text-orange-400">05.</span>
        <span className="text-gray-100 font-semibold">Get In Touch</span>
      </h2>

      {/* Invitation Text */}
      <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto">
        I’m currently open to entry-level IT roles and excited to grow in cybersecurity. Whether you have an opportunity, a project, or just want to connect, feel free to reach out! I’ll do my best to respond promptly.
      </p>

      {/* Contact Info */}
      <div className="flex flex-col gap-6 text-lg text-gray-300 items-center">
        <div>
          <span className="font-semibold">Email:</span>{' '}
          <Link
            href="mailto:birintancs@gmail.com"
            className="text-orange-400 hover:underline"
          >
            birintancs@gmail.com
          </Link>
        </div>

        <div>
          <span className="font-semibold">Phone:</span>{' '}
          <Link
            href="tel:647-571-5182"
            className="text-orange-400 hover:underline"
          >
            647-571-5182
          </Link>
        </div>

        <div>
          <span className="font-semibold">LinkedIn:</span>{' '}
          <Link
            href="https://www.linkedin.com/in/birintank/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:underline"
          >
            linkedin.com/in/birintank/
          </Link>
        </div>
      </div>

      {/* Optional Footer Text */}
      <p className="text-gray-500 text-sm mt-16">
        &copy; 2025 Birintan Kandasamy
      </p>
    </section>
  )
}
