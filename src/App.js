import React from 'react';
import './App.css';
import MovieRow from './MovieRow';


function App() {
  return (
    <div className="App">
      <MovieRow title="Netflix Originals" />
      <MovieRow title="Trending Now" />
    </div>
  );
}

export default App;
