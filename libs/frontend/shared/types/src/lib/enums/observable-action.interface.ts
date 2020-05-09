import { ActionCreator, ActionType } from '@ngrx/store';
import { Observable } from 'rxjs';

export type ObservableAction<
    T extends {
        [key: string]: ActionCreator;
    },
    K extends keyof T
> = Observable<ActionType<T[K]>>;
