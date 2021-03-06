import {getMovies, getUpcomingMovies, createNewUser, logInuser, getUserFavorites, postFavorite, deleteFavorite, logInUser, cleanMovieData} from  './apiCalls';


describe('getMovies', () => {
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
    }];
    let expectedMovies = [{
    "poster_path": "/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg",
    "movie_id": 338967,
    "title": "Zombieland: Double Tap",
    "vote_average": 7.3,
    "overview": "The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.",
    "release_date": "2019-10-18"
  },
  {
    "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
    "movie_id": 290859,
    "title": "Terminator: Dark Fate",
    "vote_average": 7.4,
    "overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
    "release_date": "2019-11-01"
  }];
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({results:mockMovies})
        })
      })
    });
    it('should fetch with the correct URL', () => {
      let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=9e1950f701d0af712babdede31811e9e&language=en-US';
      getMovies();
      expect(window.fetch).toHaveBeenCalledWith(url)
    });
    it('should return an array of movies (HAPPY)', () => {
      expect(getMovies()).resolves.toEqual(expectedMovies);
    });
    it('should throw an error if something goes wrong (SAD)', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      expect(getMovies()).rejects.toEqual(Error('Woops! Something went wrong'))
    });
})

describe('getUpcomingMovies', () => {
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
  }];
  let expectedMovies = [{
    "poster_path": "/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg",
    "movie_id": 338967,
    "title": "Zombieland: Double Tap",
    "vote_average": 7.3,
    "overview": "The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.",
    "release_date": "2019-10-18"
  },
  {
    "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
    "movie_id": 290859,
    "title": "Terminator: Dark Fate",
    "vote_average": 7.4,
    "overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
    "release_date": "2019-11-01"
  }];
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({results:mockUpcomingMovies})
      })
    })
  });
  it('should fetch with the correct URL', () => {
    let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=9e1950f701d0af712babdede31811e9e&language=en-US';
    getUpcomingMovies();
    expect(window.fetch).toHaveBeenCalledWith(url)
  });
  it('should return an array of movies (HAPPY)', () => {
    expect(getUpcomingMovies()).resolves.toEqual(expectedMovies);
  });
  it('should throw an error if something goes wrong (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(getUpcomingMovies()).rejects.toEqual(Error('Woops! Something went wrong'))
  })
});

describe('createNewUser', () => {
  let mockUserRes = {
    id: 34,
    name: 'Sam',
    email: 's@g.com',
    password: 'password'
  }
  let mockUser = {
    name: 'Sam',
    email: 's@g.com',
    password: 'password'
  }
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUserRes)
      })
    })
  });
  it('should fetch with the correct arguments', () => {
    const expected = ['http://localhost:3001/api/v1/users', {
      method: 'POST',
      body: JSON.stringify(mockUser),
      headers: {
        'Content-Type': 'application/json'
      }
    }]
    createNewUser(mockUser);
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  });
  it('should return a user with an id (HAPPY)', () => {
    expect(createNewUser(mockUser)).resolves.toEqual(mockUserRes);
  });
  it('should tell us an email has already been used if the res has a status of 500 (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 500
      })
    })
    expect(createNewUser(mockUser)).rejects.toEqual(Error('This email has already been used'))
  })
  it('should throw an error if something else goes wrong (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(createNewUser(mockUser)).rejects.toEqual(Error('Woops! Something went wrong'))
  })
});

describe('logInUser', () => {
  let mockUserRes = {
    id: 34,
    name: 'Sam',
    email: 's@g.com',
    password: 'password'
  }
  let mockUser = {
    email: 's@g.com',
    password: 'password'
  }
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUserRes)
      })
    })
  });
  it('should be called with the correct arguments', () => {
    const expected = ['http://localhost:3001/api/v1/login', {
      method: 'POST',
      body: JSON.stringify(mockUser),
      headers: {
        'Content-Type': 'application/json'
      }
    }]
    logInUser(mockUser);
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  });
  it('should return a user with an id (HAPPY)', () => {
    expect(logInUser(mockUser)).resolves.toEqual(mockUserRes);
  });
  it('should tell us if the email or password is wrong if the res has a status of 401 (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        status: 401
      })
    })
    expect(logInUser(mockUser)).rejects.toEqual(Error('email or password is incorrect'))
  })
  it('should throw an error if something else goes wrong (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(createNewUser(mockUser)).rejects.toEqual(Error('Woops! Something went wrong'))
  })
})

describe('getUserFavorites', () => {
  let mockFaves = [{
    user_id: 5,
    "poster_path": "/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg",
    "id": 338967,
    "title": "Zombieland: Double Tap",
    "vote_average": 7.3,
    "overview": "The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.",
    "release_date": "2019-10-18"
  },
  {
    user_id: 5,
    "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
    "id": 290859,
    "title": "Terminator: Dark Fate",
    "vote_average": 7.4,
    "overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
    "release_date": "2019-11-01"
  }]
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({favorites:mockFaves})
      })
    })
  });
  it('should be called with the correct arguments', () => {
    const expected = 'http://localhost:3001/api/v1/users/5/moviefavorites'
    getUserFavorites(5);
    expect(window.fetch).toHaveBeenCalledWith(expected)
  });
  it('should return an array of favorites (HAPPY)', () => {
    expect(getUserFavorites(5)).resolves.toEqual(mockFaves);
  });
  it('should throw an error if something goes wrong (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getUserFavorites(4)).rejects.toEqual(Error('Unable to get favorites'));
  })
});

describe('postFavorite', () => {
  let mockMovie = {
    "movie_id": 14643,
    "poster_path": "/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg",
    "id": 338967,
    "title": "Zombieland: Double Tap",
    "vote_average": 7.3,
    "overview": "The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.",
    "release_date": "2019-10-18"
  }
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true
      })
    })
  });
  it('should be called with the correct arguments', () => {
    const expected = ['http://localhost:3001/api/v1/users/5/moviefavorites', {
      method: 'POST',
      body: JSON.stringify(mockMovie),
      headers: {
        'Content-Type': 'application/json'
      }
    }]
    postFavorite(5, mockMovie);
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  });
  it('should throw an error if something goes wrong (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(postFavorite(5, mockMovie)).rejects.toEqual(Error('Could not add favorite movie.'));
  });
})

describe('deleteFavorite', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true
      })
    })
  });
  it('should be called with the correct arguments', () => {
    const expected = ['http://localhost:3001/api/v1/users/5/moviefavorites/6453', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }]
    deleteFavorite(5, 6453);
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  });
  it('should throw an error if something goes wrong (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(deleteFavorite(5, 1232)).rejects.toEqual(Error('Could not delete favorite.'));
  });
})


