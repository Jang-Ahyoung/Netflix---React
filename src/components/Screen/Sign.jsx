import React, { useRef } from 'react';
import { auth } from '../../service/firebase'; // 파이어베이스 파일에서 인증을 가져와
import styles from './Sign.module.css';

function Sign() {
    const emailRef = useRef(null); // html을 아주 큰 손가락으로 가리키고 있다고 생각해 
    const passwordRef = useRef(null);
    const register = (e) => {
        // 등록 버튼을 누를때 마다 사용자의 이메일로 계정을 만들고 인증을 원해
        e.preventDefault();
        // 인증 객체를 얻었으니 실제 사용자 이메일로 생성
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);

        }).catch(error => {
            alert(error.message);
        })
    };

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message);
        })
    }
    return (
        <div className={styles.sign}>
            <h1>Sign In</h1>
            <form>
                <input ref={emailRef} type="email" placeholder="Enter email" />
                <input ref={passwordRef} type="password" placeholder="Enter password" />
                <button className={styles.button} type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className={styles.gray}>New to Netflix? </span>
                    <span className={styles.link} onClick={register}> Sign Up now</span></h4>
            </form>
        </div>
    )
}

export default Sign
