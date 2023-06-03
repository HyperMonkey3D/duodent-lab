import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/sections/Hero'
import Us from '@/components/sections/Us'


export default function Home() {
  return (
    <main>
      <Hero />
      <Us />
    </main>
  )
}
