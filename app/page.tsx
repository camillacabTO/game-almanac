import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        <h1>Latest Games Trending</h1>
        <select className='select select-secondary w-full max-w-xs'>
          <option disabled selected>
            Filter by Platform
          </option>
          <option>Java</option>
          <option>Go</option>
          <option>C</option>
          <option>C#</option>
          <option>C++</option>
          <option>Rust</option>
          <option>JavaScript</option>
          <option>Python</option>
        </select>
      </header>
      <div>
        <div>
          <div className='card w-96 bg-neutral shadow-xl border border-primary'>
            <figure>
              <Image
                src='https://github.com/camillacabTO.png'
                alt='avatar'
                width={500}
                height={400}
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>Games!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='card-actions justify-end'>
                <div className='badge badge-secondary'>Fashion</div>
                <div className='badge badge-outline'>Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
