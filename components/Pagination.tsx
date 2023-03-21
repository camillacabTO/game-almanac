'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Pagination(props: {
  previous: string | null
  next: string | null
}) {
  const pathname = usePathname()
  let nextPage
  let previousPage

  if (props.next) {
    let params = new URLSearchParams(props.next)
    nextPage = params.get('page')
  }

  if (props.previous) {
    let params = new URLSearchParams(props.previous)
    previousPage = params.get('page')
  }

  // scroll up after changing page?const bottomToTop = () => {
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className='btn-group grid grid-cols-2 w-80 my-4 mx-auto'>
      {/* disable buttons */}
      <button
        className='btn btn-outline p-0'
        onClick={bottomToTop}
        disabled={!props.previous}
      >
        <Link
          href={{
            pathname: pathname,
            query: { page: previousPage },
          }}
          className='w-full h-full leading-[46px]'
        >
          Previous
        </Link>
      </button>
      <button
        className='btn btn-outline p-0'
        onClick={bottomToTop}
        disabled={!props.next}
      >
        <Link
          href={{
            pathname: pathname,
            query: { page: nextPage },
          }}
          className='w-full h-full leading-[46px]'
        >
          Next
        </Link>
      </button>
    </div>
  )
}
