import GameList from '@/components/GameList'
import { getGamesAPI } from '@/lib/getGamesAPI'
import type { Metadata } from 'next'

type Props = {
  params: {
    platform: string
  }
  searchParams?: {
    page?: string
  }
}
const platformNames: any = {
  '1': 'Xbox One',
  '4': 'PC',
  '186': 'Xbox Series S/X',
  '14': 'Xbox 360',
  '187': 'PlayStation 5',
  '18': 'PlayStation 4',
  '16': 'PlayStation 3',
  '7': 'Nintendo Switch',
  '21': 'Android',
  '3': 'iOS',
}

export async function generateMetadata({
  params: { platform },
}: Props): Promise<Metadata> {
  return {
    title: platformNames[platform],
  }
}

export default async function PlatformResult(props: Props) {
  let url = `https://api.rawg.io/api/games?key=${process.env.API_KEY}&platforms=${props.params.platform}&ordering=-added`

  if (props.searchParams?.page) {
    url = `${url}&page=${props.searchParams?.page}`
  }

  const data = await getGamesAPI(url)

  return (
    <>
      <GameList
        games={data}
        hasPagination={true}
        heading={`Trending in ${platformNames[props.params.platform]}`}
      />
    </>
  )
}

// export function generateStaticParams() {
//   return Object.keys(platformNames).map((key) => ({
//     platform: key,
//   }))
// }
