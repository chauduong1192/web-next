import React from 'react';
import { shallow } from 'enzyme';

test('hello world', () => {
  const wrapper = shallow(<p>Hello Jest!</p>);
  expect(wrapper.text()).toMatch('Hello Jest!');
});
