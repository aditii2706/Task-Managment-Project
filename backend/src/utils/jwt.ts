import jwt from 'jsonwebtoken';
import { JwtPayload } from '../types';

const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET as string;
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET as string;

export const generateAccessToken = (payload: JwtPayload) => {
  return jwt.sign(payload, ACCESS_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY || '15m',
  });
};

export const generateRefreshToken = (payload: JwtPayload) => {
  return jwt.sign(payload, REFRESH_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY || '7d',
  });
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, ACCESS_SECRET) as JwtPayload;
};

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, REFRESH_SECRET) as JwtPayload;
};