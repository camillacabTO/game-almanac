'use client'

import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import noImage from '@/assets/no-image.svg'

type Props = {
  session: Session
}

export default function UserMenu(props: Props) {
  const handleLogOut = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
        <div className='w-18 rounded-full'>
          <Image
            src={props.session.user?.image ? props.session.user.image : noImage}
            alt='avatar'
            width={70}
            height={70}
            // priority
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
          <button onClick={handleLogOut}>Logout</button>
        </li>
      </ul>
    </div>
  )
}
