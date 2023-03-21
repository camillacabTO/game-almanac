import GameList from '@/components/GameList'
import { getGamesAPI } from '@/lib/getGamesAPI'

type Props = {
  searchParams?: {
    page?: string
  }
}

export default async function page(props: Props) {
  let pagesOn = true
  let url = `https://api.rawg.io/api/games?key=${process.env.API_KEY}&ordering=-metacritic`

  if (props.searchParams?.page) {
    url = `${url}&page=${props.searchParams?.page}`
  }

  const data = await getGamesAPI(url)

  return (
    <>
      <GameList
        hasPagination={pagesOn}
        games={data}
        heading='Epic Gaming Hall of Fame'
      />
    </>
  )
}
