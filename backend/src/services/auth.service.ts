import prisma from '../prisma';
import { hashPassword, comparePassword } from '../utils/password';
import {
  generateAccessToken,
  generateRefreshToken,
} from '../utils/jwt';
import { ApiError } from '../utils/ApiError';

export const registerUser = async (data: any) => {
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ email: data.email }, { username: data.username }],
    },
  });

  if (existingUser) {
    throw new ApiError(400, 'User already exists');
  }

  const hashedPassword = await hashPassword(data.password);

  const user = await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });

  return user;
};

export const loginUser = async (data: any) => {
  const user = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (!user) {
    throw new ApiError(400, 'Invalid credentials');
  }

  const isMatch = await comparePassword(data.password, user.password);

  if (!isMatch) {
    throw new ApiError(400, 'Invalid credentials');
  }

  const payload = { userId: user.id };

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  await prisma.refreshToken.create({
    data: {
      token: refreshToken,
      userId: user.id,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });

  return { user, accessToken, refreshToken };
};