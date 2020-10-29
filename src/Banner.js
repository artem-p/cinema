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


    function truncate(str, number) {
        return str?.length > number ? str.substr(0, number - 1) + "…" : str;
    }

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
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner;
