import React from 'react';
import { shallow, mount } from 'enzyme';

import TextField from '../index';

describe('<TextField />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<TextField />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should adopt disabled attribute', () => {
    const renderedComponent = shallow(<TextField disabled inputId="testid" />);
    expect((renderedComponent.find('#testid')).prop('disabled')).toEqual(true);
  });

  it('should have type attribute', () => {
    const renderedComponent = shallow(<TextField type="email" inputId="testid" />);
    expect((renderedComponent.find('#testid')).prop('type')).toEqual('email');
  });

  it('should have value attribute', () => {
    const renderedComponent = shallow(<TextField value="Bambang" inputId="testid" />);
    expect((renderedComponent.find('#testid')).prop('value')).toEqual('Bambang');
  });

  it('should have placeholder attribute', () => {
    const renderedComponent = shallow(<TextField placeholder="komisi8@yahoo.com" inputId="testid" />);
    expect((renderedComponent.find('#testid')).prop('placeholder')).toEqual('komisi8@yahoo.com');
  });

  it('should have maxLength attribute', () => {
    const renderedComponent = shallow(<TextField maxLength="200" inputId="testid" />);
    expect((renderedComponent.find('#testid')).prop('maxLength')).toEqual('200');
  });

  it('should have left icon', () => {
    const renderedComponent = mount(<TextField iconLeft="fa fa-lock" />);
    expect((renderedComponent.find('i')).prop('className')).toEqual('fa fa-lock');
  });

  it('should have right icon', () => {
    const renderedComponent = mount(<TextField iconRight="fa fa-lock" />);
    expect((renderedComponent.find('i')).prop('className')).toEqual('fa fa-lock');
  });

  it('should have onClick attribute', () => {
    const onClickMock = jest.fn();
    const renderedComponent = mount(<TextField onInputClick={onClickMock} />);
    renderedComponent.find('input').simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });

  it('should have onValueChange', () => {
    const onValueChangeMock = jest.fn();
    const renderedComponent = mount(<TextField onValueChange={onValueChangeMock} />);
    renderedComponent.find('input').simulate('change');
    expect(onValueChangeMock).toHaveBeenCalled();
  });
});
