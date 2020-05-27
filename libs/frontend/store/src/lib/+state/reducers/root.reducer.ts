import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap } from '@ngrx/store';
import { loaderReducer, LoaderState, loaderStatekey } from './loader.reducer';

export interface RootState {
    [loaderStatekey]: LoaderState;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<RootState, Action>>('Root reducers token', {
    factory: () => ({
        [loaderStatekey]: loaderReducer,
    }),
});
