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
          className={`btn ${btnDisabled ? 'loading' : ''}`}
          disabled={btnDisabled}
          onClick={handleClick}
        >
          Add to Favorite
        </button>
      )}
    </>
  )
}
