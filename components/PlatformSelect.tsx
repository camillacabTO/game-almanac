'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PlatformSelect() {
  const [value, setValue] = useState('')
  const router = useRouter()

  return (
    <select
      className='select select-secondary w-full max-w-xs'
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
        router.replace(`/platforms/${e.target.value}`)
      }}
    >
      <option>Filter by Platform</option>
      <option value='4'>PC</option>
      <option value='186'>Xbox Series S/X</option>
      <option value='1'>Xbox One</option>
      <option value='14'>Xbox 360</option>
      <option value='187'>PlayStation 5</option>
      <option value='18'>PlayStation 4</option>
      <option value='16'>PlayStation 3</option>
      <option value='7'>Nintendo Switch</option>
      <option value='21'>Android</option>
      <option value='3'>iOS</option>
    </select>
  )
}
