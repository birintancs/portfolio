'use client'
import { Typewriter } from "react-simple-typewriter"
import HeroImage from "./HeroImage"
import TechStack from "./TechStack"


export default function HeroSection() {
  return (
    <section
      id="Home"
      className="
        flex flex-col items-center text-center pt-32 px-6 min-h-[calc(95vh)] w-full bg-bg2
        md:pt-40
        lg:flex-row lg:items-start lg:justify-between lg:text-start lg:px-16 lg:pt-52 lg:gap-16 lg:max-w-[1600px] lg:mx-auto
        2xl:px-32
        ">

      {/* Left Side: Text + TechStack */}
      <div className="flex flex-col max-w-2xl order-2 mt-6 md:mt-10 lg:order-1 lg:mt-0 lg:flex-1">
        <div>
          <h1 className="text-text3 font-medium text-sm md:text-base lg:text-lg">Hi, my name is</h1>
        </div>
        <div>
          <h2 className="text-primary font-bold text-4xl md:text-5xl lg:text-6xl mb-2">Birintan Kandasamy</h2>
        </div>
        <div>
          <h3 className="text-text4 font-semibold text-2xl md:text-3xl lg:text-4xl mb-6">I am a{``} <span className="text-primary"> <Typewriter 
                words={['Full Stack Developer', 'Aspiring IT Professional', 'Cybersecurity Enthusiast']}
                loop={0} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={1000}
                /> </span></h3>
        </div>
        <div>
          <p className="text-text5 font-normal text-base md:text-lg lg:text-xl mb-6">
            My professional experience includes leveraging analytical thinking and scripting
            skills to optimize workflows and improve efficiency. Enthusiastic about IT security
            and systems management, I am eager to apply my technical skills and dedication to solving
            complex challenges in real-world IT settings.
          </p>
        </div>
        <div>
          <button className="border-red-100 border-2 p-4 rounded-3xl">Call to Action</button>
        </div>

        {/* TechStack*/}
        <div className="mt-10">
          <TechStack />
        </div>
      </div>

      {/* Right Side: Hero Image */}
      <div className="order-1 lg:order-2 flex-shrink-0">
        <HeroImage />
      </div>
    </section>
  )
}
