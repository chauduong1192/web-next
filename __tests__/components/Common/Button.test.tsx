import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '@components/Common';

describe('Button', () => {
  let wrapper;
  const props = {
    icon: false,
    rounded: false,
    size: 'sm',
    isBusy: false,
  };
  beforeEach(async () => {
    wrapper = shallow(<Button {...props} />);
  });

  it('should render with default props', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render with other props', () => {
    wrapper.setProps({
      icon: true,
      rounded: true,
      isBusy: true,
    });
    expect(wrapper.exists()).toBe(true);
  });
});
