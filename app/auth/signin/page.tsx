'use client'

import Loader from '@/components/Loader'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function Page() {
  const [loading, setLoading] = useState<boolean>(false)

  const handleLogin =
    (provider: string) => async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      try {
        setLoading(true)
        await signIn(provider, { callbackUrl: '/' })
        // setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }

  if (loading) return <Loader />

  return (
    <div className='flex items-center justify-center h-[70%]'>
      <form className='w-full sm:w-1/2 lg:w-1/3 text-center'>
        <h1 className='my-11 text-3xl'>Sign In</h1>
        <button
          onClick={handleLogin('google')}
          className='btn btn-active btn-primary w-full'
        >
          Sign In With Google
        </button>
        <div className='mx-auto my-8 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
          or
        </div>
        <button
          onClick={handleLogin('github')}
          className='btn btn-active btn-accent w-full'
        >
          Sign In With Github
        </button>
      </form>
    </div>
  )
}
