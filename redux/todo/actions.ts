import {
  FETCH_TODO,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILED,
} from './types';

import { getTodos } from '@api/todo';

const fetchTodo = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_TODO,
    });

    try {
      const resTodo = await getTodos();
      dispatch({
        type: FETCH_TODO_SUCCESS,
        payload: resTodo,
      });
    } catch (error) {
      dispatch({
        type: FETCH_TODO_FAILED,
        payload: error,
      });
    }

  };
};

export  {
  fetchTodo,
};
