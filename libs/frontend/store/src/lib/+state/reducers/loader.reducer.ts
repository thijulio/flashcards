import { createReducer, on } from '@ngrx/store';
import { LoaderActions } from '../actions/loader.actions';

export const loaderStatekey = 'loader';

export interface LoaderState {
    loading: boolean;
}
export const initialState: LoaderState = {
    loading: false,
};

export const loaderReducer = createReducer(
    initialState,
    on(LoaderActions.startLoading, (state: LoaderState) => ({
        ...state,
        loading: true,
    })),
    on(LoaderActions.stopLoading, (state: LoaderState) => ({
        ...state,
        loading: false,
    })),
);
