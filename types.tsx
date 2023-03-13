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
// see how will fit prisma schema

export type GamesResponse = {
  previous: string | null
  next: string | null
  results: Game[]
}

export type Genre = {
  name: string
}

export type Tag = {
  name: string
}
export type Publisher = {
  name: string
}

export interface GameDetails {
  name: string
  description_raw: string
  released: string
  rating: number
  background_image: string
  website: string
  platforms: Platform[]
  genres: Genre[]
  tags: Tag[]
  publishers: Publisher[]
}
