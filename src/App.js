import React from 'react';
import './App.css';
import MovieRow from './MovieRow';
import requests from './requests';
import Banner from './Banner';


function App() {
  return (
    <div className="App">
      <Banner />

      <MovieRow title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargePosters={true}/>
      <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MovieRow title="Action Moview" fetchUrl={requests.fetchActionMovies} />
      <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MovieRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <MovieRow title="Family Movies" fetchUrl={requests.fetchFamilyMovies} />
      <MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
