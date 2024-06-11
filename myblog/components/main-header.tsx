import Link from 'next/link';
import logo from '@/assets/image.png';

import '@/style/header-style.css'

export default function Header() {
  return (
    <header className='flex header justify-between mt-5' >
      <Link href="/">
        <img src={logo.src} alt="myBlog Image" />
      </Link>
      <nav className='my-auto'>
        <ul>
          <li className='bg-[#cad2c5] px-5 py-2 rounded-lg hover:bg-[#84a98c]'>
            <Link  href="/new-post" className='font-mono text-lg font-medium ' >New Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
