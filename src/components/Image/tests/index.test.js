import React from 'react';
import { shallow } from 'enzyme';

import Image from '../index';

describe('<Image />', () => {
  it('should render a <img> tag', () => {
    const renderedComponent = shallow(<Image src='google.com' alt="alt" />);
    expect(renderedComponent.type()).toEqual('img');
  });

  it('should adopt src attribute', () => {
    const renderedComponent = shallow(<Image src='mamamoo.com' alt="alt" />);
    expect((renderedComponent.find('img')).prop('src')).toEqual("mamamoo.com");
  });

  it('should have className attribute', () => {
    const renderedComponent = shallow(<Image src='mamamoo.com' alt="alt" className="email" />);
    expect((renderedComponent.find('img')).prop('className')).toEqual('email');
  });

  it('should have srcSet attribute', () => {
    const renderedComponent = shallow(<Image src='mamamoo.com' srcSet="bambang" alt="alt" />);
    expect((renderedComponent.find('img')).prop('srcSet')).toEqual('bambang');
  });

  it('should have alt attribute', () => {
    const renderedComponent = shallow(<Image src='mamamoo.com' alt="alit" />);
    expect((renderedComponent.find('img')).prop('alt')).toEqual('alit');
  });
});
