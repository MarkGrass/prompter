export type LoginRequest = {
    code: string;
    phone_number: string;
};

export type LoginResponse = {
    jwt: string;
};
