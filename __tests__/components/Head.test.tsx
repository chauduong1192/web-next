import React from 'react';
import { shallow } from 'enzyme';
import Head from '@components/Head';

describe('Head', () => {
  it('should render Head', () => {
    const wrapper = shallow(<Head />);
    expect(wrapper.exists()).toBe(true);
  });
});
