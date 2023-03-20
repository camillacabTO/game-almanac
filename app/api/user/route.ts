import prisma from '../../../prisma/client'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../../pages/api/auth/[...nextauth]'
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'
import { Game } from '@/types'
import { User } from '@prisma/client'

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
    const alreadyAdded = await prisma.favoritedGames.findUnique({
      where: { id: id },
      select: {
        User: {
          where: { email: session?.user?.email },
        },
      },
    })

    if (alreadyAdded?.User && alreadyAdded?.User.length > 0) {
      return new NextResponse(
        JSON.stringify({
          message: 'This game is already in your favorite list',
        }),
        { status: 400 }
      )
    }

    const updatedUser = await prisma.user.update({
      where: { email: session?.user?.email },
      data: {
        favoriteGames: {
          connectOrCreate: {
            where: { id },
            create: {
              id,
              name,
              released,
              rating,
              background_image,
            },
          },
        },
      },
      select: {
        favoriteGames: true,
      },
    })
    return new NextResponse(JSON.stringify(updatedUser), { status: 201 })
  } catch (error) {
    return new NextResponse(JSON.stringify({ err: 'An Error has occured.' }), {
      status: 403,
    })
  }
}

export async function DELETE(request: NextRequest) {
  const session = await getServerSession(authOptions)
  const gameId = await request.json()

  if (!session) {
    return new NextResponse(
      JSON.stringify({
        message: 'Please signin to delete game from your favorite list.',
      }),
      { status: 401 }
    )
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { email: session?.user?.email },
      data: {
        favoriteGames: {
          disconnect: [{ id: gameId }],
        },
      },
      select: {
        favoriteGames: true,
      },
    })
    return new NextResponse(JSON.stringify(updatedUser), { status: 200 })
  } catch (error) {
    return new NextResponse(JSON.stringify({ err: 'An Error has occured.' }), {
      status: 403,
    })
  }
}
