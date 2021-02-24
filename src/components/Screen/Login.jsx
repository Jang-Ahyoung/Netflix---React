import React, { useState } from 'react';
import styles from './Login.module.css';
import Sign from './Sign';

function Login() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className={styles.login}>
            <div className={styles.gradient}>
                <div className={styles.background}>
                    <img className={styles.logo} src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix"/>
                    <button onClick={()=> setSignIn(true)} className={styles.signIn}>Sign In</button>
                </div>
                <div className={styles.body}>
                    {signIn ? (<Sign/>)
                    : (
                        <>
                    <h1>Unlimaited films, TV programmes and more.</h1>
                    <h2>Watch anywhere, Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className={styles.input}>
                        <form>
                            <input type="email" placeholder="Email"/>
                            <button onClick={()=> setSignIn(true)} className={styles.getStarted}>GET STARTED</button>
                        </form>
                    </div>
                    </>
                    )}
                
                </div>
            </div>
            
            
            
        </div>
    )
}

export default Login
