import React from 'react'
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import styles from './HomeScreen.module.css';

function HomeScreen() {
    return (
        <div className={styles.homeScreen}>
            <Navbar />
            <Banner />

        </div>
    )
}

export default HomeScreen;
