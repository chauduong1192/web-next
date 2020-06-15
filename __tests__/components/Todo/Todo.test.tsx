import React from 'react';
import { shallow } from 'enzyme';

import { Todo } from '@components/Todo';

describe('Todo', () => {
  let wrapper;
  const props = {
    fetchTodo: jest.fn(),
    isFetching: true,
    isError: false,
    list: [],
  };

  beforeEach(async () => {
    jest.spyOn(React, 'useEffect').mockImplementation(f => f())
    wrapper = shallow(<Todo {...props} />);
  });

  it('should render Todo', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should update isFetching', () => {
    wrapper.setProps({
      isFetching: false,
      list: [
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
      ],
    });
    expect(wrapper.exists()).toBe(true);
  });
});
