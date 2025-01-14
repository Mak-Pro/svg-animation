'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import AccessButton from '@/components/button'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Header() {

  const [top, setTop] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBenchmarksDropdownOpen, setIsBenchmarksDropdownOpen] = useState(false);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      if (window.pageYOffset > 10) {
        setTop(false)
      } else {
        setTop(true)
      } 
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className="hidden sm:block fixed top-2 md:top-6 z-30 px-4 sm:px-6 w-[calc(100vw-2rem)]" data-aos="fade-in-down" data-aos-delay="250">
      <div className="px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`flex justify-between items-center h-14 border border-transparent rounded-lg px-3 transition-all duration-300 ${!top && 'bg-white border-zinc-200 shadow-lg'}`}>
            <div className="flex items-center shrink-0 mr-4">
              <Link className="flex items-center justify-center bg-white w-8 h-8 rounded shadow shadow-zinc-950/20 mr-3" href="/">
                <Image src={Logo} width={24} height={24} alt="Logo" />
              </Link>
              <Link href="/">
                <span className={`text-xl font-bold text-transparent bg-clip-text ${
                  !top 
                    ? 'bg-gradient-to-r from-black to-black' 
                    : 'bg-gradient-to-r from-white via-white to-white/80'
                }`}>CarefulAI</span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6 items-center">
              <div 
                className="relative inline-block text-left"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="inline-flex items-center text-sm font-medium text-zinc-600 hover:text-zinc-900">
                  Products
                  <ChevronDownIcon className="ml-1 h-4 w-4" aria-hidden="true" />
                </button>

                {isDropdownOpen && (
                  <div 
                    className="absolute left-0 z-10 mt-0 w-40 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    style={{ marginTop: '0.5rem' }}
                  >
                    <div className="absolute h-3 w-full -top-3"></div>
                    <div className="py-1">
                      <Link
                        href="/products/invalidity"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        Invalidity Search
                      </Link>
                      {/* <Link
                        href="/products/invalidity"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        FTO / Patentability Search
                      </Link> */}
                    </div>
                    
                  </div>
                )}
              </div>

              <div 
                className="relative inline-block text-left"
                onMouseEnter={() => setIsBenchmarksDropdownOpen(true)}
                onMouseLeave={() => setIsBenchmarksDropdownOpen(false)}
              >
                <button className="inline-flex items-center text-sm font-medium text-zinc-600 hover:text-zinc-900">
                  Benchmarks
                  <ChevronDownIcon className="ml-1 h-4 w-4" aria-hidden="true" />
                </button>

                {isBenchmarksDropdownOpen && (
                  <div 
                    className="absolute left-0 z-10 mt-0 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    style={{ marginTop: '0.5rem' }}
                  >
                    <div className="absolute h-3 w-full -top-3"></div>
                    <div className="py-1">
                      <Link
                        href="/benchmarks/invalidity-search"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        Claim-based Search
                      </Link>
                      <Link
                        href="/benchmarks/invalidity-charting"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        Claim Charting
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <a 
                href={process.env.NEXT_VANTA_URL} 
                target="_blank"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900"
              >
                Security
              </a>
            </div>

            <nav className="flex">
              <ul className="flex justify-end flex-wrap items-center">
                <li>
                  <AccessButton short={true} />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
