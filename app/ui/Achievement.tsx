import { Poppins } from "next/font/google"
import { ReactNode } from "react"


const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin']})

export default function Achievement({title, subtitle, date, icon}: {title: string, subtitle: string | null, date: string, icon: ReactNode}) {
    return (
        <div className={`${poppins.className} flex flex-row items-center gap-3`}>
            <div className="rounded-full border-[4px] sm:border-[5px] border-orange-400 w-10 h-10 sm:w-16 sm:h-16 bg-white flex justify-center items-center">
                {icon}
            </div>
            <div className="flex flex-col items-start w-[205px] sm:w-[275px] md:w-[455px]">
                <h3 className="font-semibold text-base sm:text-xl">{title}<span className="text-orange-400 text-sm md:text-base hidden md:inline-block">| {date}</span></h3>
                {subtitle && <span className="text-sm sm:text-md">{subtitle}</span>}
                <p><span className="text-orange-400 text-sm sm:text-base md:hidden">{date}</span></p>
            </div>
        </div>
    )
}
//