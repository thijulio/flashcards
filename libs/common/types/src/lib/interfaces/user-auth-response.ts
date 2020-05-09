import { User } from '@flashcards/frontend/shared/types';

export interface UserAuthResponse {
    user: User;
    accessToken: string;
}
