import Link from 'next/link'
import Search from './Search'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import UserMenu from './UserMenu'
import logo from '@/assets/logo.png'
import Image from 'next/image'

export default async function TopNav() {
  const session = await getServerSession(authOptions)
  if (session) console.log('Session from TopNav', session)

  return (
    <div className='navbar bg-base-100 p-4 flex flex-col md:flex-row justify-between'>
      <h1>
        <Link
          href='/'
          className='normal-case text-xl hover:text-accent cursor-pointer'
        >
          {<Image src={logo} width={250} height={90} alt='logo' />}
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
          {/* @ts-ignore */}
          <label tabIndex='0' className='btn btn-circle'>
            <svg
              className='swap-off fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 512 512'
            >
              <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
            </svg>
          </label>
          <ul
            //  @ts-ignore
            tabIndex='0'
            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link
                href='/'
                className='hover:text-accent pr-4 justify-end  border-primary'
              >
                <span>New & Trending</span>
              </Link>
            </li>
            <li>
              <Link
                href='/top-2022'
                className='hover:text-accent pr-4 justify-end  border-primary'
              >
                <span>Top Rated of 2022</span>
              </Link>
            </li>
            <li>
              <Link
                href='/most-antecipated'
                className='hover:text-accent pr-4 justify-end  border-primary'
              >
                <span>Most Antecipated</span>
              </Link>
            </li>
            <li>
              <Link
                href='/all-time-top'
                className='hover:text-accent pr-4 justify-end  border-primary'
              >
                <span>All Time Best Rated</span>
              </Link>
            </li>
            {session && (
              <li>
                <Link
                  href='/favorite-games'
                  className='text-secondary hover:text-accent pr-4 justify-end border-primary'
                >
                  <span className=''>Favorite Games</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
