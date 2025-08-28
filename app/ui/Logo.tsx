import { Poppins } from "next/font/google"

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin']})

export default function Logo() {
    return (
    <a href="" className={`${poppins.className} font-medium text-base text-white`}>
        Birintan <span className={`text-orange-400`}>Kandasamy</span>
    </a>
    )
}

// text-[#00C7BA]