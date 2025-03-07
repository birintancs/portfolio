import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'
import { ReactNode } from 'react';
import Image from 'next/image';

export default function ProjectItem({Title, Tools, Desc, Repo, Icon}: {Title: string, Tools: Array<string>, Desc: string, Repo: string, Icon: ReactNode}) {
    console.log(typeof(Image))
    return (
        <div className="flex flex-row justify-center items-start gap-8">
            <div className="w-72 h-72 bg-white rounded-2xl hidden md:flex justify-center items-center relative shadow-md shadow-orange-400">
                {/* <Image src={Img} alt='Project Image' fill className='blur-[0.75px] brightne-'></Image> */}
                {Icon}
            </div>
            <div className="flex flex-col max-w-96 text-left h-full items-center md:items-start">
                <h1 className="text-orange-400 text-xl md:text-2xl font-medium self-center mb-3 md:mb-0 md:self-start">{Title}</h1>
                <span className="mb-6 text-sm italic text-center w-5/6 md:text-left">Tools Used: {Tools.join(', ')}</span>
                <p className="text-base lg:justify-self-end text-center w-5/6 md:text-left">{Desc}</p>
                <div className='flex flex-row gap-2 items-center text-orange-400 mt-3 font-semibold'>
                    <ArrowRightIcon className='w-6 h-6'/>
                    {/* <p className='cursor-pointer'>View Repo</p> */}
                    <Link href={Repo} rel='noopener noreferrer' target='_blank'>View Repo</Link>
                </div>
            </div>
        </div>
    )
}