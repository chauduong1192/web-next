import { IGenericStoreAction } from '@redux/types';

import {
  FETCH_TODO,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILED,
} from './types';

import { IToDo } from '@api/todo/type';

export interface ITodoState {
  isFetching: boolean;
  isError: boolean;
  list: IToDo[];
  error?: object;
}

const initialState = {
  isFetching: false,
  isError: false,
  list: [],
  error: undefined,
};

const reducer = (
  state: ITodoState = initialState,
  action: IGenericStoreAction,
) => {
  switch (action.type) {
    case FETCH_TODO:
      return {
        ...state,
        isFetching: true,
        list: [],
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      };
    case FETCH_TODO_FAILED:
      return {
        ...state,
        isError: true,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
