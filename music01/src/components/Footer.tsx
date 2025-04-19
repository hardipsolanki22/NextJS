import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='bg-black text-gray-400 p-10'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div>
          <p className='text-neutral-200 text-xl text-center mb-4'>About Us</p>
          <p className='text-center'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Animi cupiditate fuga sapiente eius molestiae, commodi nesciunt impedit. Facere, placeat autem.
          </p>
        </div>
        <div>
          <p className='text-neutral-200 text-xl text-center mb-4'>Quick Links</p>
          <div className='flex flex-col items-center justify-center gap-2'>
            <Link href="/">
              Home
            </Link>
            <Link href="/about">
              About
            </Link>
            <Link href="/courses">
              Courses
            </Link>
            <Link href="/conetnt">
              Content
            </Link>
          </div>
        </div>
        <div>
          <p className='text-neutral-200 text-xl text-center mb-4'>Follow Us</p>
          <div className='flex flex-col items-center justify-center gap-2'>
            <a href="/www.linkedin.com/hardipsolanki">
              LinkedIn
            </a>
            <a href="/www.github.com/hardipsolanki22">
              GitHub
            </a>
          </div>
        </div>
        <div>
          <p className='text-neutral-200 text-xl text-center mb-4'>Contact Us</p>
          <div className='flex flex-col items-center justify-center gap-2'>
            <p>
              Gujarat, India
            </p>
            <p>
              Gir Somanath 362560
            </p>
            <p>Email</p>
            <p>hardipsolanki2224@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer