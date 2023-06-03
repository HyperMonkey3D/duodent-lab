import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/sections/Hero'
import Us from '@/components/sections/Us'
import HowWeHelp from '@/components/sections/HowWeHelp'
import Trust from '@/components/sections/Trust'

export default function Home() {
  return (
    <main>
      <Hero />
      <Us />
      <HowWeHelp />
      <Trust />
    </main>
  )
}
