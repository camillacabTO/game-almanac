import GameCard from './GameCard'
import OrderBySelect from '@/components/PlatformSelect'
import { Game } from '@/types'
import axios from 'axios'

type GamesResponse = {
  previous: string | null
  next: string | null
  results: Game[]
}
export default async function GameList(props: {
  url: string
  heading: string
}) {
  const { data }: { data: GamesResponse } = await axios.get(props.url)

  return (
    <>
      <header>
        <h1 className='text-4xl mb-4'>{props.heading}</h1>
        <OrderBySelect />
      </header>
      <div>
        <div className='grid md:grid-cols-4 gap-4 mt-6'>
          {data?.results.map((game) => (
            <GameCard
              key={game.id}
              name={game.name}
              released={game.released}
              rating={game.rating}
              background_image={game.background_image}
              id={game.id}
              platforms={game.platforms}
            />
          ))}
        </div>
      </div>
      {/* has to be a functional component */}
      <div className='btn-group grid grid-cols-2 w-80 my-4 mx-auto'>
        <button className='btn btn-outline'>Previous page</button>
        <button className='btn btn-outline'>Next</button>
      </div>
    </>
  )
}
