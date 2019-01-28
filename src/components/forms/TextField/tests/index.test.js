import React from 'react';
import { shallow, mount } from 'enzyme';

import TextField from '../index';

describe ('<TextField />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<TextField/>);
    expect(renderedComponent.type()).toEqual('div');
  });
});