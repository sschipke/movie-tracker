import { setMovies, 
        setUpcomingMovies, 
        setUser, 
        setFavorites } from './index.js';

describe('action creators',() => {
  it('setMovies should return the correct object', () => {
    const movies = [
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
    const expected = ({
      type: 'SET_MOVIES',
      movies
    });
    const results = setMovies(movies);

    expect(results).toEqual(expected);
  });

  it('setUpcomingMovies  should return the correct object', () => {
    const upcomingMovies = [
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
    const expected = ({
      type: 'SET_UPCOMING_MOVIES',
      upcomingMovies
    });
    const results = setUpcomingMovies(upcomingMovies);

    expect(results).toEqual(expected);
  });

  it('setUser should return the correct object', () => {
    const user = {
      name:'Susan',
      email:'susan@gmail.com',
      password:'WhatAnimalIsBest'
    };
    const expected = ({
      type: 'SET_USER',
      user
    });
  const results = setUser(user);

  expect(results).toEqual(expected);
  });

  it('setFavorites should return the correct object', () => {
    const favorites = [
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
    const expected = ({
      type: 'SET_FAVORITES',
      favorites
    });
    const results = setFavorites(favorites);
  
    expect(results).toEqual(expected);
  });
})