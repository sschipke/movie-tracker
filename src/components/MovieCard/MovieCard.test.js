import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';

describe('MovieCard',() => {
  let wrapper, movie;
  beforeEach(() => {
    movie = {
      "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
      "id": 290859,
      "title": "Terminator: Dark Fate",
      "vote_average": 7.4,
      "overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
      "release_date": "2019-11-01"
    }
    wrapper = shallow(<MovieCard movie={movie}/>)
  })
  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
})