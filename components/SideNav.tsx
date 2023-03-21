'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function SideNav() {
  const pathname = usePathname()
  const { data: session, status } = useSession()

  return (
    <div className='bg-primary-content flex-initial pl-4 min-w-[200px] hidden md:block min-h-full'>
      <nav className='h-80 w-full'>
        <ul className='mt-6 flex flex-col justify-around h-full text-right'>
          <li>
            <Link
              href='/'
              className={`hover:text-accent pr-4 justify-end  border-primary ${
                pathname === '/' ? 'border-r-8' : ''
              }`}
            >
              <span>New & Trending</span>
            </Link>
          </li>
          <li>
            <Link
              href='/top-2022'
              className={`hover:text-accent pr-4 justify-end  border-primary ${
                pathname === '/top-2022' ? 'border-r-8' : ''
              }`}
            >
              <span>Top Rated of 2022</span>
            </Link>
          </li>
          <li>
            <Link
              href='/most-antecipated'
              className={`hover:text-accent pr-4 justify-end  border-primary ${
                pathname === '/most-antecipated' ? 'border-r-8' : ''
              }`}
            >
              <span>Most Antecipated</span>
            </Link>
          </li>
          <li>
            <Link
              href='/all-time-top'
              className={`hover:text-accent pr-4 justify-end  border-primary ${
                pathname === '/all-time-top' ? 'border-r-8' : ''
              }`}
            >
              <span>All Time Best Rated</span>
            </Link>
          </li>
          {status === 'authenticated' && (
            <li>
              <Link
                href='/favorite-games'
                className={`hover:text-accent pr-4 justify-end  border-primary ${
                  pathname === '/favorite-games' ? 'border-r-8' : ''
                }`}
              >
                <span>Favorite Games</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}

SideNav.auth = true

// This alternative solution allows for showing a loading state on the initial check and every page transition afterward will be client-side, without having to check with the server and regenerate pages.
