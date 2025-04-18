"use client"

import React from 'react'
import courseData from "../data/music.courses.json"
import { BackgroundGradient } from './ui/background-gradient'
import Link from 'next/link'

function FeatureCourses() {

    interface Course {
        id: number,
        title: string,
        instructor: string,
        level: string,
        duration: string,
        price: number,
        category: string,
        description: string,
        rating: number,
        image: string
    }

    return (
        <div className='flex flex-col items-center justify-center bg-cyan-950/55'>
            <div className='flex flex-col items-cente justify-center gap-3 mx-auto m-4'>
                <p className='text-lg mt-4 text-center text-cyan-600'>FEATUERE COURSES</p>
                <h1 className='text-center text-3xl sm:text-4xl font-semibold'>Learn With the Best</h1>
            </div>
            <div
                className=' flex flex-wrap justify-evenly m-4'
            >
                {
                    courseData.map((course: Course): React.ReactNode => (
                        <div key={course.id}
                            className='flex mb-4'
                        >
                            <BackgroundGradient
                                className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900'
                            >
                                <img
                                    src={course.image}
                                    alt={course.title}
                                />
                                <h2 className='m-2'>{course.title}</h2>
                                <p className='mb-2'>{course.description}</p>
                                <div className='flex justify-between'>
                                    <p className='text-md text-gray-500 text-center'>{course.price}</p>
                                    <p className='text-md text-gray-500'>{course.level}</p>
                                </div>
                            </BackgroundGradient>

                        </div>

                    ))
                }
            </div>
            <div className='my-5'>
                <Link href={"/courses"}
                    className='p-4 rounded-2xl bg-white text-cyan-600 font-semibold'>
                    View All Courses
                </Link>
            </div>
        </div >
    )
}

export default FeatureCourses
