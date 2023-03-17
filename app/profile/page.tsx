import { User } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { authOptions } from '../../pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import { Session } from 'next-auth'


export default async function page() {
  const session: Session | null = await getServerSession(authOptions)
  // make an api call and get user by email from DB

  return (
    <div className='flex flex-col gap-12 justify-center items-center h-[75%] text-lg'>
      <Image
        src={session?.user?.image ? session?.user.image : ''}
        alt='avatar'
        width={180}
        height={180}
        className='rounded-lg'
      />
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
      <Link href={''} className='btn btn-wide'>
        My Favorite Games
      </Link>
    </div>
  )
}
