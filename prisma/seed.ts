import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const user1 = await prisma.user.upsert({
        where: { email: "gordon@barbara.com" },
    update: {
        id: 1
    },
    create: {
      id: 1,
      name: "barbara gordon",
      email:      "gordon@barbara.com",
      password:   ""
    },
});

  const book1 = await prisma.book.upsert({
    where: { title: "maze runner" },
    update: {
        id: 1
    },
    create: {
      id: 1,
      title: "maze runner",
      description:      "garoto foge de labirinto",
      publisher: "n sei",
      publishedDate: "10/12/2007",
    },
  })

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