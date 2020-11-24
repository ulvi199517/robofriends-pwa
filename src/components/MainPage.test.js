import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../components/MainPage';
import toJson from 'enzyme-to-json';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps}/>);
})
it('renders MainPage without crashing', () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});
it('filters robots correctly', () => {
  expect(wrapper.instance().filterRobots([])).toEqual([])
}); 