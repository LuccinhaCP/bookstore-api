import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { email: 'gordon@barbara.com' },
    update: {
      id: 1,
    },
    create: {
      id: 1,
      name: 'barbara gordon',
      email: 'gordon@barbara.com',
      password: await hash("senhadificil", 10),
    },
  });

  const book1 = await prisma.book.upsert({
    where: { id: 1 },
    update: {
      id: 1,
    },
    create: {
      id: 1,
      title: 'maze runner',
      description: 'garoto foge de labirinto',
      publisher: 'n sei',
      publishedDate: '2023-02-24T00:24:12.838Z'
    },
  });

  console.log({ user1, book1 });
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
