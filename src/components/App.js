import React, {Component} from 'react';
import {getMovies} from '../apiCalls'
import './App.css';

class App extends Component { 
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    try {
      const data = await getMovies();
      this.setState({movies:data})
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}
export default App;
