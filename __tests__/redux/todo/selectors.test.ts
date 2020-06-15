import { Selector } from 'redux-testkit';
import * as selectors from '@redux/todo/selectors';

describe('todo selector', () => {

  it('should select all state in todo', () => {
    const state = {
      todo: {
        isFetching: false,
        isError: false,
        list: [],
        error: undefined,
      }
    };
    const result = state.todo;
    Selector(selectors.getReducer).expect(state).toReturn(result);
  });
});
