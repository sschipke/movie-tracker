import React from 'react';
import { shallow } from 'enzyme';
import {Main, mapStateToProps } from './Main';

describe ('Main',() => {
  const mockMovies = [
    {
      "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
      "id": 290859,
      "title": "Terminator: Dark Fate",
      "vote_average": 7.4,
      "overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
      "release_date": "2019-11-01"
    },
    {
      "poster_path": "/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg",
      "id": 338967,
      "title": "Zombieland: Double Tap",
      "vote_average": 7.3,
      "overview": "The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.",
      "release_date": "2019-10-18"
    }
  ];
  const mockUpcomingMovies = mockMovies;

  const wrapper = shallow(<Main 
                          movies={mockMovies}
                          upcomingMovies={mockUpcomingMovies}
                          />)

  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

})

describe('Main with Redux',() => {
  const mockMovies = [
    {
      "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      "id": 475557,
      "title": "Joker",
      "vote_average": 8.6,
      "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      "release_date": "2019-10-04"
    },
    {
      "poster_path": "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
      "id": 420809,
      "title": "Maleficent: Mistress of Evil",
      "vote_average": 7.1,
      "overview": "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
      "release_date": "2019-10-18"
    }
  ];
  const mockUpcomingMovies = [
    {
      "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
      "id": 290859,
      "title": "Terminator: Dark Fate",
      "vote_average": 7.4,
      "overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
      "release_date": "2019-11-01"
    },
    {
      "poster_path": "/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg",
      "id": 338967,
      "title": "Zombieland: Double Tap",
      "vote_average": 7.3,
      "overview": "The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.",
      "release_date": "2019-10-18"
    }
  ];

  it('mapStateToProps give all the movies in state',() => {
    const mockState = { 
      movies: mockMovies,
      upcomingMovies: mockUpcomingMovies,
      favorites:[],
      user:{id:1}
      };
    const expected = {
      movies: mockState.movies,
      upcomingMovies: mockState.upcomingMovies,
    };
    const mappedProps = mapStateToProps(mockState)
   
    expect(mappedProps).toEqual(expected)
  });




})