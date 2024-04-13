import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const essays = await prisma.essay.findMany();
  console.log(essays);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
