import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

export default function UpcomingWebinar() {

    const futureWebinars = [
        {
            "title": "Neon Dreams: Synthwave Revival",
            "description": "A retro-futuristic synthwave journey blending 80s nostalgia with modern electronic beats. Pulsating basslines and shimmering arpeggios set the tone for neon-lit nights. Perfect for late-night drives or immersive focus sessions.",
            "slug": "neon-dreams-synthwave-revival",
            "isFeatured": true
        },
        {
            "title": "Acoustic Whispers: Unplugged Sessions",
            "description": "Raw, intimate acoustic performances featuring soulful vocals and stripped-down melodies. Recorded in rustic settings for an authentic, emotional experience. Ideal for quiet reflection or cozy evenings.",
            "slug": "acoustic-whispers-unplugged-sessions",
            "isFeatured": false
        },
        {
            "title": "Midnight Grooves: Jazz & Lo-Fi Fusion",
            "description": "Smooth jazz meets chilled lo-fi beats in this late-night relaxation album. Warm saxophones, vinyl crackles, and mellow rhythms create a soothing atmosphere. Best enjoyed with dim lights and a cup of coffee.",
            "slug": "midnight-grooves-jazz-lofi-fusion",
            "isFeatured": true
        },
        {
            "title": "Electric Sunrise: Uplifting EDM Anthems",
            "description": "High-energy EDM tracks designed to ignite your day with powerful drops and euphoric melodies. Featuring soaring vocals and festival-ready beats, this album is a burst of electrifying positivity. Turn it up for workouts or sunrise motivation.",
            "slug": "electric-sunrise-edm-anthems",
            "isFeatured": true
        },
        {
            "title": "Desert Echoes: Ambient World Music",
            "description": "A hypnotic blend of ambient textures and traditional instruments from distant cultures. Ethereal oud melodies and rhythmic hand drums transport you to vast, serene landscapes. Ideal for meditation or creative inspiration.",
            "slug": "desert-echoes-ambient-world",
            "isFeatured": false
        },
        {
            "title": "Rust & Gold: Vintage Rock Ballads",
            "description": "Gritty, soulful rock anthems with roaring guitars and raw, emotive vocals. Inspired by 70s classics but infused with modern edge, this album is for late-night bonfires and highway cruises. Turn the volume up and let it ride.",
            "slug": "rust-and-gold-vintage-rock",
            "isFeatured": true
        }
    ]

    return (
        <div className='bg-cyan-950/55 p-4 flex flex-col justify-center items-center'>
            <div className='flex flex-col my-2 justify-center items-center'>
                <p className='text-cyan-600 mx-2 text-center font-semibold'>
                    FEATURED WEBINARS
                </p>
                <h1 className='sm:text-5xl my-2 mx-auto text-3xl text-center'>
                    Enhance Your Musical Journey
                </h1>
            </div>
            <div className='mt-10'>
                <HoverEffect
                    items={futureWebinars.map(webinar => {
                        return{
                            title: webinar.title,
                            description: webinar.description,
                            link: "/",
                        }
                    })}
                />
            </div>
            <div className='my-2'>
                <Link href={"/courses"}
                    className='p-4 rounded-2xl bg-white text-cyan-600 font-semibold'>
                    Explore more
                </Link>
            </div>
        </div>
    )
}
