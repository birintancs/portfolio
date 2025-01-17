import { Poppins } from "next/font/google"
import Hero from "./ui/Hero"
import Skill from "./ui/Skills"
import Projects from "./ui/Projects"
import Education from "./ui/Education"
import Contact from "./ui/ContactMe"


const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin']})

export default function Page() {
  return (
    <>
      <Hero/>
      <Skill/>
      <Projects/>
      <Education/>
      <Contact/>
    </>
  )
}