import { createAction } from '@ngrx/store';

const startLoading = createAction('[ROOT] Start Loading');
const stopLoading = createAction('[ROOT] Stop Loading');

// tslint:disable: naming-convention
export const LoaderActions = { startLoading, stopLoading };
