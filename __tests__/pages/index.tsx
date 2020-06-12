import { shallow } from 'enzyme';
import * as React from 'react';

import Error from '../../pages/404';

describe('Home', () => {

  it('should render Index', () => {
    const wrapper = shallow(<Error />);
    expect(wrapper).toMatchSnapshot();
  });
});
