export interface Game {
  id: number
  name: string
  released: string
  rating: number
  background_image: string
  platforms: Platform[]
}

export interface Platform {
  platform: { id: number; name: string }
}

export type GamesResponse = {
  previous: string | null
  next: string | null
  results: Game[]
}
