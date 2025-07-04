import { Poppins } from "next/font/google"
import Link from 'next/link'

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin']})

export default function HeroSection() {
    return (
        <section id="Home" className="flex flex-row h-[calc(95vh-3rem)]"> {/* Hero Section: */}
            {/* Left: */}
            <section className={`${poppins.className} flex bg-bg2 w-1/2 text-center lg:text-start justify-center items-center`}>
                <div className="flex flex-col items-center max-w-[300] lg:items-start gap-1 mx-auto">
                    {/* Greeting */}
                    <p className="text-lg lg:text-xl font-medium">Hello,</p>
                    
                    {/* Main Heading */}
                    <h1 className="text-3xl lg:text-5xl font-bold text-orange-400">
                        I’m Birintan
                    </h1>
                    
                    {/* Subheading */}
                    <p className="text-medium font-medium">
                    IT Professional, Cybersecurity Enthusiast & Software Developer
                    </p>
                    
                    {/* Button */}
                    <div>
                        <button className="uppercase px-6 py-3 mt-4 md:mt-8 text-lg font-semibold text-gray-900 bg-orange-400 rounded-[10px] shadow-lg hover:bg-orange-300 transition">
                            <Link href={'#Contact'}>Lets Talk</Link>
                        </button>
                    </div>

                </div>
            </section>
            {/* Right */}
            <section className="bg-bg2 w-1/2 flex justify-center items-center border border-black">
                <div className="w-5/6 h-5/6 bg-white"></div>

            </section>
        </section>

    );
  }
  