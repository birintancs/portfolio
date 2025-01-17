import Nav from "@/app/ui/Nav"
import Logo from "./Logo"
// bg-[#2B2E3B]
// bg-[#1B212F]
export default function Header() {
  return (
    <header className="sticky top-0 flex flex-row items-start justify-between mx-auto z-20 xl:items-center bg-gray-850 p-4 md:px-10 lg:px-22 bg-gray-900 opacity-95" >
        <Logo/>
        <Nav/>
        {/* Hero */}
    </header>
  )
}