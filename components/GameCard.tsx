import Image from 'next/image'
import { Game } from '../types'

export default function GameCard(game: Game) {
  return (
    <div className='card bg-neutral shadow-xl border border-primary'>
      <figure>
        <Image
          className='h-[180px] w-full'
          src={game.background_image}
          alt='avatar'
          width={220}
          height={160}
          // make it faster
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{game.name}</h2>
        <p>Released: {game.released}</p>
        <p>Rating: {game.rating}</p>
        <div className='card-actions justify-end'>
          {game.platforms.map((platform) => (
            <div className='badge badge-secondary' key={platform.platform.id}>
              {platform.platform.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
