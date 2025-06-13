import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const LoginSchema = z.object({
    code: z.string().trim().min(1, 'Неверный код'),
    phone_number: z
        .string()
        .trim()
        .min(1, 'Неправильный номер телефога')
        .min(1, 'Неправильный номер телефога'),
});

export type LoginFields = z.infer<typeof LoginSchema>;
export const loginResolver = zodResolver(LoginSchema);
