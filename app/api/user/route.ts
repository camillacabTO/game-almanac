import prisma from '../../../prisma/client'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../../pages/api/auth/[...nextauth]'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'

export async function GET(request: Request, response: NextResponse) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse(
      JSON.stringify({
        message: 'Please signin to add game to your favorite list.',
      }),
      { status: 401 }
    )
  }

  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email },
    include: { favoriteGames: true },
  })

  return new NextResponse(JSON.stringify(user), { status: 200 })
}
