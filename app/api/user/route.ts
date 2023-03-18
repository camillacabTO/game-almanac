import prisma from '../../../prisma/client'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../../pages/api/auth/[...nextauth]'
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'
import { Game } from '@/types'

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse(
      JSON.stringify({
        message: 'Unauthorized. Please signin!',
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

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)
  const req = await request.json()

  if (!session) {
    return new NextResponse(
      JSON.stringify({
        message: 'Please signin to add game to your favorite list.',
      }),
      { status: 401 }
    )
  }

  const { id, name, released, rating, background_image }: Game = req.favGame

  try {
    const newFavGame = await prisma.user.update({
      where: { email: session?.user?.email },
      data: {
        favoriteGames: {
          create: {
            id,
            name,
            released,
            rating,
            background_image,
          },
        },
      },
    })
    return new NextResponse(JSON.stringify(newFavGame), { status: 201 })
  } catch (error) {
    return new NextResponse(JSON.stringify({ err: 'An Error has occured.' }), {
      status: 403,
    })
  }
}
