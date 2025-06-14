import { intlFormat, isValid } from 'date-fns';

export const formatDate = (date: string): string => {
    const jsDate = new Date(date);
    if (isValid(jsDate)) {
        return intlFormat(
            jsDate,
            {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            },
            {
                locale: 'ru-RU',
            },
        );
    }

    return date;
};
