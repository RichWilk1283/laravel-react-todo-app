import React from 'react';
import Navbar from '../components/Navbar';

export default function Layout({children}) {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <article>
        {children}
      </article>
    </main>
  )
}
