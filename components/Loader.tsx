import loader from '@/assets/loader.gif'
import Image from 'next/image'

export default function Loader() {
  return (
    <div className='flex justify-center flex-col items-center h-[70%]'>
      <div>
        <h1 className='text-3xl mb-3'>Loading...</h1>
        <Image
          src={loader}
          alt='loader'
          height={180}
          width={180}
          className='m-auto'
        />
      </div>
    </div>
  )
}
