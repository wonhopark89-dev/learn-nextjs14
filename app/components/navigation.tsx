'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about-us'>About Us</Link>
        </li>
      </ul>
      <h2>{path}</h2>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </nav>
  );
}
