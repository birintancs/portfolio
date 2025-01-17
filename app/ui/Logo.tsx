import { Poppins } from "next/font/google"
import { colors } from "./colors"

const poppins = Poppins({ weight: ['400', '500', '600'] })

export default function Logo() {
    return (
    <a href="" className={`${poppins.className} font-medium text-base text-[${colors.titleColor}]`}>
        Birintan <span className={`text-orange-400`}>Kandasamy</span>
    </a>
    )
}

// text-[#00C7BA]