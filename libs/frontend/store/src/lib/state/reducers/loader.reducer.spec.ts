import * as fromLoaderActions from '../actions/loader.actions';
import * as fromLoaderReducer from './loader.reducer';

describe('LoaderReducer', () => {
    test('should start loader', () => {
        const action = fromLoaderActions.LoaderActions.startLoading();
        const state = {
            ...fromLoaderReducer.initialState,
            loading: false,
        };

        const result = fromLoaderReducer.loaderReducer(state, action);

        expect(result).toEqual({
            ...state,
            loading: true,
        });
    });

    test('should stop loader', () => {
        const action = fromLoaderActions.LoaderActions.stopLoading();
        const state = {
            ...fromLoaderReducer.initialState,
            loading: true,
        };

        const result = fromLoaderReducer.loaderReducer(state, action);

        expect(result).toEqual({
            ...state,
            loading: false,
        });
    });
});
