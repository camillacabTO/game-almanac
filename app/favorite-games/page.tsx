'use client'

import { getFavGames } from '@/lib/getGamesAPI'
import { useQuery } from 'react-query'
// import { User } from '../../types'
import { FavoritedGames, User } from '@prisma/client'
import GameCard from '@/components/GameCard'
import Link from 'next/link'
import DeleteFavGame from '@/components/DeleteFavGame'

type PrismaUser = User & { favoriteGames: FavoritedGames[] }

export default function FavoriteGames() {
  const { data } = useQuery<PrismaUser>('fetchFavGames', getFavGames)

  if (data) console.log('games', data)

  return (
    <div>
      <h1>{data?.name} Favorite Games</h1>
      <div className='grid grid-cols-rigid gap-4 mt-6 px-12 sm:px-0'>
        {data?.favoriteGames?.map((game) => (
          <GameCard key={game.id} game={game} hasDeleteButton={true} />
        ))}
      </div>
    </div>
  )
}
