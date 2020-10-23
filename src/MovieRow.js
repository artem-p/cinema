import React, {useState, useEffect} from 'react';
import './MovieRow.css';
import api from './axios';


function MovieRow({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // if [], run once when loads and don't run again
        async function fetchData() {
            const request = await api.get(fetchUrl);
            console.log(request);
            return request;
        }

        fetchData();
    }, [])

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default MovieRow
