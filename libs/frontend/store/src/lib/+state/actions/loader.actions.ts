import { createAction } from '@ngrx/store';

const startLoading = createAction('[ROOT] Start Loading');
const stopLoading = createAction('[ROOT] Stop Loading');

// eslint-disable-next-line @typescript-eslint/naming-convention
export const LoaderActions = { startLoading, stopLoading };
