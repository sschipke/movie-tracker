import React from 'react';
import { Login, mapStateToProps } from './Login';
import { shallow } from 'enzyme';
import { getUserFavorites } from '../../util/apiCalls';
import { setFavorites } from '../../actions';

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
    
  })
})
