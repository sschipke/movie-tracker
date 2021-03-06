import favorites from './favorites';
import movies from './movies';
import upcomingMovies from './upcomingMovies';
import user from './user';

describe('favorites reducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = favorites(undefined, {});
    expect(result).toEqual(expected)
  });
  it('should return state with favorites', () => {
    let mockFavs = [{
      "poster_path": "/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg",
      "id": 338967,
      "title": "Zombieland: Double Tap",
      "vote_average": 7.3,
      "overview": "The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.",
      "release_date": "2019-10-18"
    },
      {
        "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
        "id": 290859,
        "title": "Terminator: Dark Fate",
        "vote_average": 7.4,
        "overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
        "release_date": "2019-11-01"
      }]
      let mockAction = {
        type: 'SET_FAVORITES',
        favorites: mockFavs
      }
      const result = favorites([], mockAction);
      expect(result).toEqual(mockFavs)
  })
});

describe('movies', () => {
  it('should return the default state as an empty array', () => {
    const result = movies(undefined, {});
    expect(result).toEqual([]);
  });
  it('should return a state of movies if the SET_MOVIES case is hit', () => {
    let mockMovies = [{
      "poster_path": "/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg",
      "id": 338967,
      "title": "Zombieland: Double Tap",
      "vote_average": 7.3,
      "overview": "The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.",
      "release_date": "2019-10-18"
    },
    {
      "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
      "id": 290859,
      "title": "Terminator: Dark Fate",
      "vote_average": 7.4,
      "overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
      "release_date": "2019-11-01"
    }]
    const result = movies([], {
      type: 'SET_MOVIES',
      movies: mockMovies
    })
    expect(result).toEqual(mockMovies)
  })
})

describe('upcomingMovies', () => {
  it('should return the default state as an empty array', () => {
    const result = movies(undefined, {});
    expect(result).toEqual([]);
  });
  it('should return a state of upcomingMovies if the SET_UPCOMING_MOVIES case is hit', () => {
    let mockUpcomingMovies = [{
      "poster_path": "/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg",
      "id": 338967,
      "title": "Zombieland: Double Tap",
      "vote_average": 7.3,
      "overview": "The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.",
      "release_date": "2019-10-18"
    },
    {
      "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
      "id": 290859,
      "title": "Terminator: Dark Fate",
      "vote_average": 7.4,
      "overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
      "release_date": "2019-11-01"
    }]
    const result = upcomingMovies([], {
      type: 'SET_UPCOMING_MOVIES',
      upcomingMovies: mockUpcomingMovies
    })
    expect(result).toEqual(mockUpcomingMovies)
  })
});

describe('user', () => {
  let mockUser = {
    name: 'Shanda',
    email: 'shanda@hotmail.com',
    password: 'password',
    id: 4
  }
  it('should return an empty object for the default state', () => {
    const result = user(undefined, {});
    expect(result).toEqual({});
  });
  it('should return a user object when the SET_USER case is hit', () => {
    const mockAction = {
      type: 'SET_USER',
      user: mockUser
    }
    
    const result = user(undefined, mockAction);
    expect(result).toEqual(mockUser)
  })
})

