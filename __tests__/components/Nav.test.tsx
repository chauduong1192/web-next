import React from 'react';
import { shallow } from 'enzyme';
import Nav from '@components/Nav';

describe('Nav', () => {
  it('should render Nav', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.exists()).toBe(true);
  });
});
