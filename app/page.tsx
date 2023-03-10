import GameList from '@/components/GameList'
import styles from './page.module.css'

type Props = {
  searchParams?: {
    page?: string
  }
}

export default function Home(props: Props) {
  let originalUrl =
    'https://api.rawg.io/api/games?key=8bce72d488cd4b87ae7ccf04176d2419'

  if (props.searchParams?.page) {
    originalUrl = `${originalUrl}&page=${props.searchParams?.page}`
  }

  return (
    <>
      <GameList url={originalUrl} heading='Recently added and trending' />
    </>
  )
}
// https://api.rawg.io/api/games?key=8bce72d488cd4b87ae7ccf04176d2419&platforms=1
// https://api.rawg.io/api/games?key=8bce72d488cd4b87ae7ccf04176d2419&dates=2022-01-01,2022-12-31&ordering=-added
