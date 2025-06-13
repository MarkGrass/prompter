import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const LoginSchema = z.object({
    email: z.string().trim().email().min(1, 'Введите логин'),
    password: z.string().trim().min(1, 'Введите пароль'),
})

export type LoginFields = z.infer<typeof LoginSchema>;
export const loginResolver = zodResolver(LoginSchema);