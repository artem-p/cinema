import React, {useState, useEffect} from 'react';
import './MovieRow.css';


function MovieRow({ title }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // if [], run once when loads and don't run again
        
    }, [])

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default MovieRow
