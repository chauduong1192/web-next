import { key } from './';
import { ITestState } from './reducer';

export const getReducer = (state): ITestState => state[key];
export const getTest = state => getReducer(state).test2;
