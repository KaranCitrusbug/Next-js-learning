import Link from 'next/link';
import logo from '@/assets/image.png';

import '@/style/header-style.css'

export default function Header() {
  return (
    <header className='flex header px-3 justify-between pt-5 pb-2 sticky top-0 z-90 bg-[#354f52] ' >
      <Link href="/">
        <img src={logo.src} alt="myBlog Image" />
      </Link>
      <div className='my-auto xl:block lg:block  md:block sm:hidden hidden'>
        <h1 className='font-black text-4xl lg:text-4xl md:text-2xl text-[#dad7cd]'>Thoughts and Threads</h1>
      </div>
     
      <nav className='my-auto'>
        <ul className='flex'>
          <li className='xl:block lg:block md:block sm:hidden hidden'>
                  
          </li>
          <li className='bg-[#cad2c5] px-5 py-2 rounded-lg hover:bg-[#84a98c] ml-5'>
            <Link  href="/posts/create" className='font-mono text-lg font-medium ' >Add Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
