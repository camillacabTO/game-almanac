import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client

export default client

// prisma generate after schema is created and db url updated
// prisma migrate???

// import { Prisma, PrismaClient } from '@prisma/client'

// declare global {
//   namespace NodeJS {
//     interface Global {
//       prisma: PrismaClient
//     }
//   }
// }

// let prisma: PrismaClient

// if (typeof window === 'undefined') {
//   if (process.env.NODE_ENV === 'production') {
//     prisma = new PrismaClient()
//   } else {
//     if (!global.prisma) {
//       global.prisma = new PrismaClient()
//     }

//     prisma = global.prisma
//   }
// }

// export default prisma
