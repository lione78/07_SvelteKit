import prisma from "@prisma/client";

// 다른 데서 쓸 수 있게 함.
export const db = new prisma.PrismaClient();