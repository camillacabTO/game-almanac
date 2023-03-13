import { getGameDetails } from '@/lib/getGamesAPI'
import React from 'react'

type Props = {
  params: {
    gameId: string
  }
}

export default async function page(props: Props) {
  const game = await getGameDetails(props.params.gameId)

  return (
    <div>
      {game.genres.map((genre) => (
        <p
          className={'badge badge-accent badge-outline badge-lg'}
          key={genre.name}
        >
          {genre.name}
        </p>
      ))}
      {game.platforms.map((platform) => (
        <p className={'badge badge-secondary'} key={platform.platform.id}>
          {platform.platform.name}
        </p>
      ))}
      {game.tags.map((tag) => (
        <p className={'badge'} key={tag.name}>
          {tag.name}
        </p>
      ))}
    </div>
  )
}
