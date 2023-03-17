import prisma from './client'

export async function getUser(email) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { favoriteGames: true },
    })
    return { user }
  } catch (error) {
    return { error }
  }
}
