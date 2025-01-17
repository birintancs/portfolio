import { Poppins } from "next/font/google"
import { Montserrat } from 'next/font/google';
import Achievement from "./Achievement";
import {AcademicCapIcon} from "@heroicons/react/24/outline"

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'], preload: true })
const montserrat = Montserrat({weight: ['700'], subsets: ['latin'], preload: true })

const Achievements = [
    {
        title: 'BSc in Computer Science ',
        subtitle: 'Wildfred Laurier University',
        date: 'Sept 2019 - Aug 2024',
        icon: <AcademicCapIcon />
    },
    {
        title: 'Comptia Security+ ',
        subtitle: null,
        date: 'December, 2024',
        icon: <AcademicCapIcon />
    }

]

export default function Education() {
    return (
        <section id="Education" className={`${poppins.className} py-16 md:py-24 bg-[#1E2A44]`}>
            <div className="text-center">
                <h2 className={`text-3xl md:text-5xl font-extrabold mb-12 md:mb-20 text-white ${montserrat.className} tracking-wide`}>Education</h2>
                <div className="flex flex-col w-full gap-10 md:gap-14 content-start items-center">
                    {Achievements.map((acheivement, index) => (
                        <div className="relative flex flex-col items-center" key={index}>
                            <Achievement title={acheivement.title} subtitle={acheivement.subtitle} date={acheivement.date} icon={acheivement.icon}/>
                            {index < (Achievements.length - 1) && (
                                <div className="hidden md:block absolute top-full left-5 md:left-7 h-11 md:h-16 w-[4px] md:w-[6px] bg-orange-400"></div>
                            )}
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}