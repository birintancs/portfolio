import Hero from "./ui/Hero"
import Projects from "./ui/Projects"
import Experience from "./ui/Experience"
import Certifications from "./ui/Certifications"
import Contact from "./ui/Contact"

// Trigger Redeploy
export default function Page() {
  return (
    <>
      <Hero/>
      <Experience/>
      <Projects/>
      <Certifications/>
      <Contact/>
      {/* <Education/> */}
      {/* <Contact/> */}
    </>
  )
}