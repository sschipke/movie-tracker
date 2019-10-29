import React from 'react';
import { Nav, mapStateToProps} from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<Nav user={{}} />);
    expect(wrapper).toMatchSnapshot();
  })
})

describe('mapStateToProps', () => {
  it('should return an object with a user in it', () => {
    const mockUser = {
      id: 5,
      name: 'Greg',
      email: 'g@dev.com',
      password: 'password1234'
    }
    const mockState = {user: mockUser}

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(mockState)
  })
})

describe('Nav', () => {
  it('should render a logout button if a user is passed in', () => {
    const mockUser = {
      id: 5,
      name: 'Greg',
      email: 'g@dev.com',
      password: 'password1234'
    }
    const wrapper = shallow(<Nav user={mockUser}/>)
    expect(wrapper).toMatchSnapshot()
  })
})