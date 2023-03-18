import { GamesResponse, GameDetails } from '../types'
import axios from 'axios'

export async function getGamesAPI(baseUrl: string): Promise<GamesResponse> {
  const res = await fetch(baseUrl)

  if (!res.ok) throw new Error('Failed to fetch data')
  //   if (!res.ok) return undefined

  return res.json()
}

export async function getGameDetails(gameID: string): Promise<GameDetails> {
  const res = await fetch(
    `https://api.rawg.io/api/games/${gameID}?key=8bce72d488cd4b87ae7ccf04176d2419`
  )

  if (!res.ok) throw new Error('Failed to fetch data')
  //   if (!res.ok) return undefined

  return res.json()
}

export async function getFavGames() {
  const res = await axios.get('/api/user')
  return res.data
}
