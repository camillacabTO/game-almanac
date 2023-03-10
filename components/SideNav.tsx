import Link from 'next/link'

export default function SideNav() {
  return (
    <div className='bg-primary-content flex-initial pl-4 min-w-[200px] hidden md:block min-h-full'>
      <nav className='h-56 w-full'>
        <ul className='mt-6 flex flex-col justify-around h-full text-right'>
          <li>
            <Link
              href='/top-games'
              className='hover:text-accent pr-4 justify-end border-r-8 border-primary'
            >
              <span>Top Rated Games</span>
            </Link>
          </li>
          <li>
            <Link
              href='/new-games'
              className='hover:text-accent pr-4 justify-end border-r-8 border-primary-content'
            >
              <span>New Releases</span>
            </Link>
          </li>
          <li>
            <Link
              href='/favorite-games'
              className='hover:text-accent pr-4 justify-end border-r-8 border-primary-content'
            >
              <span>Favorite Games</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
