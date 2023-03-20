'use client'

import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import { useState } from 'react'

type Props = {
  propsGameId: number
}

export default function DeleteFavGame({ propsGameId }: Props) {
  const [btnDisabled, setBtnDisabled] = useState(false)
  const queryClient = useQueryClient()

  const { mutate } = useMutation(
    async (gameId: number) => await axios.delete('/api/user', { data: gameId }),
    {
      onError: (error) => {
        console.log(error)
        setBtnDisabled(false)
      },
      onSuccess: (data) => {
        console.log('Game Deleted')
        setBtnDisabled(false)
        queryClient.invalidateQueries(['fetchFavGames'])
      },
    }
  )

  const handleClick = () => {
    mutate(propsGameId)
    setBtnDisabled(true)
  }

  return (
    <button
      className={`btn btn-outline btn-error w-3/4 my-3 mx-auto ${
        btnDisabled ? 'loading' : ''
      }`}
      onClick={handleClick}
      disabled={btnDisabled}
    >
      Remove
    </button>
  )
}
