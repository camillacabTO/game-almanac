import Image from 'next/image'
import { Game } from '../types'
import DeleteFavGame from './DeleteFavGame'
import Link from 'next/link'
import noImage from '@/assets/no-image.svg'

type Props = {
  game: Game
  hasDeleteButton: boolean
}

export default function GameCard({ game, hasDeleteButton }: Props) {
  return (
    <div className='card bg-neutral shadow-xl border border-primary overflow-hidden'>
      <Link href={`games/${game.id}`}>
        <figure>
          <Image
            className='h-[180px] w-full object-over'
            src={game?.background_image ? game?.background_image : noImage}
            // add default image
            alt='avatar'
            width={200}
            height={140}
          />
        </figure>
        <div className='card-body min-h-fit p-4'>
          <h2 className='card-title'>{game?.name}</h2>
          <p>Released: {game?.released}</p>
          <p>Rating: {game?.rating}</p>
          {game?.platforms && (
            <div className='card-actions justify-end mt-3'>
              {game?.platforms?.map((platform) => (
                <div
                  className='badge badge-secondary'
                  key={platform.platform.id}
                >
                  {platform.platform.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </Link>
      {hasDeleteButton && <DeleteFavGame propsGameId={game.id} />}
    </div>
  )
}
