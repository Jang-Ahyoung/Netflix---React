import React from 'react'
import styles from './Banner.module.css';


function Banner() {
    return (
        <div className={styles.Banner}
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundImage: `url('https://cdn.mos.cms.futurecdn.net/98GnqFKaUMYU3GG5HxhLWZ.jpg')`
            }}>
            <div className={styles.contents}>
                <h1 className={styles.title}>Movie Name</h1>
            </div>
        </div>
    )
}

export default Banner;
