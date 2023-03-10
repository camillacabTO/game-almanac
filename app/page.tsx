import GameList from '@/components/GameList'
import OrderBySelect from '@/components/PlatformSelect'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <GameList
        url='https://api.rawg.io/api/games?key=8bce72d488cd4b87ae7ccf04176d2419&platforms=1'
        heading='Recently added and trending'
      />
      {/* ??? */}
    </>
  )
}
// https://api.rawg.io/api/games?key=8bce72d488cd4b87ae7ccf04176d2419&platforms=1
// https://api.rawg.io/api/games?key=8bce72d488cd4b87ae7ccf04176d2419&dates=2022-01-01,2022-12-31&ordering=-added
