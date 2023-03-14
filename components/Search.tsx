'use client'

import { useRef, useCallback } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function Search() {
  const searchRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams()
    params.set(name, value)
    return params.toString()
  }

  const handleKeyEnterPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && searchRef.current?.value) {
      event.preventDefault()
      router.push('/?' + createQueryString('search', searchRef.current.value))
      //   searchRef.current.value = ''
    }
  }

  return (
    <input
      ref={searchRef}
      onKeyDown={handleKeyEnterPress}
      type='text'
      placeholder='Search...'
      className='input input-bordered input-secondary w-full max-w-xs'
    />
  )
}
