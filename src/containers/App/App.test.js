import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps, mapDispatchToProps} from './App';
import { shallow } from 'enzyme';
import { getMovies, getUpcomingMovies, getUserFavorites, deleteFavorite, postFavorite } from '../../util/apiCalls'
import { setMovies, setUpcomingMovies, setFavorites } from '../../actions'


jest.mock('../../util/apiCalls')

describe('App',() => {
  let wrapper;
  const mockMovies = [
    {
      "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      "movie_id": 475557,
      "title": "Joker",
      "vote_average": 8.6,
      "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      "release_date": "2019-10-04"
    },
    {
      "poster_path": "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
      "movie_id": 420809,
      "title": "Maleficent: Mistress of Evil",
      "vote_average": 7.1,
      "overview": "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
      "release_date": "2019-10-18"
    }
  ];
 
  const mockSetMovies = jest.fn();
  const mockSetUpcomingMovies = jest.fn();
  const mockSetFavorites = jest.fn();
  const mockUser = {
    name:'Susan',
    id:3,
    email:'susan@lastname.com',
  }

  getMovies.mockImplementation(() => Promise.resolve(mockMovies));
  getUpcomingMovies.mockImplementation(() => Promise.resolve(mockMovies));
  getUserFavorites.mockImplementation(() => Promise.resolve(mockMovies))
  beforeEach(() => {
    wrapper = shallow(<App 
      setMovies = {mockSetMovies}
      setUpcomingMovies = {mockSetUpcomingMovies}
      setFavorites = {mockSetFavorites}
      user = {mockUser}
      favorites= {[{
        "poster_path": "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
        "movie_id": 420809,
        "title": "Maleficent: Mistress of Evil",
        "vote_average": 7.1,
        "overview": "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
        "release_date": "2019-10-18"
      }]}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('App componentDidMount',() => {
    it('should run getMovies and setMovies after mounting ', () => {
      expect(getMovies).toHaveBeenCalled();
      expect(mockSetMovies).toHaveBeenCalledWith(mockMovies)
    });

    it('should run getUpcomingMovies and setUpcomingMovies after mounting ', () => {
      expect(getUpcomingMovies).toHaveBeenCalled();
      expect(mockSetUpcomingMovies).toHaveBeenCalledWith(mockMovies)
    });
    
    it('when the is a user, it should run getUserFavorites and setUserFavorites after mounting ', () => {
      expect(getUserFavorites).toHaveBeenCalledWith(mockUser.id);
      expect(mockSetFavorites).toHaveBeenCalledWith(mockMovies)
    });
  });

  it('should call deleteFavorite, getUserFavorites,and setFavorites when removeFavorites is called', () => {
    wrapper.instance().removeFavorite(3, 420809)

    expect(deleteFavorite).toHaveBeenCalledWith(mockUser.id, 420809);
    expect(getUserFavorites).toHaveBeenCalled();
    expect(mockSetFavorites).toHaveBeenCalled()

  });
  
  it('should call postFavorite, getUserFavorites and setFavorites when addFavorites is called', () => {
    const mockNotFavMovie = {
      "poster_path": "/image.jpg",
      "movie_id": 999,
      "title": "Bob's New House",
      "vote_average": 9.6,
      "overview": "Bob buys a home.",
      "release_date": "9999-99-99"
    }
    
    wrapper.instance().addFavorite(3, mockNotFavMovie)
    
    expect(postFavorite).toHaveBeenCalledWith(mockUser.id, mockNotFavMovie);
    expect(getUserFavorites).toHaveBeenCalled();
    expect(mockSetFavorites).toHaveBeenCalled()
  });

  it('should call addFavorites when a non-favorited movie is selected with toggleFavorites', () => {
    const mockAddFavorite = jest.fn();
    wrapper.instance().addFavorite = mockAddFavorite
    const event = {
      preventDefault:jest.fn()
    }
    const mockNotFavMovie = {
      "poster_path": "/image.jpg",
      "movie_id": 999,
      "title": "Bob's New House",
      "vote_average": 9.6,
      "overview": "Bob buys a home.",
      "release_date": "9999-99-99"
    }
    wrapper.instance().toggleFavorites(event, mockNotFavMovie);
    
    expect(mockAddFavorite).toHaveBeenCalledWith(mockUser.id, mockNotFavMovie)

  });
  
  it('should call removeFavorites when a favorited movie is selected with toggleFavorites', () => {
    const mockRemoveFavorite = jest.fn();
    wrapper.instance().removeFavorite = mockRemoveFavorite
    const event = {
      preventDefault:jest.fn()
    }
    const mockFavMovie = {
      "poster_path": "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
      "movie_id": 420809,
      "title": "Maleficent: Mistress of Evil",
      "vote_average": 7.1,
      "overview": "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
      "release_date": "2019-10-18"
    }
    wrapper.instance().toggleFavorites(event, mockFavMovie)

    expect(mockRemoveFavorite).toHaveBeenCalledWith(mockUser.id, mockFavMovie.movie_id)
  });
  
})

describe('App REDUX test',() => {
  let mockMovies, mockUpcomingMovies;
  beforeEach(() => {
    mockMovies = [
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
    mockUpcomingMovies = [
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
    
  })

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
      user: mockState.user,
      favorites: mockState.favorites
    };
    const mappedProps = mapStateToProps(mockState)
   
    expect(mappedProps).toEqual(expected)
  });

  it('calls dispatch with setMovies action when setMovies is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setMovies('SET_MOVIES', mockMovies);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setMovies('SET_MOVIES', mockMovies);
    
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
  
  it('calls dispatch with setUpcomingMovies action when setUpcomingMovies is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setUpcomingMovies('SET_UPCOMING_MOVIES', mockMovies);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setUpcomingMovies('SET_UPCOMING_MOVIES', mockMovies);
    
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with setFavorites action when setFavorites is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setFavorites('SET_FAVORITES', mockMovies);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setFavorites('SET_FAVORITES', mockMovies);
    
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

});