export interface CreateUserRequest {
    givenName: string;
    name: string;
    surname: string;
    email: string;
    gender: 'M' | 'F';
    password: string;
}
