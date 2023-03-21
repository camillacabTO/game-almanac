import GameList from '@/components/GameList'
import { getGamesAPI } from '@/lib/getGamesAPI'

type Props = {
  searchParams?: {
    page?: string
  }
}

export default async function page(props: Props) {
  let pagesOn = true
  let url = `https://api.rawg.io/api/games?key=8bce72d488cd4b87ae7ccf04176d2419&ordering=-metacritic`

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
