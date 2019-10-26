import React from 'react';
import { Login, mapStateToProps } from './Login';
import { shallow } from 'enzyme';
import { getUserFavorites } from '../../util/apiCalls';
import * as actions from '../../actions';

jest.mock('../../util/apiCalls');

describe('Login', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />)
  })
  it('should match the initial snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  describe('handleChange', () => {
    it('should update state if a user types in their name', () => {
      const mockEvent = {target: {name: 'name', value: 'Steve' }};
      expect(wrapper.state('name')).toEqual('');
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('name')).toEqual(mockEvent.target.value)
    })
    it('should update state if a user types in their email', () => {
      const mockEvent = { target: { name: 'email', value: 'steve@g.com' } };
      wrapper.instance().setState({name: 'Steve'});
      expect(wrapper.state('email')).toEqual('');
      expect(wrapper.state('name')).toEqual('Steve')

      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('email')).toEqual(mockEvent.target.value)
    expect(wrapper.state('name')).toEqual('Steve')
    })
    it('should update state if a user types in their password', () => {
      const mockEvent = { target: { name: 'password', value: 'password' } };
      wrapper.instance().setState({ name: 'Steve' });
      wrapper.instance().setState({ email: 'steve@g.com' });
      expect(wrapper.state('email')).toEqual('steve@g.com');
      expect(wrapper.state('name')).toEqual('Steve')

      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('password')).toEqual(mockEvent.target.value);
      expect(wrapper.state('name')).toEqual('Steve');
      expect(wrapper.state('email')).toEqual('steve@g.com')
    })
  })
  describe('handleSubmit', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Login />)
    })
    it('shoule prevent the default action when the form is submitted', () => {
      const mockEvent = {preventDefault: jest.fn()};
      wrapper.find('form').simulate('submit', mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalled()
    })
  })
  describe('redux actions', () => {
    let mockUser = {
      id: 4,
name: "Susan",
email: "susan@gmail.com"
    }
    let mockFaves = [{
      id: 15,
movie_id: 578189,
user_id: 4,
title: "Black and Blue",
poster_path: "/fjmMu9fpqMMF17mCyLhNfkagKB0.jpg",
release_date: "2019-10-25",
vote_average: "4.6",
overview: "Exposure follows a rookie Detroit African-American female cop who stumbles upon corrupt officers who are murdering a drug dealer, an incident captured by her body cam. They pursue her through the night in an attempt to destroy the footage, but to make matters worse, they've tipped off a criminal gang that she's responsible for the dealer's death."}, {
        id: 22,
movie_id: 454640,
user_id: 4,
title: "The Angry Birds Movie 2",
poster_path: "/ebe8hJRCwdflNQbUjRrfmqtUiNi.jpg",
release_date: "2019-08-14",
vote_average: "6.4",
overview: "Red, Chuck, Bomb and the rest of their feathered friends are surprised when a green pig suggests that they put aside their differences and unite to fight a common threat. Aggressive birds from an island covered in ice are planning to use an elaborate weapon to destroy the fowl and swine."
}]
    it('make an action with a type of SET_USER', () => {
      const expectedAction = {
        type: 'SET_USER',
        user: mockUser
      }
      expect(actions.setUser(mockUser)).toEqual(expectedAction)
    })
    it('make an action with a type of SET_FAVORITES', () => {
      const expectedAction = {
        type: 'SET_FAVORITES',
        favorites: mockFaves
      }
      expect(actions.setFavorites(mockFaves)).toEqual(expectedAction)
    })
  })
})
