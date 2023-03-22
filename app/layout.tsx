import './globals.css'
import { Monda } from 'next/font/google'
import TopNav from '@/components/TopNav'
import SideNav from '@/components/SideNav'
import AuthProvider from '../components/AuthProvider'
import QueryWrapper from './QueryWrapper'

export const metadata = {
  title: 'Game Almanac',
  description:
    'A comprehensive guide to the world of gaming, with a wealth of information and resources to explore.',
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
      <body
        className={`${monda.variable} font-monda bg-[url('../assets/ooorganize3.svg')]`}
      >
        <AuthProvider>
          <QueryWrapper>
            <TopNav />
            <main className='flex min-h-screen'>
              <SideNav />
              <div className='flex-auto px-6'>{children}</div>
            </main>
          </QueryWrapper>
        </AuthProvider>
      </body>
    </html>
  )
}
