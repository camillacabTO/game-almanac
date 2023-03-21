import GameList from '@/components/GameList'
import { getGamesAPI } from '@/lib/getGamesAPI'
import styles from './page.module.css'

type Props = {
  searchParams?: {
    page?: string
    search?: string
  }
}

export default async function Home(props: Props) {
  let pagesOn = true
  let today = new Date()
  let url = `https://api.rawg.io/api/games?key=${
    process.env.API_KEY
  }&dates=2019-01-01,${today.toISOString().split('T')[0]}&ordering=-added`

  if (props.searchParams?.page) {
    url = `${url}&page=${props.searchParams?.page}`
  }

  if (props.searchParams?.search) {
    url = `${url}&search_precise=true&page_size=20&search=${props.searchParams?.search}`
    pagesOn = false
  }

  const data = await getGamesAPI(url)

  return (
    <>
      <GameList
        hasPagination={pagesOn}
        games={data}
        heading='Trending New Releases'
      />
    </>
  )
}
