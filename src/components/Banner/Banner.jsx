import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css';
import axios from '../../service/axios';
import requests from '../../service/request';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);
    console.log(process.env.REACT_APP_TMDB_API_KEY);

    function truncate(string,n){
        return string?.length>n 
               ? string.substr(0,n-1)+'...' 
               : string;
    }
    return (
        <div className={styles.Banner}
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
            }}>
            <div className={styles.contents}>
                <h1 className={styles.title}>Movie Name</h1>
                <div className={styles.buttons}>
                    <button className={styles.button}>Play</button>
                    <button className={styles.button}>My List</button>
                </div>
                <h1 className={styles.description}>{truncate(`This is a test description`,150)}</h1>
            </div>
            <div className={styles.fadeButton}/>
        </div>
    )
}

export default Banner;
