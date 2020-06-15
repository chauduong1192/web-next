import { Reducer } from 'redux-testkit';
import reducer from '@redux/todo/reducer';
import * as commonTypes from '@redux/todo/types';

describe('todo reducer', () => {
  const initialState = {
    isFetching: false,
    isError: false,
    list: [],
    error: undefined,
  };

  it('should handle FETCH_TODO', () => {
    const action = { type: commonTypes.FETCH_TODO };
    const result = {
      ...initialState,
      isFetching: true,
      list: [],
    };
    Reducer(reducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);
  });

  it('should handle FETCH_TODO_SUCCESS', () => {
    const mockData = [
      {
        completed: false,
        id: 1,
        title: "delectus aut autem",
        userId: 1,
      },
      {
        completed: false,
        id: 2,
        title: "delectus aut autem",
        userId: 1,
      },
    ];

    const action = { type: commonTypes.FETCH_TODO_SUCCESS, payload: mockData };
    const result = {
      ...initialState,
      isFetching: false,
      list: mockData,
    };
    Reducer(reducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);
  });

  it('should handle FETCH_TODO_FAILED', () => {
    const mockData = 'error message';
    const action = { type: commonTypes.FETCH_TODO_FAILED, payload: mockData };
    const result = {
      ...initialState,
      isError: true,
      isFetching: false,
      error: mockData
    };
    Reducer(reducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);
  });
});
