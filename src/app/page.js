'use client'

import { useEffect, useState } from 'react'

const images = [
  '/images/index/joback-fott-01.jpg',
  '/images/index/joback-fott-02.jpg',
]

export default function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') {
        setIndex((prev) => (prev + 1) % images.length)
      }
      if (e.key === 'ArrowLeft') {
        setIndex((prev) => (prev - 1 + images.length) % images.length)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <main className="w-screen h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`max-w-[90vw] max-h-[90vh] absolute transition-opacity duration-0 ${
            i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
    </main>
  )
}