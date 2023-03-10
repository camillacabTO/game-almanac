import GameList from '@/components/GameList'

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

export default function PlatformResult(props: Props) {
  let url = `https://api.rawg.io/api/games?key=8bce72d488cd4b87ae7ccf04176d2419&platforms=${props.params.platform}`

  if (props.searchParams?.page) {
    url = `${url}&page=${props.searchParams?.page}`
  }

  return (
    <>
      <h3>{props.searchParams?.page}</h3>
      <GameList
        url={url}
        heading={`Trending in ${platformNames[props.params.platform]}`}
      />
    </>
  )
}
