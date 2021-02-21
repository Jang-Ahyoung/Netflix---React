import React from 'react'
import requests from '../../service/request';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Row from '../Row/Row';
import styles from './HomeScreen.module.css';

function HomeScreen() {
    return (
        <div className={styles.homeScreen}>
            <Navbar />
            <Banner />
            <Row title = 'NETFLIX ORIGINALS'
                 fetchUrl = {requests.fetchNetflixOriginals} isLargeRow/>
            <Row title = 'TOP Rated' fetchUrl = {requests.fetchTopRated}/>
            <Row title = 'Action Movies' fetchUrl = {requests.fetchActionMovies}/>
            <Row title = 'Comedy Movies' fetchUrl = {requests.fetchComedyMovies}/>
            <Row title = 'Horror Movies' fetchUrl = {requests.fetchHorrorMovies}/>
            <Row title = 'Ramance Movies' fetchUrl = {requests.fetchRomanceMovies}/>
            <Row title = 'Document Movies' fetchUrl = {requests.fetchDocumentaries}/>
            


        </div>
    )
}

export default HomeScreen;
