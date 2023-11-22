import React from 'react'
import { Link } from '@inertiajs/react'

export default function Navbar() {
  return (
    <div className="bg-black/60 p-4 w-full text-white flex gap-3 justify-center rounded-b-md">
      <Link href="/daily" className="w-1/4 h-8 pt-1 bg-white text-black text-center rounded-full font-medium hover:bg-zinc-800 hover:text-white">Daily</Link>
      <Link href="/weekly" className="w-1/4 h-8 pt-1 bg-white text-black text-center rounded-full font-medium hover:bg-zinc-800 hover:text-white">Weekly</Link>
      <Link href="/monthly" className="w-1/4 h-8 pt-1 bg-white text-black text-center rounded-full font-medium hover:bg-zinc-800 hover:text-white">Monthly</Link>
    </div>
  )
}