import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken } from '../utils/jwt';
import { ApiError } from '../utils/ApiError';

export const authMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new ApiError(401, 'Unauthorized');
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyAccessToken(token);

    (req as any).user = decoded;
    next();
  } catch (error) {
    next(new ApiError(401, 'Invalid token'));
  }
};