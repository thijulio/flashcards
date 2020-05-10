import { User } from './user.interface';

export interface UserAuthResponse {
    user: User;
    accessToken: string;
}
