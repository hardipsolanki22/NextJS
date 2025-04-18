"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

export default function WhyChooseUs() {

  const content = [
    {
      "title": "The Art of Sampling: From Hip-Hop to EDM",
      "description": "How producers like J Dilla, The Avalanches, and Kanye West transformed obscure vinyl records into groundbreaking beats. Uncover the legal and creative challenges of sampling and its impact on music production."
    },
    {
      "title": "Why Does Music Give Us Chills?",
      "description": "Neuroscientists reveal why certain songs trigger goosebumps—whether it's a soaring vocal climax, a sudden key change, or an unexpected harmony. Explore the psychology behind music-induced frisson and why it’s tied to emotional memories."
    },
    {
      "title": "The Untold Story of Motown Records",
      "description": "How Berry Gordy built a hit factory in Detroit, launching legends like Stevie Wonder, Marvin Gaye, and The Supremes. Learn Motown’s formula for catchy hooks, tight rhythms, and crossover appeal that broke racial barriers in the 1960s."
    },
    {
      "title": "How to Train Your Ear Like a Pro Musician",
      "description": "Develop perfect pitch (or relative pitch) with exercises to identify intervals, chords, and progressions by ear. Essential for singers, instrumentalists, and producers who want to play songs without sheet music."
    },
    {
      "title": "The Rise of Lo-Fi Hip-Hop: Why It’s the Sound of Relaxation",
      "description": "From Nujabes to YouTube’s 24/7 study beats, discover how lo-fi’s crackling vinyl samples, jazzy chords, and minimalist beats became the soundtrack for focus, sleep, and nostalgia."
    },

  ]

  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}
