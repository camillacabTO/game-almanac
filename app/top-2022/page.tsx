import GameList from '@/components/GameList'
import { getGamesAPI } from '@/lib/getGamesAPI'

type Props = {
  searchParams?: {
    page?: string
  }
}

export default async function page(props: Props) {
  let pagesOn = true
  let url = `https://api.rawg.io/api/games?key=8bce72d488cd4b87ae7ccf04176d2419&dates=2022-01-01,2022-12-31&ordering=-rating`

  if (props.searchParams?.page) {
    url = `${url}&page=${props.searchParams?.page}`
  }

  const data = await getGamesAPI(url)

  return (
    <>
      <GameList
        hasPagination={pagesOn}
        games={data}
        heading='Top Rated Games of 2022'
      />
    </>
  )
}
