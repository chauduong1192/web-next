import { key } from './';
import { ICommonState } from './reducer';

export const getReducer = (state): ICommonState => state[key];
export const getCommon = state => getReducer(state).isCommon;
