import { mapStateToProps } from '@components/Todo/TodoContainer';

describe('TodoContainer', () => {

  it('should map state in mapStateToProps', () => {
    const initialState = {
      todo: {
        isFetching: false,
        isError: false,
        list: [], 
      }
    }
    expect(mapStateToProps(initialState)).toEqual(initialState.todo);
  });
});
