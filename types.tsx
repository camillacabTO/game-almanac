export interface Game {
  id: number
  name: string
  released: string
  rating: number
  background_image: string
  platforms?: Platform[]
}

export interface Platform {
  platform: { id: number; name: string }
}

export interface GamesResponse {
  previous: string | null
  next: string | null
  results: Game[]
}

export interface Genre {
  name: string
}

export interface Tag {
  name: string
}
export interface Publisher {
  name: string
}

export interface GameDetails {
  id: number
  name: string
  description_raw: string
  released: string
  rating: number
  metacritic: number
  background_image: string
  website: string
  platforms: Platform[]
  genres: Genre[]
  tags: Tag[]
  publishers: Publisher[]
}

// export interface User {
//   image?: string
//   name?: string
//   email: string
//   favorite_games_link?: string
// }
