import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'
import Link from 'next/link'

function HeroSection() {
    return (
        <div
            className='
            px-4 mx-4 h-[50rem] sm:h-[44rem] flex flex-col justify-center items-center'
        >
            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
            />
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-5xl sm:text-6xl text-white/30 text-center' >
                    Master the art of music
                </h1>
                <p className='mt-4 text-base md:text-lg max-w-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam id eum minus! Atque, sequi ad. Lorem ipsum dolor
                    sit amet consectetur, adipisicing elit. Maiores, ut! music is heart tp listen
                </p>
                <div className='mt-4'>
                    <Link href={"/courses"}>
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white
                         border-neutral-200 dark:border-slate-800"
                        >
                            Explore courses
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default HeroSection