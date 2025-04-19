"use client";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function ScrollingCarts() {

  const items = [
    {
      quote: "Music is the art of thinking with sounds, where emotions become audible and ideas transform into vibrations that resonate with the human soul. A great composition speaks what cannot be expressed in words but must not remain silent.",
      title: "The Philosophy of Sound",
      name: "Jules Combarieu"
    },
    {
      quote: "Music is the universal language of mankind that transcends borders, cultures, and time. When political systems collapse, religions evolve, and empires fade, the songs of a people endure as living history and collective memory.",
      title: "The Eternal Language",
      name: "Henry Wadsworth Longfellow"
    },
    {
      quote: "To compose is to remember music that has never been written. The greatest works emerge when we stop trying to create sounds and instead become conduits for the music that already exists in the universe, waiting to be discovered.",
      title: "On Composition",
      name: "Robert Schumann"
    },
    {
      quote: "The blues isn't just a genre—it's the raw documentation of human resilience. Every bent note carries centuries of stories, every moan holds generations of pain, and every riff declares an unbreakable spirit that oppression could never silence.",
      title: "The Soul of Blues",
      name: "B.B. King"
    },
    {
      quote: "Jazz is the music of freedom—not just in its improvisation, but in its demand that every musician listen deeply to others while fearlessly asserting their own voice. It's democracy in its purest sonic form.",
      title: "The Democracy of Jazz",
      name: "Wynton Marsalis"
    },
    {
      quote: "A symphony is a conversation across centuries. When we perform Beethoven today, we aren't recreating the past—we're collaborating with a genius who speaks to us through time, his ideas evolving with each new interpretation.",
      title: "Timeless Dialogues",
      name: "Leonard Bernstein"
    },
    {
      quote: "Hip-hop didn't just create music—it built a cultural ecosystem from turntables and poetry. It taught us that innovation isn't about having resources, but about seeing potential where others see lack, and creating art from what the world throws away.",
      title: "The Alchemy of Hip-Hop",
      name: "Questlove"
    },
    {
      quote: "The silence between notes is where the music breathes. Great performers understand that what you don't play is as important as what you do—the spaces where listeners complete the melody in their minds.",
      title: "The Power of Silence",
      name: "Claude Debussy"
    }
  ]

  return (
    <div className={cn(
      "relative inset-0 h-[44rem] flex flex-col justify-center items-center",
      "[background-size:40px_40px]",
      "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
      "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
    )}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="text-center z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text my-8 text-4xl font-bold text-transparent sm:text-7xl">
        Hear Our Harmony: Voice of Success
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <InfiniteMovingCards
          items={items}
          direction="right"
          speed="fast"
        />
      </div>
    </div>
  )
}
