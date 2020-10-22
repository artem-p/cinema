import React from 'react';
import './App.css';
import MovieRow from './MovieRow';
import requests from './requests';


function App() {
  return (
    <div className="App">
      <MovieRow title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
