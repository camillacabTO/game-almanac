'use client'

import { useMutation } from 'react-query'
import axios from 'axios'
import { Game } from '@/types'

type Props = {
  game: Game
}

export default function AddGameToFav({ game }: Props) {
  const { mutate } = useMutation(
    async (favGame: Game) =>
      await axios.post('/api/user', {
        favGame,
      }),
    {
      onError: (error) => {
        console.log(error)
      },
      onSuccess: (data) => {
        console.log(data)
        console.log('Game Added')
        // queryClient.invalidateQueries(['posts'])
      },
    }
  )

  const handleClick = () => {
    mutate(game)
  }

  return (
    <button className='btn' onClick={handleClick}>
      Add to Favorite
    </button>
  )
}
