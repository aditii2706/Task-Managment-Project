import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  return res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
};

export const notFoundHandler = (_req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: 'Route not found',
  });
};