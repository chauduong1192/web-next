import { Thunk } from 'redux-testkit';
import * as actions from '@redux/todo/actions';
import * as todoTypes from '@redux/todo/types';

import { getTodos } from '@api/todo'

jest.mock('@api/todo');

describe('Todo actions', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call action FETCH_TODO_SUCCESS', async () => {
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
    (getTodos as any).mockReturnValueOnce(mockData);
    const dispatches = await Thunk(actions.fetchTodo).execute();
    
    expect(dispatches.length).toBe(2);
    expect(dispatches[0].getAction()).toEqual({
      type: todoTypes.FETCH_TODO
    });
    expect(dispatches[1].getAction()).toEqual({
      type: todoTypes.FETCH_TODO_SUCCESS, payload: mockData
    });
  });

  it('should call action FETCH_TODO_FAILED', async () => {
    const mockData = 'error message';
    (getTodos as any).mockRejectedValueOnce('error message');
    const dispatches = await Thunk(actions.fetchTodo).execute();
    
    expect(dispatches.length).toBe(2);
    expect(dispatches[0].getAction()).toEqual({
      type: todoTypes.FETCH_TODO
    });
    expect(dispatches[1].getAction()).toEqual({
      type: todoTypes.FETCH_TODO_FAILED, payload: mockData
    });
  });

});
