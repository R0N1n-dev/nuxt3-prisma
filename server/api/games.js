import prisma from "../../lib/prisma.js";
//const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  /*const gameData = await prisma.game.create({
    data: {
      title: "Street Fighter 6",
      developer: "Capcom",
      publisher: "capcom",
    },
  });*/
  const games = await prisma.game.findMany();

  return games;
});
