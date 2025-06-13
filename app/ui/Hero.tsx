import { Poppins } from "next/font/google"
import Link from 'next/link'

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin']})

// flex h-[calc(100vh-5rem)] bg-gray-900 text-white w-full justify-center items-center text-center md:w-3/5 sm:w-full md:pl-48 md:pt-52 md:items-start md:justify-start md:text-start
// px-7 md:px-10 lg:px-22 w-full
export default function HeroSection() {
    return (
        <section id="Home" className="flex flex-row">
            <section className={`${poppins.className} flex flex-col h-[calc(95vh-5rem)] bg-bg1 text-red sm:w-full lg:w-4/6 2xl:w-3/5 justify-center items-center text-center lg:text-left gap-10`}>
                <div className="w-[150px] h-[150px] bg-white rounded-full lg:hidden">Photo Here</div>
                <div className="flex flex-col items-center max-w-lg lg:items-start gap-1">
                    {/* Greeting */}
                    <p className="text-lg lg:text-xl font-medium">Hello,</p>
                    
                    {/* Main Heading */}
                    <h1 className="text-3xl lg:text-5xl font-bold text-orange-400">
                        I’m Birintan
                    </h1>
                    
                    {/* Subheading */}
                    <p className="text-medium font-medium w-1/2">
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
            <section className="hidden lg:block w-2/6 2xl:w-2/5 bg-orange-400 relative">
                <div className="w-[300px] h-[400px] bg-white absolute top-1/2 left-[-150px] transform -translate-y-1/2">Photo Here</div>
            </section>
            {/* <div className="bg-white w-32 h-32 absolute bottom-0 left-3/4"></div> */}
        </section>

    );
  }
  