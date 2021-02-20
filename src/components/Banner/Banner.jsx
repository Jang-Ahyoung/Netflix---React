import React from 'react'
import styles from './Banner.module.css';

function Banner() {
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
                backgroundImage: `url('https://cdn.mos.cms.futurecdn.net/98GnqFKaUMYU3GG5HxhLWZ.jpg')`
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
