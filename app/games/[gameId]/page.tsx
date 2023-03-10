import { getGameDetails } from '@/lib/getGamesAPI'
import { format } from 'date-fns'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  params: {
    gameId: string
  }
}

export default async function page(props: Props) {
  const game = await getGameDetails(props.params.gameId)
  console.log(game)

  return (
    <div className='grid auto-rows-[1fr]" md:grid-cols-4 gap-8'>
      <div className='relative w-full h-[14rem] md:h-[30rem] aspect-auto md:col-span-4'>
        <Image
          className='opacity-50'
          src={game.background_image ? game.background_image : ''}
          alt='game_background_image'
          fill={true}
        />
        <h1 className='bottom-7 left-7 z-30 absolute text-2xl md:text-5xl font-extrabold text-gray-100'>
          {game.name}
        </h1>
      </div>
      <div className='md:col-span-2 space-y-2'>
        <h2>Overall Rating:</h2>
        <p
          className={`border w-fit py-1 px-2 rounded-md ${
            game.rating >= 3.7
              ? 'border-success text-success'
              : 'border-warning text-warning'
          }`}
        >
          {game.rating}
        </p>
      </div>
      <div className='md:col-span-2 space-y-2'>
        <h2>Genre: </h2>
        {game.genres.map((genre) => (
          <p
            className={'badge badge-accent badge-outline badge-lg mr-1'}
            key={genre.name}
          >
            {genre.name}
          </p>
        ))}
      </div>
      <div className='md:col-span-2 space-y-2'>
        <h2>Released Date: </h2>
        <p>{format(new Date(game.released), 'LLL d, yyyy')}</p>
      </div>
      <div className='md:col-span-2 space-y-2'>
        <h2>Platforms: </h2>
        {game.platforms.map((platform) => (
          <p
            className={'badge badge-secondary mr-1'}
            key={platform.platform.id}
          >
            {platform.platform.name}
          </p>
        ))}
      </div>
      <div className='md:col-span-2 space-y-2'>
        <h2>Website:</h2>
        <Link href={game.website}>{game.website}</Link>
      </div>
      <div className='md:col-span-2'>
        <h2 className='mb-2'>Publishers:</h2>
        {game.publishers.map((publisher) => (
          <p className={''} key={publisher.name}>
            {publisher.name}
          </p>
        ))}
      </div>
      <div className='md:col-span-4 space-y-2'>
        <h2>Tags: </h2>
        {game.tags.map((tag) => (
          <p className={'badge mr-1'} key={tag.name}>
            {tag.name}
          </p>
        ))}
      </div>
      <div className='md:col-span-4 space-y-2 pb-6'>
        <h2 className='font-bold md:text-xl'>About</h2>
        <p className='md:text-lg'>{game.description_raw}</p>
      </div>
    </div>
  )
}
