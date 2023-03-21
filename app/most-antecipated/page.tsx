import GameList from '@/components/GameList'
import { getGamesAPI } from '@/lib/getGamesAPI'
import styles from './page.module.css'

type Props = {
  searchParams?: {
    page?: string
    search?: string
  }
}

export default async function page(props: Props) {
  let pagesOn = true
  let url = `https://api.rawg.io/api/games?key=8bce72d488cd4b87ae7ccf04176d2419&dates=2023-03-01,2025-03-01&ordering=-added`

  if (props.searchParams?.page) {
    url = `${url}&page=${props.searchParams?.page}`
  }

  //   if (props.searchParams?.search) {
  //     url = `${url}&search_precise=true&page_size=12&search=${props.searchParams?.search}`
  //     pagesOn = false
  //   }

  const data = await getGamesAPI(url)

  return (
    <>
      <GameList
        hasPagination={pagesOn}
        games={data}
        heading='Eagerly Expected Game Releases'
      />
    </>
  )
}
