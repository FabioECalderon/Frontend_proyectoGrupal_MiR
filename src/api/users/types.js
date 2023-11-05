import { z } from 'zod';

export const UserOutput = z
  .object({
    fullName: z.string(),
    email: z.string(),
    createdAt: z.string(),
    userType: z.string(),
    id: z.string(),
  })
  .strict();
