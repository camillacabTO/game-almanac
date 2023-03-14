'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SideNav() {
  const pathname = usePathname()

  return (
    <div className='bg-primary-content flex-initial pl-4 min-w-[200px] hidden md:block min-h-full'>
      <nav className='h-56 w-full'>
        <ul className='mt-6 flex flex-col justify-around h-full text-right'>
          <li>
            <Link
              href='/'
              className={`hover:text-accent pr-4 justify-end  border-primary ${
                pathname === '/' ? 'border-r-8' : ''
              }`}
            >
              <span>Top Rated Games</span>
            </Link>
          </li>
          <li>
            <Link
              href='/new-games'
              className={`hover:text-accent pr-4 justify-end  border-primary ${
                pathname === '/new-games' ? 'border-r-8' : ''
              }`}
            >
              <span>New Releases</span>
            </Link>
          </li>
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
        </ul>
      </nav>
    </div>
  )
}
