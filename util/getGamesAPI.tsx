import { GamesResponse } from '../types'

export default async function getGamesAPI(
  baseUrl: string
): Promise<GamesResponse> {
  const res = await fetch(baseUrl)

  if (!res.ok) throw new Error('Failed to fetch data')
  //   if (!res.ok) return undefined

  return res.json()
}
