import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-teal-600">
        Hello world!
      </h1>
      <button className="btn btn-outline btn-info">Info</button>
      <button className="btn btn-outline btn-success">Success</button>
      <button className="btn btn-outline btn-warning">Warning</button>
      <button className="btn btn-outline btn-error">Error</button>
      
    </main>
  )
}
