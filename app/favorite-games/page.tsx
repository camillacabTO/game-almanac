'use client'

import { getFavGames } from '@/lib/getGamesAPI'
import { useQuery } from 'react-query'
import { FavoritedGames, User } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import GameCard from '@/components/GameCard'
import Loader from '@/components/Loader'

type PrismaUser = User & { favoriteGames: FavoritedGames[] }

export default function FavoriteGames() {
  const router = useRouter()

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/auth/signin')
    },
  })
  // protect routes in client components

  const { data, isLoading } = useQuery<PrismaUser>('fetchFavGames', getFavGames)

  if (isLoading) return <Loader />

  return (
    <div>
      <h1 className='text-4xl mb-4'>{`${data?.name}'s Favorite Games`}</h1>
      {/* fix header */}
      <div className='grid grid-cols-rigid gap-4 mt-6 px-12 sm:px-0'>
        {data?.favoriteGames?.map((game) => (
          <GameCard key={game.id} game={game} hasDeleteButton={true} />
        ))}
      </div>
    </div>
  )
}
