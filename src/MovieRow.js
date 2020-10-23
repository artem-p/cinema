import React, {useState, useEffect} from 'react';
import './MovieRow.css';
import api from './axios';

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original/";

function MovieRow({ title, fetchUrl }) {
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
                    <img key={movie.id} className='movieRow__poster' src={`${BASE_IMAGE_URL}${movie.poster_path}`} alt={movie.name}></img>
                ))}
            </div>
        </div>
    )
}

export default MovieRow
