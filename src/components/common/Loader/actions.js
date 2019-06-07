import { createAction } from 'redux-actions';

export const START_LOADER = 'startLoader';
export const STOP_LOADER = 'stopLoader';

export const startLoader = createAction(START_LOADER);
export const stopLoader = createAction(STOP_LOADER);
