import { key } from '.';
import { ITodoState } from './reducer';

export const getReducer = (state): ITodoState => state[key];
