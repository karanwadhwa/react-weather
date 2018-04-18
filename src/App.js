import React, { Component } from 'react';
import './App.css';

import SearchBar from './containers/SearchBar';

class App extends Component {
  render() {
    return (
      <html>
      <SearchBar />
      <p>React-weather-app</p>
      </html>
    );
  }
}

export default App;
