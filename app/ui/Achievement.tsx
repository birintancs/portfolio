import { Poppins } from "next/font/google"
import { Montserrat } from 'next/font/google';
import { AcademicCapIcon } from "@heroicons/react/24/outline";


const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin']})
const montserrat = Montserrat({weight: ['700'], subsets: ['latin'] })

export default function Achievement({title, subtitle, date, icon}: {title: String, subtitle: String | null, date: String, icon: React.RefAttributes<SVGSVGElement>}) {
    return (
        <div className={`${poppins.className} flex flex-row items-center gap-3`}>
            <div className="rounded-full border-[4px] sm:border-[6px] border-orange-400 w-10 h-10 sm:w-16 sm:h-16 bg-white flex justify-center items-center">
                <AcademicCapIcon className="w-6 h-6 sm:w-10 sm:h-10 text-orange-400"/>
            </div>
            <div className="flex flex-col items-start w-[205px] sm:w-[275px] md:w-[455px]">
                <h3 className="font-semibold text-base sm:text-xl">{title}<span className="text-orange-400 text-sm md:text-base hidden md:inline-block">| Sept 2019 - Aug 2024</span></h3>
                <span className="text-sm sm:text-md">Wilfrid Laurier University</span>
                <p><span className="text-orange-400 text-sm sm:text-base md:hidden">Sept 2019 - Aug 2024</span></p>
            </div>
        </div>
    )
}
//