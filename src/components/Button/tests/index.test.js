import React from 'react';
import { shallow, mount } from 'enzyme';

import Button from '../index';

describe('Button />', () => {
  it('should render a <button> tag', () => {
    const renderedComponent = shallow(<Button />);
    expect(renderedComponent.type()).toEqual('button');
  });

  it('should accept a buttonStyle attribute', () => {
    const renderedComponent = shallow(<Button buttonStyle="danger" />);
    expect((renderedComponent.find('button')).prop('className')).toEqual('btn btn-danger');
  });

  it('should accept a buttonSize attribute', () => {
    const renderedComponent = shallow(<Button buttonSize="lg" />);
    expect((renderedComponent.find('button')).prop('className')).toEqual('btn btn-lg');
  });

  it('should render a disabled attribute', () => {
    const renderedComponent = shallow(<Button disabled />);
    expect((renderedComponent.find('button')).prop('disabled')).toEqual(true);
  });

  it('shoudl render a correct icon if it has iconLeft attribute', () => {
    const renderedComponent = mount(<Button iconLeft="fa fa-hello" />);
    expect((renderedComponent.find('StyledComponent')).prop('className')).toEqual('fa fa-hello');
  });

  it('shoudl render a correct icon if it has iconRight attribute', () => {
    const renderedComponent = mount(<Button iconRight="fa fa-hello" />);
    expect((renderedComponent.find('StyledComponent')).prop('className')).toEqual('fa fa-hello');
  });

  it('should render a correct children', () => {
    const renderedComponent = mount(<Button>Halo</Button>);
    expect(renderedComponent.text()).toEqual('Halo');
  });
});
