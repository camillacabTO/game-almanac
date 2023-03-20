import GameCard from './GameCard'
import OrderBySelect from '@/components/PlatformSelect'
import { GamesResponse } from '@/types'
import axios from 'axios'
import Pagination from './Pagination'
import Link from 'next/link'
import { FavoritedGames } from '@prisma/client'

type GameListProps = {
  heading: string
  hasPagination: boolean
  games: GamesResponse
}

export default function GameList(props: GameListProps) {
  return (
    <>
      <header>
        <h1 className='text-4xl mb-4'>{props.heading}</h1>
        <OrderBySelect />
      </header>
      <div>
        {props.games?.results.length === 0 ? (
          <>No Games Found</>
        ) : (
          <div className='grid grid-cols-fluid gap-4 mt-6 px-12 sm:px-0 mx-auto'>
            {props.games?.results.map((game) => (
              <GameCard game={game} hasDeleteButton={false} key={game.id} />
            ))}
          </div>
        )}
      </div>
      {/* scroll up after click */}
      {props.hasPagination && (
        <Pagination previous={props.games.previous} next={props.games.next} />
      )}
    </>
  )
}
