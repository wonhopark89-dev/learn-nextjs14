'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);
  console.log(path);
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
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </nav>
  );
}
