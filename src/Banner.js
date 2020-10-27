import React, {useState, useEffect} from 'react';
import './Banner.css';
import api from './axios';
import requests from './requests';


function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchMovie() {
            const request = await api.get(requests.fetchTrending);

            const randomIndex = Math.floor(Math.random * request.data.results.length);
            const randomMovie = request.data.results[randomIndex];
            
            setMovie(randomMovie);
        }

        fetchMovie();
    })

    return (
        <header>
            
        </header>
    )
}

export default Banner;
