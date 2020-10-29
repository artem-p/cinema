import React, {useState, useEffect} from 'react';
import './Banner.css';
import api from './axios';
import requests from './requests';


function Banner() {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        async function fetchMovie() {
            const request = await api.get(requests.fetchTrending);

            const randomIndex = Math.floor(Math.random() * request.data.results.length);
            const randomMovie = request.data.results[randomIndex];
            
            setMovie(randomMovie);
        }

        fetchMovie();
    }, [])

    console.log(movie);

    return (
        <header 
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center"
            }}>
                
            <div className="banner__contents">
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
            </div>

            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>

            <h1 className="banner__description">
                {movie?.overview}
            </h1>
        </header>
    )
}

export default Banner;
