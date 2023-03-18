'use client'

import { getFavGames } from '@/lib/getGamesAPI'
import { useQuery } from 'react-query'
// import { User } from '../../types'
import { FavoritedGames, User } from '@prisma/client'

type PrismaUser = User & { favoriteGames: FavoritedGames[] }

export default function FavoriteGames() {
  const { isLoading, isError, data } = useQuery<PrismaUser>(
    'fetchFavGames',
    getFavGames
  )

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error!</span>
  }

  if (data) console.log('games', data)

  return (
    <div>
      <h1>{data?.name} Favorite Games</h1>
      {data?.favoriteGames?.map((game) => (
        <p key={game.id}>{game.name}</p>
      ))}
    </div>
  )
}
