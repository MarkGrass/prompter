import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const MessageSchema = z.object({
    dialog_id: z.string(),
    message: z.string().trim().min(3, 'Не менее 3х символов'),
    role: z.string(),
});

export type MessageFields = z.infer<typeof MessageSchema>;
export const messageResolver = zodResolver(MessageSchema);
