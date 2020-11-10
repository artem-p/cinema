import React, {useState, useEffect} from 'react';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './MovieRow.css';
import api from './axios';

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original/";

const YOUTUBE_OPTIONS = {
    height: "390",
    width: "100%",
    playerVars: {
        autoplay: 1,
    },
};

function MovieRow({ title, fetchUrl, isLargePosters }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        // if [], run once when loads and don't run again
        async function fetchData() {
            const request = await api.get(fetchUrl);
            setMovies(request.data.results);

            return request;
        }

        fetchData();
    }, [fetchUrl])

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.title || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow__posters">
                {movies.map(movie => (
                    <img key={movie.id} 
                        className={`movieRow__poster ${isLargePosters && "movieRow__posterLarge"}`} 
                        src={`${BASE_IMAGE_URL}${isLargePosters ? movie.poster_path : movie.backdrop_path}`}
                        onClick={() => handleClick(movie)} 
                        alt={movie.name}>
                    </img>
                ))}
            </div>

            {trailerUrl && <Youtube videoId={trailerUrl} opts={YOUTUBE_OPTIONS}/>}
        </div>
    )
}

export default MovieRow
