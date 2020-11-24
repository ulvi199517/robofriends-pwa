import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';
import toJson from 'enzyme-to-json';

it('renders without crashing', () => {
    const mockColor = 'red';
  expect(toJson(shallow(<CounterButton color={mockColor}/>))).toMatchSnapshot();
});

it('correctly increments the counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor}/>);
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count: 2});
})