import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import toJson from 'enzyme-to-json';

it('renders without crashing', () => {
  expect(toJson(shallow(<Card/>))).toMatchSnapshot();
});