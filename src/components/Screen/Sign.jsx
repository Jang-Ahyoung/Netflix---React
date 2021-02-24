import React from 'react';
import styles from './Sign.module.css';

function Sign() {
    return (
        <div className={styles.sign}>
            <h1>Sign In</h1>
            <form>
                <input type="email" placeholder="Enter email"/>
                <input type="password" placeholder="Enter password"/>
                <button className={styles.button} type="submit">Sign In</button>
                <h4>
                    <span className={styles.gray}>New to Netflix? </span> 
                    <span className={styles.link}> Sign Up now</span></h4>
            </form>
        </div>
    )
}

export default Sign
