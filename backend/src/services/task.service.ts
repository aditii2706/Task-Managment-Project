import prisma from '../prisma';

export const createTask = async (userId: string, data: any) => {
  return prisma.task.create({
    data: {
      ...data,
      userId,
    },
  });
};

export const getTasks = async (userId: string) => {
  return prisma.task.findMany({
    where: { userId },
  });
};