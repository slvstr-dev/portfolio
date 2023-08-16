import { z } from 'zod';

export const contactFormSchema = z.object({
  subject: z.string().optional(),
  body: z.string().min(1, { message: 'Please enter a message' }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
