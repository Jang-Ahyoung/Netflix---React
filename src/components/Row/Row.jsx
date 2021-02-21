import axios from '../../service/axios';
import requests from '../../service/request';
import React, { useEffect, useState } from 'react'
import './Row.css';

function Row({title, fetchUrl, isLargeRow=false}) {
    const baseUrl = 'https://image.tmdb.org/t/p/original/';
    const [movies, setMovies] = useState([]);
    useEffect(() => { 
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);
    
    return (
        <div className='Row'>
            <h1>{title}</h1>
            <div className="posters">
                {movies.map(movie =>(
                    ((isLargeRow && movie.poster_path)||
                    (!isLargeRow && movie.backdrop_path)) && (
                        <img className={`poster ${isLargeRow && 'posterLarge'}`}
                    key={movie.id}
                    src={`${baseUrl}${isLargeRow? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}/>
                    )
                
                ))}
            </div>
            

        </div>
    )
}

export default Row;
