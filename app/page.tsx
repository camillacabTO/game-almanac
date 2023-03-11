import GameList from '@/components/GameList'
import getGamesAPI from '@/util/getGamesAPI'
import styles from './page.module.css'

type Props = {
  searchParams?: {
    page?: string
    search?: string
  }
}

export default async function Home(props: Props) {
  let pagesOn = true
  let url = 'https://api.rawg.io/api/games?key=8bce72d488cd4b87ae7ccf04176d2419'

  if (props.searchParams?.page) {
    url = `${url}&page=${props.searchParams?.page}`
  }

  if (props.searchParams?.search) {
    url = `${url}&search_precise=true&page_size=12&search=${props.searchParams?.search}`
    pagesOn = false
  }

  const data = await getGamesAPI(url)

  return (
    <>
      <GameList
        hasPagination={pagesOn}
        games={data}
        heading='Recently added and trending'
      />
    </>
  )
}
// https://api.rawg.io/api/games?key=8bce72d488cd4b87ae7ccf04176d2419&dates=2022-01-01,2022-12-31&ordering=-added
