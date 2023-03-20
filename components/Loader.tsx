import loader from '@/assets/loader.gif'
import Image from 'next/image'

export default function Loader() {
  return (
    <div className='flex justify-center items-center h-[70%]'>
      <Image
        src={loader}
        alt='loader'
        height={180}
        width={180}
        className='m-auto'
      />
    </div>
  )
}
