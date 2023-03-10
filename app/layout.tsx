import './globals.css'
import { Monda } from 'next/font/google'
import TopNav from '@/components/TopNav'
import SideNav from '@/components/SideNav'

export const metadata = {
  title: 'Game Almanac',
  description:
    ' A comprehensive guide to the world of gaming, with a wealth of information and resources to explore.',
}

const monda = Monda({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-monda',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${monda.variable} font-monda`}>
        <TopNav />
        <main className='flex min-h-screen'>
          <SideNav />
          <div className='flex-auto px-6'>{children}</div>
        </main>
      </body>
    </html>
  )
}
