import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '@components/Common';

describe('Button', () => {
  it('should render Button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
  });
});
