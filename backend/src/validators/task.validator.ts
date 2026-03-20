import { z } from 'zod';

export const createTaskSchema = z.object({
  body: z.object({
    title: z.string(),
    description: z.string().optional(),
    status: z.enum(['PENDING', 'IN_PROGRESS', 'COMPLETED']).optional(),
    priority: z.enum(['LOW', 'MEDIUM', 'HIGH']).optional(),
    dueDate: z.string().optional(),
  }),
});

export const updateTaskSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    status: z.enum(['PENDING', 'IN_PROGRESS', 'COMPLETED']).optional(),
    priority: z.enum(['LOW', 'MEDIUM', 'HIGH']).optional(),
    dueDate: z.string().optional(),
  }),
});