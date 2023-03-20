'use client'

import { useState } from 'react'
import { useMutation } from 'react-query'
import axios, { AxiosError } from 'axios'
import { Game } from '@/types'

type Props = {
  game: Game
}

export default function AddGameToFav({ game }: Props) {
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const { mutate } = useMutation(
    async (favGame: Game) =>
      await axios.post('/api/user', {
        favGame,
      }),
    {
      onError: (error) => {
        if (error instanceof AxiosError) {
          setError(error?.response?.data.message)
        }
        setBtnDisabled(false)
      },
      onSuccess: (data) => {
        setBtnDisabled(false)
        setError('')
        console.log('Game Added', data)
      },
    }
  )

  const handleClick = () => {
    mutate(game)
    setBtnDisabled(true)
  }

  return (
    <>
      {error ? (
        <div className='alert alert-warning shadow-lg w-fit'>{error}</div>
      ) : (
        <button
          className={`btn gap-2 ${btnDisabled ? 'loading' : ''}`}
          disabled={btnDisabled}
          onClick={handleClick}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
            />
          </svg>
          Add to Favorite
        </button>
      )}
    </>
  )
}
