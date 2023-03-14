import { User } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

type profileProps = {
  user: User
}

const testUser: User = {
  image: 'https://github.com/camillacabTO.png',
  name: 'Camila Barros',
  email: 'camillacab@hotmail.com',
  favorite_games_link: '',
}

export default function page(props: profileProps) {
  return (
    <div className='flex flex-col gap-12 justify-center items-center h-[75%] text-lg'>
      <Image
        src={testUser.image ? testUser.image : ''}
        alt='avatar'
        width={180}
        height={180}
        className='rounded-lg'
      />
      <p>{testUser.name}</p>
      <p>{testUser.email}</p>
      <Link
        href={testUser.favorite_games_link ? testUser.favorite_games_link : ''}
        className='btn btn-wide'
      >
        My Favorite Games
      </Link>
    </div>
  )
}
