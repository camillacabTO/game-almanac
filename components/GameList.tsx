import GameCard from './GameCard'
import OrderBySelect from '@/components/PlatformSelect'
import { Game, GamesResponse } from '@/types'
import axios from 'axios'
import Pagination from './Pagination'
import Link from 'next/link'

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
          <div className='grid md:grid-cols-4 gap-4 mt-6'>
            {props.games?.results.map((game) => (
              <Link href={`games/${game.id}`} key={game.id}>
                <GameCard
                  // key={game.id}
                  name={game.name}
                  released={game.released}
                  rating={game.rating}
                  background_image={game.background_image}
                  id={game.id}
                  platforms={game.platforms}
                />
              </Link>
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
