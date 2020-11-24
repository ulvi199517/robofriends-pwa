import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';
import toJson from 'enzyme-to-json';

it('renders without crashing', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            email: 'john@gmail.com'
        }
    ]
  expect(toJson(shallow(<CardList robots={mockRobots}/>))).toMatchSnapshot();
});