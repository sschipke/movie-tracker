import React from 'react';
import { shallow } from 'enzyme';
import { MovieCard, mapStateToProps } from './MovieCard';

describe('MovieCard',() => {
  let wrapper, mockMovie, mockFavorites;
  const mockToggleFavorites = jest.fn()
  beforeEach(() => {
    mockMovie = {
      "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
      "id": 290859,
      "title": "Terminator: Dark Fate",
      "vote_average": 7.4,
      "overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
      "release_date": "2019-11-01"
    }
    mockFavorites = [{
      "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
      "id": 290859,
      "title": "Terminator: Dark Fate",
      "vote_average": 7.4,
      "overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
      "release_date": "2019-11-01"
    }]
    wrapper = shallow(<MovieCard 
      movie = {mockMovie}
      favorites = {mockFavorites}
      toggleFavorites = {mockToggleFavorites}
      />)
  });

  it('should match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleFavorites when the star is clicked',() => {
    const event = { preventDefault:jest.fn() }
    wrapper.find('.card__image-favorite').simulate('click', event);
    expect(mockToggleFavorites).toHaveBeenCalledWith(event, mockMovie)
  });

})

describe('MovieCard Redux',() => {

  it('should map favorite array to state',() => {
    const mockFavorites = [
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
    const mockState = {
      favorites:mockFavorites
    };

    const expectedState = { 
      favorites:mockState.favorites
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expectedState)
  })

})
