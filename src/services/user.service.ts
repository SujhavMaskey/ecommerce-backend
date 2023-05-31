/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismaClient } from '@prisma/client';
import Boom from '@hapi/boom';
import { any } from 'zod';

const prisma = new PrismaClient();
export const find = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const create = async (user: any) => {
  // throw new Error('hello')
  const { email, name } = user;
  const users = await prisma.user.create({
    data: {
      email,
      id: Math.ceil(Math.random() * 100),
      name,
    },
  });
  return users;
};

export const remove = async (id: string) => {
  try {
    return await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
  } catch (err: any) {
    if (err.code == 'P2025') {
      throw Boom.notFound('post not found');
    } else {
      throw err;
    }
  }
};

export const change = async (user: any, id: string) => {
  const { email, name } = user;
  try {
    return await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        email,
        name,
      },
    });
  } catch (error: any) {
    if (error.code == 'P2025') {
      throw Boom.notFound('Record to update not found');
    } else {
      throw error;
    }
  }
};
