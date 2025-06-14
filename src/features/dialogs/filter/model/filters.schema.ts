import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const FiltersSchema = z.object({
    search: z.string().trim().min(3, 'Не менее 3х символов'),
});

export type FiltersFields = z.infer<typeof FiltersSchema>;
export const filtersResolver = zodResolver(FiltersSchema);
