import React, {useState, useEffect} from 'react';
import './MovieRow.css';
import api from './axios';

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original/";

function MovieRow({ title, fetchUrl, isLargePosters }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // if [], run once when loads and don't run again
        async function fetchData() {
            const request = await api.get(fetchUrl);
            setMovies(request.data.results);

            return request;
        }

        fetchData();
    }, [fetchUrl])

    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow__posters">
                {movies.map(movie => (
                    <img key={movie.id} className={`movieRow__poster ${isLargePosters && "movieRow__posterLarge"}`} 
                        src={`${BASE_IMAGE_URL}${isLargePosters ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}>
                    </img>
                ))}
            </div>
        </div>
    )
}

export default MovieRow
