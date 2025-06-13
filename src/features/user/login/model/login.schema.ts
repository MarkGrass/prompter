import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const LoginSchema = z.object({
    code: z.string().trim(),
    phone_number: z
        .string()
        .trim()
        .min(6, 'неправильный номер телефона')
        .max(12, 'неправильный номер телефона'),
});

export type LoginFields = z.infer<typeof LoginSchema>;
export const loginResolver = zodResolver(LoginSchema);
