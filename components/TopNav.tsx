import Link from 'next/link'
import Search from './Search'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import UserMenu from './UserMenu'

export default async function TopNav() {
  const session = await getServerSession(authOptions)
  if (session) console.log(session)

  return (
    <div className='navbar bg-base-100 p-6 flex flex-col md:flex-row justify-between'>
      <h1>
        <Link
          href='/'
          className='normal-case text-xl hover:text-accent cursor-pointer'
        >
          Game Almanac
        </Link>
      </h1>
      <div className='md:w-[25rem]'>
        <Search />
        <div className='flex-none gap-2 ml-4'>
          {!session ? (
            <Link
              href='/auth/signin'
              className='btn btn-outline btn-primary rounded-full mx-2 md:ml-4'
            >
              Sign In
            </Link>
          ) : (
            <UserMenu session={session} />
          )}
        </div>
        <div className='dropdown dropdown-end md:hidden text-sm ml-3'>
          <label tabIndex='0' className='btn m-1'>
            X
          </label>
          <ul
            tabIndex='0'
            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link href='/top-games' className='hover:text-accent'>
                <span>Top Rated Games</span>
              </Link>
            </li>
            <li>
              <Link href='/' className='hover:text-accent'>
                <span>New Releases</span>
              </Link>
            </li>
            <li>
              <Link href='/favorite-games' className='hover:text-accent'>
                <span>Favorite Games</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
