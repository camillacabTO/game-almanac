import GameCard from './GameCard'
import OrderBySelect from '@/components/PlatformSelect'
import { Game } from '@/types'
import axios from 'axios'
import Pagination from './Pagination'

type GamesResponse = {
  previous: string | null
  next: string | null
  results: Game[]
}

async function getData(url: string) {
  const { data }: { data: GamesResponse } = await axios.get(url)
  return data
}

export default async function GameList(props: {
  url: string
  heading: string
}) {
  const data = await getData(props.url)

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
      <Pagination previous={data.previous} next={data.next} />
    </>
  )
}
