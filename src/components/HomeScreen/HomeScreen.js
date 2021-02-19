import React from 'react'
import Navbar from '../Navbar/Navbar';
import styles from './HomeScreen.module.css';

function HomeScreen() {
    return (
        <div className={styles.homeScreen}>
            <Navbar />
            홈스크린
        </div>
    )
}

export default HomeScreen;
