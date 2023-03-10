import Image from 'next/image'
import Link from 'next/link'

export default function TopNav() {
  return (
    <div className='navbar bg-base-100 p-4 flex flex-col md:flex-row justify-between'>
      <h1>
        <Link
          href='/'
          className='normal-case text-xl hover:text-accent cursor-pointer'
        >
          Game Almanac
        </Link>
      </h1>
      <div className=''>
        {/* client component */}
        <input
          type='text'
          placeholder='Search...'
          className='input input-bordered input-secondary w-full max-w-xs'
        />
        <div className='flex-none gap-2'>
          {/* show one of the other */}
          <button className='btn btn-outline btn-primary rounded-full hidden'>
            Sign
          </button>
          <div className='dropdown dropdown-end ml-3'>
            <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full'>
                <Image
                  src='https://github.com/camillacabTO.png'
                  alt='avatar'
                  width={60}
                  height={60}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
            >
              <li>
                <Link href='/profile' className='justify-between'>
                  Profile
                  <span className='badge'>New</span>
                </Link>
              </li>
              <li>
                <Link href='/logout'>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='dropdown dropdown-end md:hidden text-sm'>
          <label tabindex='0' class='btn m-1'>
            X
          </label>
          <ul
            tabindex='0'
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
